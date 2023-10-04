import { create } from "zustand";

interface dataStudent {
  Usuarios_id: number;
  Nombres: string;
  Apellidos: string;
  Correo: string;
}

interface Exercise {
  students: dataStudent[];
}

type UserActions = {
  addStudent: (student: dataStudent) => void;
  removeStudent: (name: string) => void;
  resetStore: () => void;
};

export const useStudentStore = create<Exercise & UserActions>((set) => ({
  students: [],

  // * metodos
  addStudent: (student: dataStudent) => {
    set((state) => ({
      students: [...state.students, student],
    }));
  },

  removeStudent: (name: string) => {
    set((state) => ({
      students: state.students.filter((item) => item.Nombres !== name),
    }));
  },

  resetStore: () => {
    set({
      students: [],
    });
  },
}));
