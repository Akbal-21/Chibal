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
        Usuarios_id: number;
        Nombres: string;
        Correo: string;
        Apellidos: string;
        roll: string;
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

  let roll = "";
  try {
    await db.prisma.$connect();

    const user = await db.prisma.usuarios.findUnique({
      where: { Correo: email },
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

    if (!bcrypt.compareSync(password, user.Contrasena)) {
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

    const token = jwt.signToken(Usuarios_id, email, roll);

    console.log({ token, Nombres, Correo, Apellidos, roll });

    return res.status(200).json({
      token, // *JWT
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
