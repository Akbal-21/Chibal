import { db } from "@/db";
import { IExerciseStudentDB } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | {
      dataExercise: IExerciseStudentDB[];
    };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getExercisesByStudent(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

async function getExercisesByStudent(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { StudentID } = req.query as { StudentID: string };
  console.log(StudentID);
  //return res.status(200).json({message: "Hola"})
  try {
    await db.prisma.$connect();
    //Primero obtener el grupo del niño y despues lso ejercicios segun el grupo

    const dataExercise: IExerciseStudentDB[] =
      await db.prisma.alumnos_Ejercicios.findMany({
        where: {
          AlumnoID: Number(StudentID),
          Ejercicios: {
            Estado_id: {
              not: 1,
            },
          },
        },
        select: {
          AlumnoID: true,
          Estado: true,
          Ejercicios: true,
        },
      });

    console.log(dataExercise);

    await db.prisma.$disconnect();
    console.log(dataExercise);

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
