import { db } from "..";

export const getSchoolData = async ( school_id: string ) => {
    await db.prisma.$connect();

    const adminData = await db.prisma.escuela.findUnique({
        select:{
            Escuela_id: true,
            Nombre: true
        },
        where:{
            Escuela_id: Number(school_id)
        }
    });
    await db.prisma.$disconnect();
    return adminData;
}