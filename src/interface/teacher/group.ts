export interface IGroup {
  Grupos_id: number;
  NombreGrupo: string;
}

export interface IDataGroup {
  Grupos: {
    Escuela: {
      Nombre: string;
    } | null;
    Grado: {
      Nivel: string;
    } | null;
    Turno: {
      Horario: string;
    } | null;
    NombreGrupo: string;
  } | null;
  Usuarios: {
    Nombres: string;
    Apellidos: string;
  };
}
