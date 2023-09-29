import { IAnswer } from "@/interface";
import { db } from "..";

export const getExerciseAnswers = async (exerciseId: string) => {
  console.log(exerciseId);

  await db.prisma.$connect();

  // Obtener respuestas para el ejercicio deseado
  const respuestas :IAnswer[]= await db.prisma.respuestas.findMany({
    select: {
      Alumnos: {
        select: {
          Usuarios: {
            select: {
              Apellidos: true,
              Nombres: true,
            },
          },
        },
      },
      Incisos: {
        select: {
          LoSolicitado: true,
          Respuestas: true,
          EjercicioID: true,
        },
      },
    },
    where: {
      Incisos: {
        EjercicioID: Number(exerciseId),
      },
    },
    orderBy: {
      Alumnos: {
        Usuarios: {
          Apellidos: "asc",
        },
      },
    },
  });

  await db.prisma.$disconnect();
  console.log(respuestas);

  if (!respuestas) {
    return;
  }

  return respuestas;
};
