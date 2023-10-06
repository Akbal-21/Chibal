import { db } from '@/db';
import { IAdmin } from '@/interface';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
} | { admins: IAdmin[] }

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case "GET":
            return getAllAdmins(req, res);
    
            default:
            return res.status(400).json({ message: 'Bad request' })
    }
}

async function getAllAdmins(req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log("Antes de conectar a db");
    
    await db.prisma.$connect();

    const admins: IAdmin[] = await db.prisma.administrador.findMany({
        select:{
            Usuario_id: true,
            Usuarios:{
                select:{
                    Nombres: true,
                    Apellidos: true
                }
            },
            Escuela:{
                select:{
                    Nombre: true
                }
            },
            Turno:{
                select:{
                    Horario: true
                }
            }
        }
    });
    console.log(admins);
    
    await db.prisma.$disconnect();

    if (!admins) {
        return res.status(404).json({ message: "Bad Request" });
    }
    
    return res.status(200).json({ admins });
}
