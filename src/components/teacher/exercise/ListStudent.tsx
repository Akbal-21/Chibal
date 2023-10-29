import { ExcerciseContext } from "@/context";
import { IGetAllStudentsByTeacherID } from "@/interface";
import { FC, useContext, useEffect, useState } from "react";

interface Props {
  student: IGetAllStudentsByTeacherID;
}

export const ListStudent: FC<Props> = ({ student }) => {
  const { allStudents, addStudentAtExcercise, removeStudentAtExcercise } =
    useContext(ExcerciseContext);
  const [isSelectStudent, setIsSelectStudent] = useState<boolean>(false);
  const { Usuarios } = student;
  useEffect(() => {
    const isSelect = allStudents.some(function (user) {
      return user.Usuarios_id === Usuarios.Usuarios_id;
    });
    setIsSelectStudent(isSelect);
  }, [isSelectStudent]);

  console.log(allStudents);
  //if (
  //  allStudents.find(function (user) {
  //    return user.Usuarios_id === student.Usuarios.Usuarios_id;
  //  })
  //) {
  //  setIsSelectStudent(true);
  //}

  const hancdleChange = () => {
    setIsSelectStudent(!isSelectStudent);
    if (isSelectStudent === true) {
      addStudentAtExcercise(Usuarios);
    } else if (isSelectStudent === false) {
      removeStudentAtExcercise(Usuarios);
    }
  };

  return (
    <li key={student.Usuarios.Usuarios_id} className="dropdown-item">
      <label className="flex cursor-pointer gap-2">
        <input
          type="checkbox"
          className="checkbox"
          checked={isSelectStudent}
          onChange={() => hancdleChange()}
        />
        <span>
          {`${student.Usuarios.Apellidos} ${student.Usuarios.Nombres}`}
        </span>
      </label>
    </li>
  );
};
