import { ExcerciseContext } from "@/context";
import { IGetAllStudentsByTeacherID } from "@/interface";
import React, { useContext, useEffect } from "react";

interface Props {
  group: IGetAllStudentsByTeacherID[];
}

export const ListStudent: React.FC<Props> = ({ group }) => {
  const { allStudents, addStudentAtExcercise, removeStudentAtExcercise } =
    useContext(ExcerciseContext);

  const handleChange = (student: IGetAllStudentsByTeacherID) => {
    const found = allStudents.find(
      (user) => user.Usuarios_id === student.Usuarios.Usuarios_id,
    );

    if (found) {
      removeStudentAtExcercise(student.Usuarios);
    } else {
      addStudentAtExcercise(student.Usuarios);
    }
  };

  const handleToggleAll = () => {
    if (allStudents.length === group.length) {
      // Si todos los estudiantes están seleccionados, deseleccionar todos
      group.forEach((student) => {
        removeStudentAtExcercise(student.Usuarios);
      });
    } else {
      // Si no todos los estudiantes están seleccionados, seleccionar todos
      group.forEach((student) => {
        addStudentAtExcercise(student.Usuarios);
      });
    }
  };

  useEffect(() => {
    console.log("Updated allStudents:", allStudents);
  }, [allStudents]);

  return (
    <ul className="dropdown-menu">
      <li>
        <label className="flex cursor-pointer gap-2">
          <input
            type="checkbox"
            className="checkbox"
            checked={allStudents.length === group.length}
            onChange={handleToggleAll}
          />
          <span>Marcar Todos</span>
        </label>
      </li>
      {group.map((student) => (
        <li key={student.Usuarios.Usuarios_id} className="dropdown-item">
          <label className="flex cursor-pointer gap-2">
            <input
              type="checkbox"
              className="checkbox"
              checked={allStudents.some(
                (user) => user.Usuarios_id === student.Usuarios.Usuarios_id,
              )}
              onChange={() => handleChange(student)}
            />
            <span>{`${student.Usuarios.Apellidos} ${student.Usuarios.Nombres}`}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
