import { useExerciseStore } from "@/store";
import { FC, useState } from "react";

interface Props {
  typeExercise: string;
}
const typeOfExercise = [
  { Tipo_id: 1, Nombre: "Letras" },
  { Tipo_id: 2, Nombre: "Numeros" },
];

export const TeacherExercise: FC<Props> = ({ typeExercise }) => {
  const { addExcercise, excercise, removeExcercise } = useExerciseStore();

  const [typeExer, setTypeExer] = useState("");
  return (
    <>
      <div className="flex justify-center items-center">
        {excercise.length === 0 ? (
          <div>
            <h3>Agrege un inciso porfavor</h3>
          </div>
        ) : (
          excercise.map((item) => (
            <div className="grid grid-cols-2 w-full">
              <div>{item.solicitado}</div>
              <div>{item.typeExercise}</div>
            </div>
          ))
        )}
      </div>
      <br />

      <div className="grid grid-cols-3 p-2 w-full">
        <div className="w-full">
          Inciso:
          <div className="form-control relative">
            <input className="input input-solid" />
          </div>
        </div>

        <div className="w-full">
          <div>
            Tipo de ejercicio:
            <div className="form-control relative">
              {typeExercise === "Mixto" ? (
                <div className="dropdown">
                  {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                  <label className="btn btn-solid-primary" tabIndex={0}>
                    {!typeExer ? "click" : typeExer}
                  </label>
                  <ul className="dropdown-menu">
                    {typeOfExercise.map((item) => {
                      return (
                        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                        <li
                          key={item.Tipo_id}
                          className="dropdown-item"
                          onClick={() => {
                            setTypeExer(item.Nombre);
                          }}
                        >
                          {item.Nombre}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <h3 className="input input-solid">{typeExercise}</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
