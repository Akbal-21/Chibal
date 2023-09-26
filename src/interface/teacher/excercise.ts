export interface IExercise {
  Ejercicios_id?: number;
  NombreEjercicio: string;
  MaestroID?: number;
  GrupoID?: number;
  TipoEjercicio_id?: number;
  FechaPublicacion: string;
  FechaLimite: string;
  Estado_id?: number;
}

export interface ITypeExercise {
  Tipo_id: number;
  Nombre: string;
}
