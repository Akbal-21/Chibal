import { IDataGroup } from "@/interface";
import { db } from "..";

export const getDataGroup = async (idUser: string) => {
  // let informacionGrupos;

  await db.prisma.$connect();

  const dataGroup: IDataGroup[] = await db.prisma.grupos.findMany({
    select: {
      Alumnos: {
        select: {
          Usuarios: {
            select: {
              Usuarios_id: true,
              Nombres: true,
              Apellidos: true,
              Correo: true,
            },
          },
        },
      },
      NombreGrupo: true,
      Grado_id: true,
      Grado: {
        select: {
          Nivel: true,
        },
      },
    },
    where: {
      Grupos_id: Number(idUser),
    },
  });

  await db.prisma.$disconnect();

  if (!dataGroup) {
    return;
  }

  return dataGroup;
};
