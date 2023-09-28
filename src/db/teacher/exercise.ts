import { ILine, ITypeExercise, ITypePublisher } from "@/interface";
import { prisma } from "../db";

export const getTypeofExercise = async () => {
  await prisma.$connect();
  const exercise: ITypeExercise[] = await prisma.tipoEjercicio.findMany();
  await prisma.$disconnect();
  if (!exercise) {
    return;
  }
  return exercise;
};

export const getTypePublisher = async () => {
  await prisma.$connect();
  const typePublisher: ITypePublisher[] = await prisma.estado.findMany();
  await prisma.$disconnect();
  if (!typePublisher) {
    return;
  }
  return typePublisher;
};

export const getDataOfExercise = async (Ejercicios_id: string) => {
  await prisma.$connect();
  const exerciseData = await prisma.ejercicios.findUnique({
    where: {
      Ejercicios_id: Number(Ejercicios_id),
    },
  });

  await prisma.$disconnect();

  console.log(exerciseData);

  return exerciseData;
};

export const getLine = async (Ejercicios_id: string) => {
  await prisma.$connect();

  const line: ILine[] = await prisma.incisos.findMany({
    where: {
      EjercicioID: Number(Ejercicios_id),
    },
  });

  return line;
};
