import { IAnswer, IExercise, ILine } from "@/interface";
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
              Usuarios_id: true,
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

export const getNumLines = async (exerciseId: string) => {
  console.log(exerciseId);

  await db.prisma.$connect();

  // Obtener respuestas para el ejercicio deseado
  const lines :ILine[]= await db.prisma.incisos.findMany({
    select: {
          Incisos_id: true,
          LoSolicitado: true,
          EjercicioID: true,
    },
    where: {
        EjercicioID: Number(exerciseId),
    },
  });

  await db.prisma.$disconnect();
  

  if (!lines) {
    return;
  }

  return lines.length;
};
