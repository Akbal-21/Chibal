import { ExcerciseContext } from "@/context";
import {
  IGetAllStudentsByTeacherID,
  ISetStudentsExerciseContext,
} from "@/interface";
import { FC, useContext, useState } from "react";

interface Props {
  student: IGetAllStudentsByTeacherID;
  isAsigment: boolean;
}

export const ListStudent: FC<Props> = ({ student, isAsigment }) => {
  console.log(isAsigment);

  const { allStudents } = useContext(ExcerciseContext);
  const [isSelectStudent, setIsSelectStudent] = useState<boolean>(isAsigment);
  const user: ISetStudentsExerciseContext = student.Usuarios;
  console.log(allStudents, user);

  return (
    <li key={student.Usuarios.Usuarios_id} className="dropdown-item">
      <label className="flex cursor-pointer gap-2">
        <input type="checkbox" className="checkbox" checked={isSelectStudent} />
        <span>
          {`${student.Usuarios.Apellidos} ${student.Usuarios.Nombres}`}
        </span>
      </label>
    </li>
  );
};
