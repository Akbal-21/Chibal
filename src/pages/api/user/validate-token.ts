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
        Usuarios_id: number;
        Nombres: string;
        Correo: string;
        Apellidos: string;
        roll: string;
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

  let roll = "";
  try {
    await db.prisma.$connect();

    const user = await db.prisma.usuarios.findUnique({
      where: { Usuarios_id: Number(Usuario_id) },
      select: {
        Usuarios_id: true,
        Nombres: true,
        Correo: true,
        Apellidos: true,
        Contrasena: true,
        Maestros: true,
        Alumnos: true,
        Administrador: true,
        SuperAdmin: true,
      },
    });

    await db.prisma.$disconnect();
    if (!user) {
      return res.status(400).json({ message: "Bad request" });
    }

    if (user.Maestros) {
      roll = "Maestro";
    }
    if (user.Alumnos) {
      roll = "Alumno";
    }
    if (user.Administrador) {
      roll = "Administrador";
    }
    if (user.SuperAdmin) {
      roll = "SuperAdmin";
    }
    const { Nombres, Correo, Apellidos, Usuarios_id } = user;

    return res.status(200).json({
      token: jwt.signToken(Usuarios_id, Correo, roll), // *JWT
      user: {
        Usuarios_id,
        Nombres,
        Correo,
        Apellidos,
        roll,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
