import { TeacherLayouth } from "@/components";
import { getTypeofExercise } from "@/db/teacher";
import { IExercise, ITypeExercise } from "@/interface/";
import { useExerciseStore } from "@/store";
import { isValidLineLetter, isValidLineMix, isValidLineNumber } from "@/utils";
import { GetServerSideProps } from "next";
import { FC, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { BsFillCalendarFill } from "react-icons/bs";

interface FormData {
  NombreEjercicio: string;
  TipoEjercicio_id?: number;
  FechaPublicacion: string;
  FechaLimite: string;
  incisos: string;
}
interface Props {
  exercise: IExercise;
  typeOfExercise: ITypeExercise[];
}

const ExcersisePage: FC<Props> = ({ exercise, typeOfExercise }) => {
  const [datePublic, setDatePublic] = useState<Date | null>(new Date());
  const [dateLimit, setDateLimit] = useState<Date | null>(new Date());
  const [typeExercise, setTypeExercise] = useState("");
  const [typeExcerciseId, setTypeExcerciseID] = useState<number>(0);

  const { addExcercise, excercise, removeExcercise } = useExerciseStore();

  useEffect(() => {
    setValue("TipoEjercicio_id", typeExcerciseId);
    if (datePublic !== null) {
      setValue("FechaPublicacion", datePublic.toDateString());
    }
    if (dateLimit !== null) {
      setValue("FechaLimite", dateLimit.toDateString());
    }
  }, [typeExcerciseId, datePublic, dateLimit]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: exercise,
  });

  const onSubmit = (form: FormData) => {
    if (form.NombreEjercicio.length < 3) {
      return alert("debe de tener un nombre el ejercicio");
    }
    if (!excercise === null) {
      return alert("debe de agregar un inciso por lo menos");
    }

    console.log({ form, excercise });
  };

  return (
    <TeacherLayouth titel={`Ejercicio ${exercise.Ejercicios_id}`}>
      <div className="pt-11">
        <section className="bg-gray-2 rounded-xl">
          <div className="p-8 shadow-lg">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control relative w-full">
                Nombre del ejercicio:
                {/* <label className="sr-only">Name</label> */}
                <input
                  className="input input-solid max-w-full"
                  placeholder="Name"
                  type="text"
                  {...register("NombreEjercicio", {
                    required: "Este Campo es requerido",
                    minLength: { value: 3, message: "Mínimo 3 caracteres" },
                  })}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  Tipo de Ejercicio:
                  <div className="dropdown">
                    {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                    <label className="btn btn-solid-primary" tabIndex={0}>
                      {!typeExercise ? "click" : typeExercise}
                    </label>
                    <ul className="dropdown-menu">
                      {typeOfExercise.map((item) => {
                        return (
                          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                          <li
                            key={item.Tipo_id}
                            className="dropdown-item"
                            onClick={() => {
                              setTypeExercise(item.Nombre);
                              setTypeExcerciseID(item.Tipo_id);
                            }}
                          >
                            {item.Nombre}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div>
                  Fecha a publicar:
                  <div className="form-control relative">
                    <BsFillCalendarFill />
                    <ReactDatePicker
                      className="input input-solid"
                      selected={datePublic}
                      onChange={(date) => setDatePublic(date)}
                    />
                  </div>
                </div>

                <div className="w-full">
                  Fecha Limite:
                  <div className="form-control relative">
                    <BsFillCalendarFill />
                    <ReactDatePicker
                      className="input input-solid"
                      selected={dateLimit}
                      onChange={(date) => setDateLimit(date)}
                    />
                  </div>
                </div>
              </div>

              <div>
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
                <div className="grid grid-cols-custom-2 gap-4 w-full">
                  <div className="w-full">
                    Incisos:
                    <div className="form-control relative">
                      {typeExercise === "Numeros" ? (
                        <input
                          className="input input-solid max-w-full"
                          placeholder="Ingreese los numeros separados por ,"
                          type="text"
                          {...register("incisos", {
                            required: "Este Campo es requerido",
                            validate: isValidLineNumber,
                          })}
                        />
                      ) : typeExercise === "Letras" ? (
                        <input
                          className="input input-solid max-w-full"
                          placeholder="Ingreese los numeros separados por ,"
                          type="text"
                          {...register("incisos", {
                            required: "Este Campo es requerido",
                            validate: isValidLineLetter,
                          })}
                        />
                      ) : (
                        <input
                          className="input input-solid max-w-full"
                          placeholder="Ingreese los numeros y letras separados por ,"
                          type="text"
                          {...register("incisos", {
                            required: "Este Campo es requerido",
                            validate: isValidLineMix,
                          })}
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      className="btn btn-success mt-6 w-full"
                      type="button"
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="rounded-lg btn btn-primary btn-block"
                >
                  Guadar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </TeacherLayouth>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = "" } = query;

  let exercise: IExercise | null;

  if (slug === "new") {
    exercise = {
      NombreEjercicio: "",
      FechaLimite: new Date().toISOString(),
      FechaPublicacion: new Date().toISOString(),
    };
  } else {
    // todo: hacer el chequeo de la info con el ID del ejercicio
    exercise = JSON.parse(
      JSON.stringify({
        NombreEjercicio: "",
        FechaLimite: new Date().toISOString(),
        FechaPublicacion: new Date().toISOString(),
      }),
    );
  }

  const typeOfExercise = await getTypeofExercise();

  if (!exercise || !typeOfExercise) {
    return {
      redirect: {
        destination: "/teacher/exercise",
        permanent: false,
      },
    };
  }

  return {
    props: {
      exercise,
      typeOfExercise,
    },
  };
};

export default ExcersisePage;
