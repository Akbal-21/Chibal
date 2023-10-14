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
        case "DELETE":
            return deleteSchool(req, res);
    
            default:
            return res.status(400).json({ message: 'Bad request' })
    }
}

async function getAllSchools(req: NextApiRequest, res: NextApiResponse<Data>) {
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
    
    await db.prisma.$disconnect();

    if (!schools) {
        return res.status(404).json({ message: "Bad Request" });
    }
    
    return res.status(200).json({ schools });
}

async function deleteSchool(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { School_id } = req.body
    console.log(School_id);
    
    await db.prisma.$connect();

    const deleteSc = await db.prisma.escuela.delete({
        where: {
            Escuela_id: Number(School_id)
        }
    });
    
    console.log(deleteSc);
    

    await db.prisma.$disconnect();
    
    return res.status(202);
}