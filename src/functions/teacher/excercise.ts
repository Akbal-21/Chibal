export const getTypeofExerciseByID = (TipoEjercicio_id: number) => {
  let type: string;
  if (TipoEjercicio_id === 1) {
    type = "Letras";
  }
  if (TipoEjercicio_id === 2) {
    type = "Numeros";
  }
  if (TipoEjercicio_id === 3) {
    type = "Mixto";
  }
  if (TipoEjercicio_id === 4) {
    type = "Deletreo";
  }
};

export const getStatusById = (Estado_id: number) => {
  if (Estado_id === 1) {
    return "Borrador";
  }
  if (Estado_id === 2) {
    return "Publicado";
  }
};
