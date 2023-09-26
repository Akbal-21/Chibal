import { ITypeExercise } from "@/interface";
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
