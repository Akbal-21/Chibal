import { IDataStudentDB, IStudentDataGroup } from "@/interface";
import { isEmail } from "@/utils";
import { useState } from "react";

export const AddStudent = () => {
  const [addStudent, setAddStudent] = useState<IDataStudentDB[]>([]);

  const [studentState, setStudentState] = useState<IStudentDataGroup>({
    Nombres: "",
    Apellidos: "",
    Correo: "",
    Contrasena: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStudentState({
      ...studentState,
      [name]: value,
    });
  };

  const handleAddStudent = () => {
    console.log(studentState);
    const mail = isEmail(studentState.Correo);
    console.log(!!mail);
    if (
      studentState.Nombres.length < 3 ||
      studentState.Apellidos.length < 3 ||
      studentState.Contrasena.length < 6
    ) {
      alert("Los campos deben de tener mas de 3 caracteres");

      return;
    }

    setAddStudent([
      ...addStudent,
      {
        Nombres: studentState.Nombres,
        Apellidos: studentState.Apellidos,
        Correo: studentState.Correo,
        Contrasena: studentState.Contrasena,
      },
    ]);
  };
  return (
    <div>
      <div className="divider divider-horizontal">Agregar un alumno</div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label>
            Correo
            <input
              className="input input-solid max-w-full"
              placeholder="email@google.com"
              type="email"
              name="Correo"
            />
          </label>
        </div>
        <div>
          Contraseña
          <input
            className="input input-solid max-w-full"
            placeholder="Contraseña"
            type="password"
            name="Contrasena"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          Nombres:
          <input
            className="input input-solid max-w-full"
            placeholder="Nombre"
            type="text"
            name="Nombres"
          />
        </div>
        <div>
          Apellidos
          <input
            className="input input-solid max-w-full"
            placeholder="Apellidos"
            type="text"
            name="Apellidos"
          />
        </div>
      </div>
      <div>
        <button className="btn btn-success mt-6 w-full" type="button">
          Agregar
        </button>
      </div>
    </div>
  );
};
