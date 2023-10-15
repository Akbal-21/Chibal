import { IDataGroup, IStudentData } from "@/interface";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StudentsState {
  students: IStudentData[];
}
interface StudentActions {
  reset: () => void;
  setState: (newStudents: IStudentData[]) => void;
  fetchStudents: (dataGroup: IDataGroup[] | undefined) => void;
  addNewStudent: (student: IStudentData) => void;
  getStudentInfo: (studentId: string) => IStudentData | undefined;
  deleteStudent: (studentId: string) => void;
}

export const useStudentsStore = create<StudentsState & StudentActions>()(
  devtools(
    persist(
      (set, get) => {
        return {
          students: [],

          fetchStudents: (dataGroup: IDataGroup[] | undefined) => {
            let studentsArray: IStudentData[];
            if (dataGroup !== undefined) {
              const studentsDataG = dataGroup[0].Alumnos.map((alumno) => ({
                Usuarios_id: alumno.Usuarios.Usuarios_id,
                Nombres: alumno.Usuarios.Nombres,
                Apellidos: alumno.Usuarios.Apellidos,
                Correo: alumno.Usuarios.Correo,
              }));
              studentsArray = studentsDataG;
              set({ students: studentsArray });
            }
          },

          setState: (newStudents: IStudentData[]) => {
            set({ students: newStudents });
          },

          reset: () => {
            set({ students: [] });
          },

          addNewStudent: (student: IStudentData) => {
            set((state) => {
              return { students: [...state.students, student] };
            });
          },

          getStudentInfo: (studentId: string) => {
            const student = get().students.find(
              (s) => s.Usuarios_id === Number(studentId)
            );
            return student;
          },

          deleteStudent: (studentId: string) => {
            set((state) => {
              const updatedStudents = state.students.filter(
                (s) => s.Usuarios_id !== Number(studentId)
              );
              return { students: updatedStudents };
            });
          },
        };
      },
      {
        name: "studentsStorage",
      }
    )
  )
);
