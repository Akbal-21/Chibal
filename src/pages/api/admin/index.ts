import { ISchool } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | {
      teachers: ISchool;
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
  const a = req.query;
  console.log(a);

  // await db.prisma.$connect();
  // const teachers = await db.prisma.administrador.findUnique({
  //   where: {
  //     Usuario_id: Usuarios_id,
  //   },
  //   select: {
  //     Escuela: {
  //       select: {
  //         Nombre: true,
  //         Grupos: {
  //           select: {
  //             Grupos_id: true,
  //             NombreGrupo: true,
  //             Maestros: {
  //               select: {
  //                 Usuario_id: true,
  //                 Usuarios: {
  //                   select: {
  //                     Nombres: true,
  //                     Apellidos: true,
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // });

  // await db.prisma.$disconnect();

  // if (!teachers) {
  //   return res.status(400).json({ message: "Bad Request" });
  // }

  return res.status(200).json({ message: "Hola" });
}
