import { db } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
      status: number;
    }
  | { message: string };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return exerciseByLineStudent(req, res);

    case "PUT":
      return updateAlumno_Ejercicio(req, res);

    default:
      return res.status(200).json({ message: "Example", status: 200 });
  }
}

async function updateAlumno_Ejercicio(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log(req.body);

  const { id, userID } = req.body as { id: number; userID: number };
  try {
    await db.prisma.$connect();
    const idExcercise: {
      EjercicioID: number | null;
    } | null = await db.prisma.incisos.findFirst({
      select: {
        EjercicioID: true,
      },
      where: {
        Incisos_id: id,
      },
    });
    if (!idExcercise) {
      return res.status(400).json({ message: "Error en la red" });
    }
    await db.prisma.alumnos_Ejercicios.update({
      where: {
        AlumnoID_EjercicioID: {
          AlumnoID: userID,
          EjercicioID: Number(idExcercise.EjercicioID),
        },
      },
      data: {
        Estado: 1,
      },
    });
    return res.status(200).json({ message: "Se actualizo correctamente todo" });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return;
    }
  }
}

async function exerciseByLineStudent(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log(req.body);

  const { palabra, id, id_User } = req.body as {
    palabra: string;
    id: number;
    id_User: number;
  };
  try {
    await db.prisma.$connect();

    const insertInLine = await db.prisma.respuestas.create({
      data: {
        Puntaje: 100,
        AlumnoID: id_User,
        Inciso_id: id,
        Imagen: "NULL",
        Respuesta: palabra,
      },
    });

    if (!insertInLine) {
      return res.status(500).json({ message: "Error en la red", status: 500 });
    }

    if (insertInLine) {
      // La inserción fue exitosa
      return res
        .status(202)
        .json({ message: "Inserción exitosa", status: 202 });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
