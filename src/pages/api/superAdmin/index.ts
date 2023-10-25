import { db } from "@/db";
import { IAdmin } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | { admins: IAdmin[] };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getAllAdmins(req, res);
    case "DELETE":
      return deleteAdmin(req, res);
    case "PUT":
      return updateAdmin(req, res);
    case "POST":
      return newAdmin(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

async function getAllAdmins(req: NextApiRequest, res: NextApiResponse) {
  await db.prisma.$connect();

  const admins = await db.prisma.escuela.findMany({
    select: {
      Escuela_id: true,
      Nombre: true,
      Administrador: {
        select: {
          Usuarios: {
            select: {
              Nombres: true,
              Apellidos: true,
              Usuarios_id: true,
            },
          },
        },
      },
    },
  });

  await db.prisma.$disconnect();

  console.log(admins);

  if (!admins) {
    return res.status(404).json({ message: "Bad Request" });
  }

  return res.status(200).json({ admins });
}
async function deleteAdmin(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { Usuario_id } = req.body;
  console.log(Usuario_id);

  await db.prisma.$connect();

  const deleteAd = await db.prisma.administrador.delete({
    where: {
      Usuario_id: Number(Usuario_id),
    },
  });

  console.log(deleteAd);

  await db.prisma.$disconnect();

  return res.status(202);
}

async function updateAdmin(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { administrator } = req.body;
  //console.log("Desde api:")
  //console.log(administrator)
  await db.prisma.$connect();

  const updatedAdmin = await db.prisma.usuarios.update({
    where: {
      Usuarios_id: administrator.Usuarios_id,
    },
    data: administrator,
  });

  await db.prisma.$disconnect();
  //console.log(updatedAdmin)
  return res.status(202);
}

async function newAdmin(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { administrator } = req.body;

  await db.prisma.$connect();

  const updatedAdmin = await db.prisma.usuarios.create({
    data: {
      ...administrator,
      Administrador: {
        create: {
          Usuarios_id: administrator.Usuario_id,
        },
      },
    },
  });

  await db.prisma.$disconnect();
  //console.log(updatedAdmin)
  return res.status(202);
}
