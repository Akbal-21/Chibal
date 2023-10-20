import { ISchoolName } from "@/interface";
import { db } from "..";

export const getAdminData = async ( Admin_id: string ) => {
    await db.prisma.$connect();

    const adminData = await db.prisma.administrador.findUnique({
        where:{
            Usuario_id: Number(Admin_id)
        }
    });
    await db.prisma.$disconnect();
    return adminData;
}

export const getSchools = async () => {
    await db.prisma.$connect();

    const schoolsData: ISchoolName[] = await db.prisma.escuela.findMany({
        select:{
            Escuela_id: true,
            Nombre: true
        }
    });

    await db.prisma.$disconnect();
    console.log( schoolsData )

    return schoolsData;
}