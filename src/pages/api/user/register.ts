// import { db } from "@/db";
// import { IUser } from "@/interface";
// import { isValidEmail, jwt } from "@/utils";
// import bcrypt from "bcryptjs";
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data =
//   | {
//       message: string;
//     }
//   | {
//       token: string;
//       user: {
//         name: string;
//         last_name: string;
//         email: string;
//       };
//     };

// export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
//   switch (req.method) {
//     case "POST":
//       return registerUser(req, res);

//     default:
//       return res.status(400).json({ message: "Bad request" });
//   }
// }

// async function registerUser(req: NextApiRequest, res: NextApiResponse<Data>) {
//   const {
//     name = "",
//     last_name = "",
//     email = "",
//     password = "",
//   } = req.body as {
//     name: string;
//     last_name: string;
//     email: string;
//     password: string;
//   };

//   // return res.status(200).json({ message: "Hola" });

//   if (password.length < 6) {
//     return res
//       .status(400)
//       .json({ message: "La contreseña debe de ser de 6 caracteres" });
//   }

//   if (name.length < 3) {
//     return res
//       .status(400)
//       .json({ message: "El nombre debe de ser de 2 caracteres" });
//   }

//   if (!isValidEmail(email)) {
//     return res.status(400).json({ message: "El ocrreo debe de ser valido" });
//   }

//   if (last_name.length <= 6) {
//     return res
//       .status(400)
//       .json({ message: "El apellido debe de ser de 6 caracteres" });
//   }

//   await db.prisma.$connect();

//   const user = await db.prisma.usuarios.findUnique({
//     where: { Correo: email },
//   });

//   if (user) {
//     return res.status(400).json({
//       message: "No puede usar ese correo",
//     });
//   }
//   let newUser: IUser;

//   try {
//     newUser = await db.prisma.usuarios.create({
//       data: {
//         Nombres: name,
//         Apellidos: last_name,
//         Contrasena: bcrypt.hashSync(password),
//         Correo: email,
//       },
//     });
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ message: `revisar los logs del servidor ${error}` });
//   }

//   await db.prisma.$disconnect();

//   const { Usuarios_id } = newUser;
//   const token = jwt.signToken(Usuarios_id, email);

//   return res.status(200).json({
//     token, // *JWT
//     user: {
//       name,
//       email,
//       last_name,
//     },
//   });
// }
