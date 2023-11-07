import {
  IGetAllStudentsByTeacherID,
  IGetStudentAsigmentExercise,
  ILine,
  ITypeExercise,
  ITypePublisher,
} from "@/interface";
import { db } from "..";

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
    orderBy: {
      Incisos_id: "asc",
    },
  });

  console.log(line);

  return line;
};

export const getAllStudentsByTeacherId = async (parts: string[]) => {
  try {
    let asigmentStudentExcercise: IGetStudentAsigmentExercise[] = [];
    await db.prisma.$connect();
    const studentsGroup: IGetAllStudentsByTeacherID[] =
      await db.prisma.alumnos.findMany({
        select: {
          Usuarios: {
            select: {
              Usuarios_id: true,
              Nombres: true,
              Apellidos: true,
            },
          },
        },
        where: {
          Grupos: {
            Maestro_id: Number(parts[1]),
          },
        },
        orderBy: {
          Usuarios: {
            Apellidos: "asc",
          },
        },
      });
    if (parts[0] !== "new") {
      asigmentStudentExcercise = await db.prisma.alumnos_Ejercicios.findMany({
        select: {
          Alumnos: {
            select: {
              Usuarios: {
                select: {
                  Usuarios_id: true,
                  Nombres: true,
                  Apellidos: true,
                },
              },
            },
          },
        },
        where: {
          EjercicioID: Number(parts[0]),
        },
      });
    }
    if (!studentsGroup || !asigmentStudentExcercise) {
      return;
    }
    return { studentsGroup, asigmentStudentExcercise };
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
};
