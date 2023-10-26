export interface ITeacher {
  Usuario_id?: number;
  Usuarios: {
      Nombres: string;
      Apellidos: string;
      Correo: string;
      Contrasena?: string;
  };
};

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
  } | null;
  Escuela_id: number;
  Nombre: string;
}



export interface ISchoolName{
    Escuela_id?: number;
    Nombre: string;
    //Administrador_id: number | null;
}
