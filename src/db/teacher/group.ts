import { IDataGroup } from "@/interface";
import { db } from "..";

export const getDataGroup = async (idGroup: string) => {
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
      Turno: true,
      NombreGrupo: true,
      Grado_id: true,
      Grado: {
        select: {
          Nivel: true,
        },
      },
    },
    where: {
      Grupos_id: Number(idGroup),
    },
  });

  await db.prisma.$disconnect();

  if (!dataGroup) {
    return;
  }

  return dataGroup;
};
