export interface IUser {
  Usuarios_id: number;
  Nombres: string;
  Apellidos: string;
  Correo: string;
  Contrasena?: string;
  roll: string;
}

export interface IUserStore {
  Usuarios_id?: number;
  Nombres: string;
  Apellidos: string;
  Correo: string;
  Contrasena?: string;
}

export interface IUserPost {
  Usuarios_id: number;
  Nombres: string;
  Apellidos: string;
  Correo: string;
  Contrasena: string;
}
