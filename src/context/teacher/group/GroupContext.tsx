import { IDataStudentDB } from "@/interface";
import { createContext } from "react";

interface ContextProps {
  students: IDataStudentDB[];
  //methods
  addStudent: (student: IDataStudentDB) => void;
  resetStudents: () => void;
}

export const GroupContext = createContext({} as ContextProps);
