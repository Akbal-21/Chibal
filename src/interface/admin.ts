export interface IAdmin{
    Escuela: {
        Escuela_id: number
        Nombre: string;
    } | null;
    Usuarios: {
        Nombres: string;
        Apellidos: string;
        Correo: string;
    };
    Usuario_id?: number;
}


export interface IAdminInsert{
    Usuarios_id?: number;
    Nombres: string;
    Apellidos: string;
    Correo: string;
    Contrasena: string;
}