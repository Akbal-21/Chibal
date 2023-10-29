import { ExcerciseContext } from "@/context";
import { IGetAllStudentsByTeacherID } from "@/interface";
import { FC, useContext, useState } from "react";

interface Props {
  student: IGetAllStudentsByTeacherID;
  isSelect: boolean;
}

export const ListStudent: FC<Props> = ({ student, isSelect }) => {
  const { allStudents, addStudentAtExcercise, removeStudentAtExcercise } =
    useContext(ExcerciseContext);

  const [isSelectStudent, setIsSelectStudent] = useState<boolean>(isSelect);

  // const hancdleChange = () => {
  //   setIsSelectStudent(!isSelectStudent);
  //   if (isSelectStudent === true) {
  //     addStudentAtExcercise(student.Usuarios);
  //   } else {
  //     removeStudentAtExcercise(student.Usuarios);
  //   }

  //   console.log(allStudents);
  // };

  return (
    <li key={student.Usuarios.Usuarios_id} className="dropdown-item">
      <label className="flex cursor-pointer gap-2">
        <input
          type="checkbox"
          className="checkbox"
          checked={isSelectStudent}
          // onChange={hancdleChange}
        />
        <span>
          {`${student.Usuarios.Apellidos} ${student.Usuarios.Nombres}`}
        </span>
      </label>
    </li>
  );
};
