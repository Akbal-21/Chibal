import { IAdminInsert, ISchoolName } from "@/interface";
import { db } from "..";

export const getAdminData = async ( Admin_id: string ) => {
    await db.prisma.$connect();

    const adminData = await db.prisma.usuarios.findUnique({
        where:{
            Usuarios_id: Number(Admin_id)
        }
    });
    await db.prisma.$disconnect();
    return adminData;
}

export const getSchools = async () => {
    await db.prisma.$connect();

    const schoolsData = await db.prisma.escuela.findMany({
        select:{
            Escuela_id: true,
            Nombre: true
        }
    });

    await db.prisma.$disconnect();
    //console.log( schoolsData )

    return schoolsData;
}

export const saveAdmin = async ( adminData: IAdminInsert ) => {
    await db.prisma.$connect();

    const newAdmin = await db.prisma.usuarios.create({
        data:{
            Nombres: adminData.Nombres,
            Apellidos: adminData.Apellidos,
            Correo: adminData.Correo,
            Contrasena: adminData.Contrasena,
        }
    });

    await db.prisma.$disconnect();
}

export const getAdminSchool = async ( id: number ) => {
    await db.prisma.$connect()

    const school:ISchoolName[] = await db.prisma.escuela.findMany({
        where:{
            Administrador_id: Number(id)
        }
    });

    await db.prisma.$disconnect()
    //console.log(school)
    return school[0]
}