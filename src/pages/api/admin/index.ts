import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "DELETE":
      return deleteTeacher(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

async function deleteTeacher(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { Usuario_id } = req.body as { Usuario_id: number };
  console.log(Usuario_id);

  // await db.prisma.$connect()

  // const user = await db.prisma.

  // await db.prisma.$disconnect()

  return res.status(200).json({ message: "Hola" });
}
