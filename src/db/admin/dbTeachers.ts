import { ITeacher } from "@/interface";
import { db } from "..";

export const getAllTeachers = async (idUser: string) => {
  // let informacionGrupos;

  await db.prisma.$connect();
  const dataTeachers: ITeacher[] = await db.prisma.maestros.findMany({
    select: {
      Usuario_id: true,
      Usuarios: {
        select: {
          Nombres: true,
          Apellidos: true,
        },
      },
    },
    where: {
      Escuela: {
        Administrador: {
          some: {
            Usuario_id: Number(idUser),
          },
        },
      },
    },
  });

  await db.prisma.$disconnect();

  if (!dataTeachers) {
    return;
  }

  return dataTeachers;
};
