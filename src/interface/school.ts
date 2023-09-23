export interface ISchool {
  Escuela: {
    Grupos: {
      Maestros: {
        Usuarios: { Nombres: string; Apellidos: string };
        Usuario_id: number;
      } | null;
      Grupos_id: number;
      NombreGrupo: string;
    }[];
    Nombre: string;
  } | null;
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
