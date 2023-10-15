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

export interface ITypePublisher {
  Estado_id: number;
  Nombre: string;
}

export interface IExerciseDB {
  Ejercicios_id: number;
  NombreEjercicio: string;
  MaestroID: number | null;
  GrupoID: number | null;
  TipoEjercicio_id: number | null;
  FechaPublicacion: Date;
  FechaLimite: Date | null;
  Estado_id: number | null;
}

export interface ILine {
  Incisos_id: number;
  LoSolicitado: string;
  EjercicioID: number | null;
}

export interface DataExerciseStgring {
  solit: string;
  typeExercise: string;
  typeExerciseId: number | undefined;
}
