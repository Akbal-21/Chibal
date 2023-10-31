import { create } from "zustand";

interface DataExercise {
  solicitado: string;
  typeExercise: string;
  typeExerciseId: number | undefined;
}

type State = {
  excercise: DataExercise[];
};

type Actions = {
  addExcercise: (excercise: DataExercise) => void;
  removeExcercise: (data: string) => void;
  resetStore: () => void;
};
const initialState: State = {
  excercise: [],
};

export const useExerciseStore = create<State & Actions>((set, get) => ({
  ...initialState,

  // * metodos
  addExcercise: (excercise: DataExercise) =>
    set((state) => ({
      excercise: [...state.excercise, excercise],
    })),

  removeExcercise: (data: string) =>
    set((state) => ({
      excercise: state.excercise.filter((item) => item.solicitado !== data),
    })),

  resetStore: () =>
    set({
      excercise: [],
    }),
}));
