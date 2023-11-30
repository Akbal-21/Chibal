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

  await db.prisma.$connect()

  const user = await db.prisma.maestros.delete({
    where: {
      Usuario_id: Number(Usuario_id)
    },
  });

  const user1 = await db.prisma.usuarios.delete({
    where: {
      Usuarios_id: Number(Usuario_id)
    },
  });

  await db.prisma.$disconnect()

  return res.status(200).json({ message: "Maestro eliminado" });
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
  const { profe } = req.body;

  try {
    await db.prisma.$connect();
  
    const updatedTeacher = await db.prisma.usuarios.update({
      where:{
        Usuarios_id: profe.Usuario_id
      },
      data:{
        ...profe.Usuarios
      }
    });

    await db.prisma.$disconnect();

    return res.status( 200 ).json( { message: "Usuario actualizado" } );
  } catch (error) {
    if( error instanceof Error ){
      console.log(error);
      return;
    }
  }
  
}

async function newTeacher( req: NextApiRequest, res: NextApiResponse<Data> ){
  const { profe, id } = req.body;

  try {
    await db.prisma.$connect();
  
    const escuela_id = await db.prisma.escuela.findUnique({
      select: {
        Escuela_id: true
      },
      where:{
        Administrador_id: Number( id )
      }
    });

    console.log(escuela_id?.Escuela_id)

    const newTeacher = await db.prisma.usuarios.create({
      data:{
        ...profe.Usuarios,
        Maestros:{
          create:{
            Usuario_id: profe.Usuario_id,
            Escuela_id: escuela_id?.Escuela_id
          }
        },

      }
    });
    
    await db.prisma.$disconnect();
    return res.status( 200 ).json( { message: "Usuario creado" } );
  } catch (error) {
    if( error instanceof Error ){
      console.log(error);
      return;
    }
  }
}