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

export interface IExerciseStudentDB {
  Ejercicios: {
    Ejercicios_id: number;
    NombreEjercicio: string;
    MaestroID: number | null;
    GrupoID: number | null;
    TipoEjercicio_id: number | null;
    FechaPublicacion: Date | null;
    FechaLimite: Date;
    Estado_id: number | null;
  };
  Estado: number | null;
  AlumnoID: number;
}

export interface IExerciseTeacherDB {
  Ejercicios_id: number;
  NombreEjercicio: string;
  MaestroID: number | null;
  GrupoID: number | null;
  TipoEjercicio_id: number | null;
  FechaPublicacion: Date | null;
  FechaLimite: Date;
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

export interface LineByStudentID {
  Incisos: {
    LoSolicitado: string;
  };
  Imagen: string | null;
  Puntaje: number | null;
  Respuesta: string | null;
  Inciso_id: number;
}

export interface UpdateShift {
  AlumnoID: number;
  Imagen: string | null;
  Puntaje: number;
  Respuesta: string | null;
  Inciso_id: number;
}
