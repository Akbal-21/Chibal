import { db } from "@/db";
import { UpdateShift } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | {
      updateShift: UpdateShift;
    };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "PUT":
      return updateShifting(req, res);

    default:
      return res.status(400).json({ message: "BadRequest" });
  }
}

async function updateShifting(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const { shift, Inciso_id, id_Student } = req.body as {
    shift: number;
    id_Student: string;
    Inciso_id: number;
  };
  // const studentID =()
  try {
    await db.prisma.$connect();
    const updateShift: UpdateShift = await db.prisma.respuestas.update({
      where: {
        AlumnoID_Inciso_id: { AlumnoID: Number(id_Student), Inciso_id },
      },
      data: {
        Puntaje: shift,
      },
    });
    console.log(updateShift);

    await db.prisma.$disconnect();
    if (!updateShift) {
      return res.status(400).json({ message: "Hay un problema" });
    }
    return res.status(200).json({ updateShift });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
