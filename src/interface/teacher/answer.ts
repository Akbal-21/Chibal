export interface IAnswer {
  Alumnos: {
    Usuarios: {
      Usuarios_id: number;
      Nombres: string;
      Apellidos: string;
    };
  };
  Incisos: {
    Respuestas: {
      AlumnoID: number;
      Imagen: string | null;
      Puntaje: number | null;
      Respuesta: string | null;
      Inciso_id: number;
    }[];
    LoSolicitado: string | null;
    EjercicioID: number | null;
  };
}
