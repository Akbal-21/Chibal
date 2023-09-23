import { db } from "@/db";
import { ISchool } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | {
      arraySchool: ISchool[];
    };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getAllDataSchool(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

async function getAllDataSchool(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { Usuarios_id } = req.query;
  console.log(Usuarios_id);
  let informacionGrupos;
  try {
    await db.prisma.$connect();
    informacionGrupos = await db.prisma.administrador.findUnique({
      where: {
        Usuario_id: Number(Usuarios_id),
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
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  if (!informacionGrupos) {
    return res.status(400).json({ message: "Bad request" });
  }

  const arraySchool = [informacionGrupos];

  return res.status(200).json({ arraySchool });
}
