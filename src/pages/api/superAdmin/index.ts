import { db } from '@/db';
import { IAdmin } from '@/interface';
import type { NextApiRequest, NextApiResponse } from 'next'
import Usuarios_id from '../teacher/[Usuarios_id]';

type Data = {
    message: string
} | { admins: IAdmin[] }

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case "GET":
            return getAllAdmins(req, res);
        case "DELETE":
            return deleteAdmin(req, res);
    
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
async function deleteAdmin(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { Usuario_id } = req.body
    console.log(Usuario_id);
    
    await db.prisma.$connect();

    const deleteAd = await db.prisma.administrador.delete({
        where: {
          Usuario_id: Number(Usuario_id)
        },
    });
    
    console.log(deleteAd);
    

    await db.prisma.$disconnect();
    
    return res.status(202);
}

