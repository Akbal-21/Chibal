import { ITeacher } from "@/interface";
import { db } from "..";

export const getAllTeachers = async (idUser: string) => {
  // let informacionGrupos;
  await db.prisma.$connect();

  const dataTeacher: ITeacher | null = await db.prisma.maestros.findUnique({
    select:{
      Usuario_id: true,
      Usuarios:{
        select:{
          Nombres: true,
          Apellidos: true,
          Correo: true,
          Contrasena: true
        }
      },
      Escuela_id: true
    },
    where:{
      Usuario_id: Number( idUser )
    }
  });

  await db.prisma.$disconnect();

  if (!dataTeacher) {
    return;
  }

  return dataTeacher;
};
