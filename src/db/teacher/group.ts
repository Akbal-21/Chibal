import { IGroup } from "@/interface";
import { db } from "..";

export const getDataGroup = async (idUser: string) => {
  // let informacionGrupos;

  await db.prisma.$connect();
  const dataStudent: IGroup[] = await db.prisma.grupos.findMany({
    select: {
      Grupos_id: true,
      NombreGrupo: true,
    },
    where: {
      Maestro_id: Number(idUser),
    },
  });

  await db.prisma.$disconnect();

  if (!dataStudent) {
    return;
  }

  return dataStudent;
};
