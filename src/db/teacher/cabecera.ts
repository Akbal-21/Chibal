import { IPDFCabecera } from "@/interface";
import { db } from "..";
 
export const getExerciseInfo = async (idEjercicio: string) => {
  console.log(idEjercicio);

  await db.prisma.$connect();

  const resultado: IPDFCabecera[] = await db.prisma.ejercicios.findMany({
    where: { Ejercicios_id: Number(idEjercicio) },
    select: {
      NombreEjercicio: true,
      Grupos: {
        select: {
          NombreGrupo: true,
          Turno: {
            select: {
              Horario: true,
            },
          },
          Grado: {
            select: {
              Nivel: true,
            },
          },
        },
      },
    },
  });

  await db.prisma.$disconnect();
  console.log(resultado);

  if (!resultado) {
    return;
  }

  return resultado;
};
