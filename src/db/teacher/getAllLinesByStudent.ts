import { db } from "@/db";
import { LineByStudentID } from "@/interface";

export const getAllLinesByStudent = async (
  idExercise: string,
  idStudent: string,
) => {
  await db.prisma.$connect();

  const linseByStudent: LineByStudentID[] = await db.prisma.respuestas.findMany(
    {
      select: {
        Imagen: true,
        Puntaje: true,
        Respuesta: true,
        Inciso_id: true,
        Incisos: {
          select: {
            LoSolicitado: true,
          },
        },
      },
      where: {
        AlumnoID: Number(idStudent),
        Incisos: {
          EjercicioID: Number(idExercise),
        },
      },
    },
  );

  if (!linseByStudent) {
    return;
  }

  return linseByStudent;
};
