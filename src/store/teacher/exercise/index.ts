import { create } from "zustand";

interface DataExercise {
  solicitado: string;
  typeExercise: string;
  typeExerciseId: number;
}

interface Exercise {
  excercise: DataExercise[];
}

type UserActions = {
  addExcercise: (excercise: DataExercise) => void;
  removeExcercise: (data: string) => void;
};

export const useExerciseStore = create<Exercise & UserActions>((set) => ({
  excercise: [],

  // * metodos
  addExcercise: (excercise: DataExercise) => {
    set((state) => ({
      excercise: [...state.excercise, excercise],
    }));
  },

  removeExcercise: (data: string) => {
    set((state) => ({
      excercise: state.excercise.filter((item) => item.solicitado !== data),
    }));
  },
}));
