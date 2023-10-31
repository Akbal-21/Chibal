import { db } from "@/db";
import { IExerciseTeacherDB } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | {
      dataExercise: IExerciseTeacherDB[];
    };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getAllExercisesbyUser(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

async function getAllExercisesbyUser(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log(req.query);
  const { MaestroID } = req.query;

  try {
    await db.prisma.$connect();

    const dataExercise: IExerciseTeacherDB[] =
      await db.prisma.ejercicios.findMany({
        where: {
          MaestroID: Number(MaestroID),
        },
      });

    await db.prisma.$disconnect();

    if (!dataExercise) {
      return res.status(404).json({ message: "Bad Request" });
    }

    return res.status(200).json({ dataExercise });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
