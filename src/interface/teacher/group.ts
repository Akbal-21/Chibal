export interface IGroup {
  Grupos_id: number;
  NombreGrupo: string;
}

export interface IDataGroup {
  Alumnos: {
    Usuarios: {
      Usuarios_id: number;
      Nombres: string;
      Apellidos: string;
      Correo: string;
    };
  }[];
  Grado: {
    Nivel: string;
  } | null;
  NombreGrupo: string;
  Grado_id: number | null;
}

export interface IStudentDataGroup {
  Nombres: string;
  Apellidos: string;
  Correo: string;
  Contrasena: string;
}

export interface IDataStudentDB {
  Usuarios_id?: number;
  Nombres: string;
  Apellidos: string;
  Correo: string;
  Contrasena?: string;
}
