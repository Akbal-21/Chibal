import { create } from "zustand";

interface dataStudent {
  name: string;
  lstName: string;
  email: string;
  password?: string;
}

interface Exercise {
  excercise: dataStudent[];
}

type UserActions = {
  addStudent: (excercise: dataStudent) => void;
  removeStudent: (name: string) => void;
  resetStore: () => void;
};

export const useStudentStore = create<Exercise & UserActions>((set) => ({
  excercise: [],

  // * metodos
  addStudent: (excercise: dataStudent) => {
    set((state) => ({
      excercise: [...state.excercise, excercise],
    }));
  },

  removeStudent: (name: string) => {
    set((state) => ({
      excercise: state.excercise.filter((item) => item.name !== name),
    }));
  },

  resetStore: () => {
    set({
      excercise: [],
    });
  },
}));
