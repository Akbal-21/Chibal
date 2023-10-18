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