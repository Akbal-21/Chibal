import jwt from "jsonwebtoken";

export const signToken = (Usuarios_id: number, email: string, roll: string) => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error("No hay semilla de JWT - Revisar variables de entorno");
  }

  return jwt.sign(
    // *payload
    { Usuarios_id, email, roll },

    // *Seed
    process.env.JWT_SECRET_SEED,

    // *Opciones
    { expiresIn: "15d" },
  );
};

export const isValidToken = (token: string): Promise<string> => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error("No hay semilla de JWT - Revisar variables de entorno");
  }

  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, process.env.JWT_SECRET_SEED || "", (err, payload) => {
        if (err) return reject("JWT no es válido");

        const { Usuarios_id } = payload as { Usuarios_id: string };

        resolve(Usuarios_id);
      });
    } catch (error) {
      reject("JWT no es válido");
    }
  });
};
