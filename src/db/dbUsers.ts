import { db } from "@/db";
import bcrypt from "bcryptjs";

export const checkUserEmailPassword = async (
  email: string,
  password: string,
) => {
  let roll = "";

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
    return null;
  }
  console.log(user);

  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  if (!bcrypt.compareSync(password, user.Contrasena!)) {
    return null;
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

  return {
    Usuarios_id,
    Nombres,
    Apellidos,
    Correo: Correo.toLowerCase(),
    roll,
  };
};
