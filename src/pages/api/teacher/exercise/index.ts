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

    case "DELETE":
      return deleteExcercise(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

async function deleteExcercise(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { Ejercicios_id } = req.body as { Ejercicios_id: number };
  console.log(req.body);
  try {
    await db.prisma.$connect();
    await db.prisma.ejercicios.delete({
      where: {
        Ejercicios_id,
      },
    });
    await db.prisma.$disconnect();
    return res.status(200).json({ message: "Se elimino de forma correcta" });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return error;
    }
  }
}

async function insertExcercise(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const {
    form,
    addExercise,
    allStudents,
    teacherID,
    FechaPublicacion,
    Estado,
  } = req.body as {
    form: FormData;
    addExercise: DataExerciseStgring[];
    allStudents: ISetStudentsExerciseContext[];
    teacherID: string;
    FechaPublicacion: string | null;
    Estado: number;
  };
  const { NombreEjercicio, FechaLimite, TipoEjercicio_id } = form;

  const dateLim = Date.parse(FechaLimite);
  const dateLimit = new Date(dateLim);

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

    let saveExcercise;

    if (FechaPublicacion === "" || FechaPublicacion === null) {
      saveExcercise = await db.prisma.ejercicios.create({
        data: {
          NombreEjercicio,
          MaestroID: Number(teacherID),
          GrupoID: groupByTeacherId.Grupos_id,
          TipoEjercicio_id,
          FechaLimite: dateLimit,
          Estado_id: Estado,
        },
      });
    } else {
      const datePub = Date.parse(FechaPublicacion);
      const datePublic = new Date(datePub);
      saveExcercise = await db.prisma.ejercicios.create({
        data: {
          NombreEjercicio,
          MaestroID: Number(teacherID),
          GrupoID: groupByTeacherId.Grupos_id,
          TipoEjercicio_id,
          FechaPublicacion: datePublic,
          FechaLimite: dateLimit,
          Estado_id: Estado,
        },
      });
    }

    const linesExercise: LineExercise[] = [];

    const { Ejercicios_id } = saveExcercise;

    console.log(Ejercicios_id);

    // *Incisos del Ejercicio
    for (const key in addExercise) {
      const line = addExercise[key].solit;
      linesExercise.push({ LoSolicitado: line, EjercicioID: Ejercicios_id });
    }

    console.log(linesExercise);

    const as = await db.prisma.incisos.createMany({
      data: linesExercise,
    });

    console.log(as);

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
  const { form, addExercise, allStudents, FechaPublicacion, Estado } =
    req.body as {
      form: FormData;
      addExercise: DataExerciseStgring[];
      allStudents: ISetStudentsExerciseContext[];
      FechaPublicacion: string | null;
      Estado: number;
    };
  const {
    Ejercicios_id,
    NombreEjercicio,
    MaestroID,
    TipoEjercicio_id,
    FechaLimite,
  } = form;

  console.log(req.body);

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

  const dateLim = Date.parse(FechaLimite);
  const dateLimit = new Date(dateLim);

  try {
    await db.prisma.$connect();

    let saveExcercise;

    if (FechaPublicacion === "" || FechaPublicacion === null) {
      saveExcercise = await db.prisma.ejercicios.update({
        where: {
          Ejercicios_id,
          MaestroID,
        },
        data: {
          NombreEjercicio,
          TipoEjercicio_id,
          FechaLimite: dateLimit,
          Estado_id: Estado,
        },
      });
    } else {
      const datePub = Date.parse(FechaPublicacion);
      const datePublic = new Date(datePub);
      console.log(datePublic);

      saveExcercise = await db.prisma.ejercicios.update({
        where: {
          Ejercicios_id,
          MaestroID,
        },
        data: {
          NombreEjercicio,
          TipoEjercicio_id,
          FechaLimite: dateLimit,
          FechaPublicacion: datePublic,
          Estado_id: Estado,
        },
      });
      console.log(saveExcercise);
    }

    await db.prisma.alumnos_Ejercicios.deleteMany({
      where: {
        EjercicioID: Ejercicios_id,
      },
    });

    await db.prisma.alumnos_Ejercicios.createMany({
      data: exerciseStudent,
    });

    await db.prisma.incisos.deleteMany({
      where: {
        EjercicioID: Ejercicios_id,
      },
    });

    const exercisesLinesUpdate = await db.prisma.incisos.createMany({
      data: linesExercise,
    });
    await db.prisma.$disconnect();

    return res.status(200).json({ message: "Se actualizo con exito " });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return error;
    }
  }
}
