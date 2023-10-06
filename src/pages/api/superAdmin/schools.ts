import { db } from '@/db';
import { ISchool } from '@/interface';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
} | { schools: ISchool[] }

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case "GET":
            return getAllSchools(req, res);
    
            default:
            return res.status(400).json({ message: 'Bad request' })
    }
}

async function getAllSchools(req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log("Antes de conectar a db");
    
    await db.prisma.$connect();

    const schools: ISchool[] = await db.prisma.escuela.findMany({
        select:{
            Escuela_id: true,
            Nombre: true,
            Administrador:{
                select:{
                    Usuarios:{
                        select:{
                            Nombres: true,
                            Apellidos: true
                        }
                    }
                }
            }
        }
    });
    console.log(schools);
    
    await db.prisma.$disconnect();

    if (!schools) {
        return res.status(404).json({ message: "Bad Request" });
    }
    
    return res.status(200).json({ schools });
}
