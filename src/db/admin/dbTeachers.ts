import { db } from "..";

export const getAllTeachers = async (idUser: string) => {
  // let informacionGrupos;

  await db.prisma.$connect();
  const informacionGrupos = await db.prisma.administrador.findUnique({
    where: {
      Usuario_id: Number(idUser),
    },
    select: {
      Escuela: {
        select: {
          Nombre: true,
          Grupos: {
            select: {
              Grupos_id: true,
              NombreGrupo: true,
              Maestros: {
                select: {
                  Usuario_id: true,
                  Usuarios: {
                    select: {
                      Nombres: true,
                      Apellidos: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  await db.prisma.$disconnect();

  if (!informacionGrupos) {
    return;
  }

  return informacionGrupos;
};
