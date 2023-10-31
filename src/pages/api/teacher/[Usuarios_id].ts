import { db } from "@/db";
import { IGroup } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | {
      dataStudent: IGroup[] | [];
    };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getAllGroups(req, res);

    default:
      break;
  }
  res.status(200).json({ message: "Example" });
}

async function getAllGroups(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { Usuarios_id } = req.query;
  try {
    await db.prisma.$connect();
    const dataStudent: IGroup[] = await db.prisma.grupos.findMany({
      select: {
        Grupos_id: true,
        NombreGrupo: true,
      },
      where: {
        Maestro_id: Number(Usuarios_id),
      },
    });

    await db.prisma.$disconnect();

    if (!dataStudent) {
      return res.status(400).json({ message: "Bad Request" });
    }

    // return dataStudent;

    return res.status(200).json({ dataStudent });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
