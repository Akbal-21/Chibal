import { IDataGroup } from "@/interface";
import { db } from "..";

export const getDataGroup = async (idUser: string) => {
  // let informacionGrupos;

  await db.prisma.$connect();
  const dataGroup: IDataGroup[] = await db.prisma.alumnos.findMany({
    select: {
      Usuarios: {
        select: {
          Nombres: true,
          Apellidos: true,
        },
      },
      Grupos: {
        select: {
          Escuela: {
            select: {
              Nombre: true,
            },
          },
          NombreGrupo: true,
          Turno: {
            select: {
              Horario: true,
            },
          },
          Grado: {
            select: {
              Nivel: true,
            },
          },
        },
      },
    },
  });

  await db.prisma.$disconnect();

  if (!dataGroup) {
    return;
  }

  return dataGroup;
};
