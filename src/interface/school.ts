export interface ITeacher {
  Usuarios: {
    Nombres: string;
    Apellidos: string;
  };
  Usuario_id: number;
}

export interface IGrade {
  Maestros: {
    Usuarios: {
      Nombres: string;
      Apellidos: string;
    };
    Usuario_id: number;
  } | null;
  Grupos_id: number;
  NombreGrupo: string;
}

export interface ISchool{
  Administrador: {
    Usuarios: {
        Nombres: string;
        Apellidos: string;
    };
  }[];
  Escuela_id: number;
  Nombre: string;
}
