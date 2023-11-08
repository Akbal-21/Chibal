export interface IAdmin{
    Administrador: {
        Usuarios: {
            Nombres: string;
            Apellidos: string;
            Usuarios_id: number;
        };
    } | null;
    Escuela_id: number;
    Nombre: string;
  }

export interface IAdminInsert{
    Usuarios_id?: number;
    Nombres: string;
    Apellidos: string;
    Correo: string;
    Contrasena: string;
}

export interface IAdminList{
    Usuarios: {
        Nombres: string;
        Apellidos: string;
    };
    Usuario_id: number;
}

export interface IAdminFull{
    Escuela?: {
        Escuela_id: number;
        Nombre: string;
    };
    Usuarios: {
        Nombres: string;
        Apellidos: string;
        Correo: string;
        Contrasena: string;
    };
    Usuario_id: number;
}