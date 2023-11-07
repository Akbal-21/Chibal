import { db } from "@/db";
import { DataExerciseStgring, ISetStudentsExerciseContext } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

interface StudnetExercise {
  AlumnoID: number;
  EjercicioID: number;
}

interface LineExercise {
  LoSolicitado: string;
  EjercicioID: number;
}
interface FormData {
  Ejercicios_id: number;
  NombreEjercicio: string;
  MaestroID: number;
  GrupoID: number;
  TipoEjercicio_id: number;
  FechaPublicacion: string;
  FechaLimite: string;
  Estado_id: number;
  incisos: string;
  Estado: number;
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return insertExcercise(req, res);

    case "PUT":
      return updateExcercise(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

async function insertExcercise(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log(req.body);

  const { form, addExercise, allStudents, teacherID } = req.body as {
    form: FormData;
    addExercise: DataExerciseStgring[];
    allStudents: ISetStudentsExerciseContext[];
    teacherID: string;
  };
  const {
    NombreEjercicio,
    FechaLimite,
    FechaPublicacion,
    TipoEjercicio_id,
    Estado,
  } = form;

  try {
    await db.prisma.$connect();

    const groupByTeacherId = await db.prisma.grupos.findFirst({
      select: {
        Grupos_id: true,
      },
      where: {
        Maestro_id: Number(teacherID),
      },
    });

    if (!groupByTeacherId) {
      return res.status(400).json({
        message: "El maestro no tiene grupo",
      });
    }

    console.log(groupByTeacherId);

    const saveExcercise = await db.prisma.ejercicios.create({
      data: {
        NombreEjercicio,
        MaestroID: Number(teacherID),
        GrupoID: groupByTeacherId.Grupos_id,
        TipoEjercicio_id,
        FechaPublicacion,
        FechaLimite,
        Estado_id: Estado,
      },
    });

    const linesExercise: LineExercise[] = [];

    const { Ejercicios_id } = saveExcercise;

    // *Incisos del Ejercicio
    for (const key in addExercise) {
      const line = addExercise[key].solit;
      linesExercise.push({ LoSolicitado: line, EjercicioID: Ejercicios_id });
    }

    await db.prisma.incisos.createMany({
      data: linesExercise,
    });

    // *Estudiantes asignados al ejercicio
    const exerciseStudent: StudnetExercise[] = [];
    for (const key in allStudents) {
      const student = allStudents[key].Usuarios_id;
      exerciseStudent.push({ AlumnoID: student, EjercicioID: Ejercicios_id });
    }

    await db.prisma.alumnos_Ejercicios.createMany({
      data: exerciseStudent,
    });

    await db.prisma.$disconnect();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);

      return error;
    }
  }
  return res.status(200).json({ message: "Example" });
}

async function updateExcercise(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { form, addExercise, allStudents } = req.body as {
    form: FormData;
    addExercise: DataExerciseStgring[];
    allStudents: ISetStudentsExerciseContext[];
  };
  const {
    Ejercicios_id,
    NombreEjercicio,
    MaestroID,
    GrupoID,
    TipoEjercicio_id,
    FechaPublicacion,
    FechaLimite,
    Estado_id,
  } = form;

  // *Estudiantes asignados al ejercicio
  const exerciseStudent: StudnetExercise[] = [];
  for (const key in allStudents) {
    const student = allStudents[key].Usuarios_id;
    exerciseStudent.push({ AlumnoID: student, EjercicioID: Ejercicios_id });
  }

  // *Incisos del Ejercicio
  const linesExercise: LineExercise[] = [];

  for (const key in addExercise) {
    const line = addExercise[key].solit;
    linesExercise.push({ LoSolicitado: line, EjercicioID: Ejercicios_id });
  }
  console.log({ exerciseStudent, linesExercise });
  try {
    await db.prisma.$connect();

    const exercise = await db.prisma.ejercicios.update({
      where: {
        Ejercicios_id,
        MaestroID,
      },
      data: {
        NombreEjercicio,
        TipoEjercicio_id,
        FechaPublicacion,
        FechaLimite,
        Estado_id,
      },
    });

    const exercisesStudentDelete =
      await db.prisma.alumnos_Ejercicios.deleteMany({
        where: {
          EjercicioID: Ejercicios_id,
        },
      });

    const exercisesStudentUpdate =
      await db.prisma.alumnos_Ejercicios.createMany({
        data: exerciseStudent,
      });

    const exercisesLinesDelete = await db.prisma.incisos.deleteMany({
      where: {
        EjercicioID: Ejercicios_id,
      },
    });

    const exercisesLinesUpdate = await db.prisma.incisos.createMany({
      data: linesExercise,
    });
    await db.prisma.$disconnect();

    console.log(exercise);

    return res.status(200).json({ message: "Example" });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
