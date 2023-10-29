import { IDataStudentDB } from "@/interface";
import { GroupState } from "./";

type GroupActionType =
  | {
      type: "[Group] - addStudent ";
      payload: IDataStudentDB;
    }
  | {
      type: "[Group] - resetStudents";
    };

export const groupReducer = (
  state: GroupState,
  action: GroupActionType,
): GroupState => {
  switch (action.type) {
    case "[Group] - addStudent ":
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case "[Group] - resetStudents":
      return {
        ...state,
        students: [],
      };

    default:
      return state;
  }
};
