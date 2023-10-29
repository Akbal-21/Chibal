import { db } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return exerciseByLineStudent(req, res);

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
}
