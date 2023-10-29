import { ISetStudentsExerciseContext } from "@/interface";
import { FC, useReducer } from "react";
import { ExcerciseContext, excerciseReducer } from "./";

export interface ExcerciseState {
  allStudents: ISetStudentsExerciseContext[];
}

const Excercise_INITIAL_STATE: ExcerciseState = {
  allStudents: [],
};

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const ExcerciseProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    excerciseReducer,
    Excercise_INITIAL_STATE,
  );

  const addStudentAtExcercise = (student: ISetStudentsExerciseContext) => {
    dispatch({
      type: "[Excercise] - Add Student to Excercise",
      payload: student,
    });
  };

  const resetListStudent = () => {
    dispatch({ type: "[Excercise] - Reset Student List" });
  };

  const removeStudentAtExcercise = (student: ISetStudentsExerciseContext) => {
    dispatch({
      type: "[Excercise] - Remove Student to Excercise",
      payload: student,
    });
  };

  const addAllStudentsAtExcercise = (
    students: ISetStudentsExerciseContext[],
  ) => {
    dispatch({
      type: "[Excercise] - Add All Students to Excercise",
      payload: students,
    });
  };

  return (
    <ExcerciseContext.Provider
      value={{
        ...state,

        //Meyhods
        addStudentAtExcercise,
        removeStudentAtExcercise,
        addAllStudentsAtExcercise,
        resetListStudent,
      }}
    >
      {children}
    </ExcerciseContext.Provider>
  );
};
