import { db } from "@/db";
import { ICreateNewGroup } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | { newGroup: ICreateNewGroup };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return createNewGroup(req, res);

    case "PUT":
      return updateGroup(req, res);

    default:
      return res.status(400).json({ message: "Example" });
  }
}

async function createNewGroup(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.body);

  const { nameGroup, teacher, id_Level, id_Shift } = req.body as {
    nameGroup: string;
    teacher: number;
    id_Level: number;
    id_Shift: number;
  };

  await db.prisma.$connect();
  const idSchool = await db.prisma.maestros.findUnique({
    select: {
      Escuela_id: true,
    },
    where: {
      Usuario_id: teacher,
    },
  });

  if (!idSchool) {
    return res.status(204);
  }
  const newGroup: ICreateNewGroup = await db.prisma.grupos.create({
    data: {
      NombreGrupo: nameGroup,
      Maestro_id: teacher,
      Turno_id: id_Shift,
      Grado_id: id_Level,
      Escuela_id: Number(idSchool.Escuela_id),
    },
  });

  console.log(newGroup);

  await db.prisma.$disconnect();
  return res.status(200).json({ newGroup });
}

function updateGroup(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.body);
  return res.status(200).json({ message: "Example" });
}
