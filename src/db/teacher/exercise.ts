import { ILine, ITypeExercise, ITypePublisher } from "@/interface";
import { db } from ".."

export const getTypeofExercise = async () => {
  await db.prisma.$connect();
  const exercise: ITypeExercise[] = await db.prisma.tipoEjercicio.findMany();
  await db.prisma.$disconnect();
  if (!exercise) {
    return;
  }
  return exercise;
};

export const getTypePublisher = async () => {
  await db.prisma.$connect();
  const typePublisher: ITypePublisher[] = await db.prisma.estado.findMany();
  await db.prisma.$disconnect();
  if (!typePublisher) {
    return;
  }
  return typePublisher;
};

export const getDataOfExercise = async (Ejercicios_id: string) => {
  await db.prisma.$connect();
  const exerciseData = await db.prisma.ejercicios.findUnique({
    where: {
      Ejercicios_id: Number(Ejercicios_id),
    },
  });

  await db.prisma.$disconnect();

  console.log(exerciseData);

  return exerciseData;
};

export const getLine = async (Ejercicios_id: string) => {
  await db.prisma.$connect();

  const line: ILine[] = await db.prisma.incisos.findMany({
    where: {
      EjercicioID: Number(Ejercicios_id),
    },
  });

  return line;
};
