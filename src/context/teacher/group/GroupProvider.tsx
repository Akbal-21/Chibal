import { IDataStudentDB } from "@/interface";
import { FC, useReducer } from "react";
import { GroupContext, groupReducer } from "./";

export interface GroupState {
  students: IDataStudentDB[];
}

const Group_INITIAL_STATE: GroupState = {
  students: [],
};

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const GroupProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(groupReducer, Group_INITIAL_STATE);

  const addStudent = (student: IDataStudentDB) => {
    dispatch({ type: "[Group] - addStudent ", payload: student });
  };

  const resetStudents = () => {
    dispatch({ type: "[Group] - resetStudents" });
  };

  return (
    <GroupContext.Provider
      value={{
        ...state,

        //Methods
        addStudent,
        resetStudents,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};
