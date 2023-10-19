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
  Turno: {
    Turno_id: number;
    Horario: string;
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

export interface IStudentData {
  Usuarios_id: number;
  Nombres: string;
  Apellidos: string;
  Correo: string;
}

export interface ICreateNewGroup {
  Grupos_id: number;
  Escuela_id: number | null;
  NombreGrupo: string;
  Maestro_id: number | null;
  Turno_id: number | null;
  Grado_id: number | null;
}
