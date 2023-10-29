import { ISetStudentsExerciseContext } from "@/interface";
import { createContext } from "react";

interface ContextProps {
  allStudents: ISetStudentsExerciseContext[];
  //Methods
  addStudentAtExcercise: (student: ISetStudentsExerciseContext) => void;
  removeStudentAtExcercise: (student: ISetStudentsExerciseContext) => void;
  resetListStudent: () => void;
}

export const ExcerciseContext = createContext({} as ContextProps);
