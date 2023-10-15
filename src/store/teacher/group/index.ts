import { IUserStore } from "@/interface";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  student: IUserStore[];
}

interface ActionsState {
  addStudent: (newStudent: IUserStore) => void;
  reset: () => void;
}

export const useQuestionsStore = create<State & ActionsState>()(
  devtools(
    persist(
      (set, get) => {
        return {
          student: [],

          addStudent: (newStudent: IUserStore) => {
            set((state) => ({ student: [...state.student, newStudent] }));
          },

          reset: () => {
            set({ student: [] });
          },
        };
      },
      {
        name: "students",
      },
    ),
  ),
);
