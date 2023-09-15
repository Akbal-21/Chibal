import { db } from "@/db";
import { jwt } from "@/utils";
import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | {
      token: string;
      user: {
        Nombres: string;
        Correo: string;
        Apellidos: string;
      };
    };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return loginUser(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

async function loginUser(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { email = "", password = "" } = req.body;
  await db.prisma.$connect();
  const user = await db.prisma.usuarios.findUnique({
    where: { Correo: email },
  });

  await db.prisma.$disconnect();

  if (!user) {
    return res.status(400).json({ message: "Bad request" });
  }

  if (!bcrypt.compareSync(password, user.Contrasena)) {
    return res.status(400).json({ message: "Bad request" });
  }
  const { Nombres, Correo, Apellidos, Usuarios_id } = user;

  const token = jwt.signToken(Usuarios_id, email);

  return res.status(200).json({
    token, // *JWT
    user: {
      Nombres,
      Correo,
      Apellidos,
    },
  });
}
