import { ISetStudentsExerciseContext } from "@/interface";
import { ExcerciseState } from "./";

type ExcerciseActionType =
  | {
      type: "[Excercise] - Add Student to Excercise";
      payload: ISetStudentsExerciseContext;
    }
  | {
      type: "[Excercise] - Remove Student to Excercise";
      payload: ISetStudentsExerciseContext;
    }
  | {
      type: "[Excercise] - Reset Student List";
    };

export const excerciseReducer = (
  state: ExcerciseState,
  action: ExcerciseActionType,
): ExcerciseState => {
  switch (action.type) {
    case "[Excercise] - Add Student to Excercise":
      return {
        ...state,
        allStudents: [...state.allStudents, action.payload],
      };

    case "[Excercise] - Remove Student to Excercise":
      return {
        ...state,
        allStudents: state.allStudents.filter(
          (student) => !(student.Usuarios_id === action.payload.Usuarios_id),
        ),
      };

    case "[Excercise] - Reset Student List":
      return {
        ...state,
        allStudents: [],
      };

    default:
      return state;
  }
};
