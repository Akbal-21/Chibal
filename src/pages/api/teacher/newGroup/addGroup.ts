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

  try {
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
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

async function updateGroup(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.body);
  const {
    nameGroup,
    teacher,
    id_Level,
    id_Shift: turnoId,
    slug: grupoId,
  } = req.body as {
    nameGroup: string;
    teacher: number;
    id_Level: number;
    id_Shift: number;
    slug: string;
  };
  try {
    await db.prisma.$connect();
    const schoolId = await db.prisma.maestros.findFirst({
      select: {
        Escuela_id: true,
      },
      where: {
        Usuario_id: teacher,
      },
    });

    if (!schoolId) {
      return res.status(400).json({ message: "Bad request" });
    }

    const groupUpdate = await db.prisma.grupos.update({
      where: {
        Grupos_id: Number(grupoId),
      },
      data: {
        NombreGrupo: nameGroup,
        Turno_id: turnoId,
        Grado_id: id_Level,
        Escuela_id: Number(schoolId.Escuela_id),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
  return res.status(200).json({ message: "Example" });
}
