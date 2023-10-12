import { db } from "@/db";
import { IExerciseDB } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | {
      dataExercise: IExerciseDB[];
    };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      console.log("Paso1")
      return getExercisesByStudent2(req, res);
      
    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

async function getExercisesByStudent2(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { StudentID } = req.query as { StudentID: string };
  console.log(StudentID);
  console.time()
  await db.prisma.$connect();

  try {
    // Obtén el grupo del estudiante
    const alumno = await db.prisma.alumnos.findUnique({
      where: {
        Usuario_id: Number(StudentID),
      },
      select: {
        Grupo_id: true,
      },
    });

    if (alumno) {
      // Obtén los ejercicios relacionados con el grupo del estudiante
      const ejercicios = await db.prisma.ejercicios.findMany({
        where: {
          GrupoID: alumno.Grupo_id,
          Estado_id: 2, // Puedes ajustar esto según tus necesidades.
        },
      });
      const answers = [];
      for (const ejercicio of ejercicios) {
        const respuestas = await db.prisma.respuestas.count({
          where: {
            Incisos: {
              EjercicioID: Number(ejercicio.Ejercicios_id),
            },
            AlumnoID:Number(StudentID)
          },
        });
        
        const incisos = await db.prisma.incisos.count({
          where: {
            EjercicioID: Number(ejercicio.Ejercicios_id),
          },
        });
        answers.push({respuestas,incisos});
      }

      console.log(answers);

      //getExerciseQuestions
      //getExerciseAnswers
    } else {
      console.log("El estudiante no se encontró en la base de datos.");
    }
  } catch (error) {
    console.error("Error al obtener ejercicios y contar respuestas:", error);
  } finally {
    await db.prisma.$disconnect();
  }
  console.timeEnd()
}
