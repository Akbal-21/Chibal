import { useExerciseStore } from "@/store";
import { FC, useState } from "react";

interface Props {
  typeExercise: string;
}
const typeOfExercise = [
  { Tipo_id: 1, Nombre: "Letras" },
  { Tipo_id: 2, Nombre: "Numeros" },
];
const numeros = [
  { id: 1, numero: 0 },
  { id: 2, numero: 1 },
  { id: 3, numero: 2 },
  { id: 4, numero: 3 },
  { id: 5, numero: 4 },
  { id: 6, numero: 5 },
  { id: 7, numero: 6 },
  { id: 8, numero: 7 },
  { id: 9, numero: 8 },
  { id: 10, numero: 9 },
];

const letrasMayusculas = [
  { id: 1, letra: "A" },
  { id: 2, letra: "B" },
  { id: 3, letra: "C" },
  { id: 4, letra: "D" },
  { id: 5, letra: "E" },
  { id: 6, letra: "F" },
  { id: 7, letra: "G" },
  { id: 8, letra: "H" },
  { id: 9, letra: "I" },
  { id: 10, letra: "J" },
  { id: 11, letra: "K" },
  { id: 12, letra: "L" },
  { id: 13, letra: "M" },
  { id: 14, letra: "N" },
  { id: 15, letra: "O" },
  { id: 16, letra: "P" },
  { id: 17, letra: "Q" },
  { id: 18, letra: "R" },
  { id: 19, letra: "S" },
  { id: 20, letra: "T" },
  { id: 21, letra: "U" },
  { id: 22, letra: "V" },
  { id: 23, letra: "W" },
  { id: 24, letra: "X" },
  { id: 25, letra: "Y" },
  { id: 26, letra: "Z" },
];

export const TeacherExercise: FC<Props> = ({ typeExercise }) => {
  const { addExcercise, excercise, removeExcercise } = useExerciseStore();

  const [typeExer, setTypeExer] = useState<string>();
  const [line, setLine] = useState<string>();

  const handleAddLine = () => {
    if (!line || !typeExer) {
      return;
    }
    let exer;
    if (typeExer === "Numeros") {
      exer = {
        solicitado: line,
        typeExercise: typeExer,
        typeExerciseId: 1,
      };
      addExcercise(exer);
      setLine("");
      return;
    }
    if (typeExer === "Letras") {
      exer = {
        solicitado: line,
        typeExercise: typeExer,
        typeExerciseId: 2,
      };
      addExcercise(exer);
      setLine("");
      return;
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        {excercise.length === 0 ? (
          <div>
            <h3>Agrege un inciso porfavor</h3>
          </div>
        ) : (
          <div className="grid grid-cols-2 w-full">
            <div className="w-full">
              Solicitado
              {excercise.map((item) => (
                <div>{item.solicitado}</div>
              ))}
            </div>
            <div>
              Tipo
              {excercise.map((item) => (
                <div>{item.typeExercise}</div>
              ))}
            </div>
          </div>
        )}
      </div>
      <br />

      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="w-full">
          Inciso:
          <div className="form-control relative">
            {typeExer === "Numeros" ? (
              <div className="dropdown">
                {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                <label className="btn btn-solid-primary" tabIndex={0}>
                  {line}
                </label>
                <ul className="dropdown-menu">
                  {numeros.map((num) => {
                    return (
                      // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                      <li
                        key={num.id}
                        className="dropdown-item"
                        onClick={() => {
                          setLine(num.numero.toString());
                        }}
                      >
                        {num.numero}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="dropdown">
                {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                <label className="btn btn-solid-primary" tabIndex={0}>
                  {line}
                </label>
                <ul className="dropdown-menu">
                  {letrasMayusculas.map((letter) => {
                    return (
                      // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                      <li
                        key={letter.id}
                        className="dropdown-item"
                        onClick={() => {
                          setLine(letter.letra.toString());
                        }}
                      >
                        {letter.letra}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
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
                  <ul className="dropdown-menu text-black">
                    {typeOfExercise.map((item) => {
                      return (
                        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                        <li
                          key={item.Tipo_id}
                          className="dropdown-item"
                          onClick={() => {
                            setTypeExer(item.Nombre.toString());
                          }}
                        >
                          {item.Nombre}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <h3
                  className="input input-solid"
                  onClick={() => {
                    setTypeExer(typeExercise);
                  }}
                >
                  {typeExercise}
                </h3>
              )}
            </div>
          </div>
        </div>

        <div>
          <button
            className="btn btn-success mt-6 w-full"
            onClick={handleAddLine}
            type="button"
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};
