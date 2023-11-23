import { db } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return exerciseByLineStudent(req, res);

    case "PUT":
      return updateAlumno_Ejercicio(req, res);

    default:
      return res.status(200).json({ message: "Example" });
  }
}

async function exerciseByLineStudent(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { url, prob, id, id_User } = req.body as {
    url: string;
    prob: {
      maxProb: number;
      newPredict3: string;
    };
    id: number;
    id_User: number;
  };

  const { maxProb, newPredict3 } = prob;
  console.log({ url, maxProb, newPredict3, id, id_User });
  try {
    await db.prisma.$connect();

    const insertInLine = await db.prisma.respuestas.create({
      data: {
        Puntaje: maxProb * 100,
        AlumnoID: id_User,
        Inciso_id: id,
        Imagen: url,
        Respuesta: newPredict3,
      },
    });

    if (!insertInLine) {
      return res.status(0).json({ message: "Error en la red" });
    }
    await db.prisma.$disconnect();
    // console.log(InsertLine);

    return res.status(202);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
async function updateAlumno_Ejercicio(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { id, id_User } = req.body as { id: number; id_User: number };
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
      return res.status(0).json({ message: "Error en la red" });
    }
    await db.prisma.alumnos_Ejercicios.update({
      where: {
        AlumnoID_EjercicioID: {
          AlumnoID: id_User,
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
