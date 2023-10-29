import { db } from "@/db";
import { IUserPost } from "@/interface";
import { isValidEmail } from "@/utils";
import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | { student: IUserPost };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return addNewStudent(req, res);
    case "DELETE":
      return deleteGroup(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

async function addNewStudent(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { email, lastsNames, names, password, slug } = req.body as {
    email: string;
    lastsNames: string;
    names: string;
    password: string;
    slug: string;
  };
  console.log(req.body);

  if (password.length < 6) {
    return res.status(400).json({
      message: "La contraseña debe de ser de 6 caracteres",
    });
  }

  if (names.length < 2) {
    return res.status(400).json({
      message: "El nombre debe de ser de 2 caracteres",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      message: "El correo no tiene formato de correo",
    });
  }

  await db.prisma.$connect();
  console.log("Estado1");

  const student: IUserPost = await db.prisma.usuarios.create({
    data: {
      Apellidos: lastsNames,
      Correo: email,
      Nombres: names,
      Contrasena: bcrypt.hashSync(password),
      Alumnos: {
        create: {
          Grupo_id: Number(slug),
        },
      },
    },
  });
  await db.prisma.$disconnect();

  if (!student) {
    return res.status(400).json({ message: "Error server" });
  }
  console.log(student);

  return res.status(200).json({ student });
}
async function deleteGroup(req: NextApiRequest, res: NextApiResponse<Data>) {
  const id_Group = req.body;

  await db.prisma.$connect();

  const result = await db.prisma.grupos.delete({
    where: {
      Grupos_id: id_Group,
    },
  });
  console.log({ result });

  if (!result) {
    return res.status(400).json({ message: "Bad Requerst" });
  }

  await db.prisma.$disconnect();

  return res.status(200).json({ message: "Hola" });
}
