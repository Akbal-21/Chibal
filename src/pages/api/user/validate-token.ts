import { db } from "@/db";
import { jwt } from "@/utils";
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
    case "GET":
      return checkJWT(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

async function checkJWT(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { token = "" } = req.cookies;

  let Usuario_id = "";

  try {
    Usuario_id = await jwt.isValidToken(token);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "token de autorizacion no es valido" });
  }

  await db.prisma.$connect();
  const user = await db.prisma.usuarios.findUnique({
    where: { Usuarios_id: Number(Usuario_id) },
  });

  await db.prisma.$disconnect();

  if (!user) {
    return res.status(400).json({ message: "no existe el usuario" });
  }

  const { Nombres, Correo, Apellidos, Usuarios_id } = user;

  return res.status(200).json({
    token: jwt.signToken(Usuarios_id, Correo), // *JWT
    user: {
      Nombres,
      Correo,
      Apellidos,
    },
  });
}
