import { db } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "./doExerciseByLine";

export function updateAlumno_Ejercicio(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { id, id_User } = req.body as { id: number; id_User: number };
  try {
    await db.prisma.$connect();
    const idExcercise = ;
  } catch (error) {}
}
