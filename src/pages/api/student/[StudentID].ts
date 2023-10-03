import { db } from "@/db";
import { IExerciseDB } from "@/interface";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | {
      message: string;
    }
  | {
      dataExercise: IExerciseDB[];
    };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case "GET":
            return getExercisesByStudent(req, res) 

    
        default:
            return res.status(400).json({ message: 'Bad request' })
            
    }
}

async function getExercisesByStudent(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { StudentID } = req.query;
    await db.prisma.$connect();
    // Primero obtener el grupo del niño y despues lso ejercicios segun el grupo
    const grupoId = await db.prisma.alumnos.findUnique({
      where: {
        Usuario_id: Number(StudentID),
      },
      select: {
        Grupo_id: true,
      },
    });
    console.log(grupoId);
    
    const dataExercise: IExerciseDB[] = await db.prisma.ejercicios.findMany({
      where: {
        GrupoID: grupoId?.Grupo_id,
      },
    });
    
    await db.prisma.$disconnect();
    console.log(dataExercise);

    if (!dataExercise) {
        return res.status(404).json({ message: "Bad Request" });
    }
    
    return res.status(200).json({ dataExercise });
}
