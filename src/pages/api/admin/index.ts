import { db } from "@/db";
import { ITeacher } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
} | { teachers: ITeacher[] }

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "DELETE":
      return deleteTeacher(req, res);
    case "GET":
      return getAllTeachers( req, res );
    case "PUT":
      return updateTeacher( req, res );
    case "POST":
      return newTeacher( req, res );

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

async function deleteTeacher(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { Usuario_id } = req.body as { Usuario_id: number };
  console.log(Usuario_id);

  // await db.prisma.$connect()

  // const user = await db.prisma.

  // await db.prisma.$disconnect()

  return res.status(200).json({ message: "Hola" });
}

async function getAllTeachers(req: NextApiRequest, res: NextApiResponse<Data>) {
  await db.prisma.$connect();

    const teachers = await db.prisma.maestros.findMany({
        select: {
          Usuario_id: true,
          Usuarios:{
            select:{
              Nombres: true,
              Apellidos: true,
              Correo: true,
              Contrasena: true
            }
          }
        },      
        
    });
    
    await db.prisma.$disconnect();

    if (!teachers) {
        return res.status(404).json({ message: "Bad Request" });
    }
    
    return res.status(200).json({ teachers });
}

async function updateTeacher( req: NextApiRequest, res: NextApiResponse<Data> ){
  const { teacher } = req.body;

  await db.prisma.$connect();
  
  const updatedTeacher = await db.prisma.usuarios.update({
    where:{
      Usuarios_id: teacher.Usuario_id
    },
    data:{
      ...teacher.Usuarios
    }
  });

  await db.prisma.$disconnect();

  return res.status( 202 );
}

async function newTeacher( req: NextApiRequest, res: NextApiResponse<Data> ){
  const { teacher } = req.body
  await db.prisma.$connect();

  console.log(teacher)
  const newTeacher = await db.prisma.usuarios.create({
    data:{
      ...teacher.Usuarios,
      Maestros:{
        create:{
          Usuario_id: teacher.Usuario_id
        }
    }
    }
  });

  await db.prisma.$disconnect();
}