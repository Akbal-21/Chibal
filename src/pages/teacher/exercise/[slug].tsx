import { TeacherLayouth } from "@/components";
import {
  getDataOfExercise,
  getLine,
  getTypePublisher,
  getTypeofExercise,
} from "@/db/teacher";
import {
  IExercise,
  IExerciseDB,
  ILine,
  ITypeExercise,
  ITypePublisher,
} from "@/interface/";
import { isTextLetter, isTextMix, isTextNumber } from "@/utils";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
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
  Estado: number;
}
interface Props {
  exercises: IExercise;
  typeOfExercise: ITypeExercise[];
  incisos: ILine[];
  typeOfPublisher: ITypePublisher[];
}

interface DataExercise {
  solicitado: string;
  typeExercise: string;
  typeExerciseId: number | undefined;
}

const ExcersisePage: NextPage<Props> = ({
  exercises,
  typeOfExercise,
  incisos,
  typeOfPublisher,
}) => {
  const [dates, setDates] = useState<{
    datePublic: Date | null;
    dateLimit: Date | null;
  }>({
    datePublic: new Date(),
    dateLimit: new Date(),
  });

  // const [datePublic, setDatePublic] = useState<Date | null>(new Date());
  // const [dateLimit, setDateLimit] = useState<Date | null>(new Date());

  const [typeExercise, setTypeExercise] = useState<ITypeExercise>();
  const [typePublisher, setTypePublisher] = useState<ITypePublisher>();

  const [addExercise, setAddExercise] = useState<DataExercise[]>([]);

  const [showError, setShowError] = useState(false);

  const [dataIncises, setDataIncises] = useState("");

  useEffect(() => {
    setAddExercise([]);
    if (incisos.length > 0) {
      const { TipoEjercicio_id, Estado_id } = exercises;
      setDates({
        datePublic: new Date(exercises.FechaPublicacion),
        dateLimit: new Date(exercises.FechaLimite),
      });

      // setDatePublic(new Date(exercises.FechaPublicacion));
      // setDateLimit(new Date(exercises.FechaLimite));

      let typeEjercicio = "";
      let typePublish = "";

      if (Estado_id === 1) {
        typePublish = "Borrador";
        setTypePublisher({ Estado_id: 1, Nombre: typePublish });
      }

      if (Estado_id === 2) {
        typePublish = "Publicado";
        setTypePublisher({ Estado_id: 2, Nombre: typePublish });
      }

      if (TipoEjercicio_id === 1) {
        typeEjercicio = "Letras";
        setTypeExercise({ Tipo_id: 1, Nombre: typeEjercicio });
      }
      if (TipoEjercicio_id === 2) {
        typeEjercicio = "Numeros";
        setTypeExercise({ Tipo_id: 2, Nombre: typeEjercicio });
      }
      if (TipoEjercicio_id === 3) {
        setTypeExercise({ Tipo_id: 3, Nombre: "Mixto" });
      }
      if (TipoEjercicio_id === 4) {
        typeEjercicio = "Deletreo";
        setTypeExercise({ Tipo_id: 4, Nombre: typeEjercicio });
      }
      setExercisesFunction(incisos, typeEjercicio, Number(TipoEjercicio_id));
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: exercises,
  });

  const onSubmit = (form: FormData) => {
    setValue("TipoEjercicio_id", typeExercise?.Tipo_id);
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    setValue("Estado", typePublisher!.Estado_id);
    if (dates.datePublic !== null) {
      setValue("FechaPublicacion", dates.datePublic.toDateString());
    }
    if (dates.dateLimit !== null) {
      setValue("FechaLimite", dates.dateLimit.toDateString());
    }

    console.log({ form, addExercise });
  };

  let isCorrect: string | undefined;
  const checkInquire = () => {
    const cadenaSinEspacios = dataIncises.replace(/\s+/g, "");

    // Separa la cadena por comas y crea un arreglo de palabras
    const item = cadenaSinEspacios.split(",");

    if (typeExercise?.Nombre === "Numeros") {
      isCorrect = isTextNumber(dataIncises);

      const error = setErrorFunction(isCorrect);
      if (error === false) {
        return;
      }

      setExercisesFunction(item, typeExercise?.Nombre, typeExercise.Tipo_id);
    }

    if (typeExercise?.Nombre === "Letras") {
      isCorrect = isTextLetter(dataIncises);

      const error = setErrorFunction(isCorrect);
      if (error === false) {
        return;
      }
      setExercisesFunction(item, typeExercise?.Nombre, typeExercise.Tipo_id);
      return;
    }
    if (typeExercise?.Nombre === "Mixto") {
      isCorrect = isTextMix(dataIncises);
      const error = setErrorFunction(isCorrect);
      if (error === false) {
        return;
      }
      setExercisesFunction(item, typeExercise?.Nombre, typeExercise.Tipo_id);

      return;
    }
  };

  const setErrorFunction = (isCorrect: string | undefined) => {
    // biome-ignore lint/complexity/noExtraBooleanCast: <explanation>
    if (!!isCorrect) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return false;
    }
  };

  const setExercisesFunction = (
    item: string[] | ILine[],
    typeExercise: string,
    typeExerciseId: number,
  ) => {
    for (const key in item) {
      const { LoSolicitado } = incisos[key];
      setAddExercise((prevExercises) => [
        ...prevExercises,
        {
          solicitado: LoSolicitado,
          typeExercise,
          typeExerciseId,
        },
      ]);
    }
  };

  return (
    <TeacherLayouth titel={`Ejercicio ${exercises.Ejercicios_id}`}>
      <div className="pt-11">
        <section className="bg-gray-2 rounded-xl">
          <div className="p-8 shadow-lg">
            <form
              className="space-y-4"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="form-control relative w-full">
                <div className=" grid grid-cols-custom-2 w-full gap-5">
                  <div>
                    Nombre del ejercicio:
                    {errors.NombreEjercicio && (
                      <span className=" badge badge-error m-1">
                        {errors.NombreEjercicio.message}
                      </span>
                    )}
                    <br />
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
                  <div>
                    Publicacion:
                    <br />

                    <select className="select select-solid-primary">
                      {typeOfPublisher.map((publish) => {
                        return (
                          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                          <option
                            key={publish.Estado_id}
                            className="dropdown-item"
                            onClick={() => {
                              setTypePublisher({
                                Estado_id: publish.Estado_id,
                                Nombre: publish.Nombre,
                              });
                            }}
                          >
                            {publish.Nombre}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  Tipo de Ejercicio:
                  <div className="dropdown">
                    {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                    <label className="btn btn-solid-primary" tabIndex={0}>
                      {!typeExercise?.Nombre ? "click" : typeExercise.Nombre}
                    </label>
                    <ul className="dropdown-menu">
                      {typeOfExercise.map((item) => {
                        return (
                          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                          <li
                            key={item.Tipo_id}
                            className="dropdown-item"
                            onClick={() => {
                              setTypeExercise({
                                Tipo_id: item.Tipo_id,
                                Nombre: item.Nombre,
                              });
                              setAddExercise([]);
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
                      selected={dates.datePublic}
                      onChange={
                        (date) => setDates({ ...dates, datePublic: date })
                        // setDatePublic(date)
                      }
                    />
                  </div>
                </div>

                <div className="w-full">
                  Fecha Limite:
                  <div className="form-control relative">
                    <BsFillCalendarFill />
                    <ReactDatePicker
                      className="input input-solid"
                      selected={dates.dateLimit}
                      onChange={
                        (date) => setDates({ ...dates, dateLimit: date })
                        // setDateLimit(date)
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="divider divider-horizontal">
                  <h3 className="text-xl">Incisos del ejercicio</h3>
                </div>
                {addExercise.length === 0 ? (
                  <div className="flex justify-center items-center">
                    <h3>Agrege un inciso porfavor</h3>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 w-full">
                    <div className="w-full text-center">
                      <h3 className="text-xl">
                        <b>Solicitado</b>
                      </h3>
                      {addExercise.map((item) => (
                        <h3 className="text-lg">{item.solicitado}</h3>
                      ))}
                    </div>
                    <div className="w-full text-center">
                      <h3 className="text-xl">
                        <b>Tipo</b>
                      </h3>
                      {addExercise.map((item) => (
                        <h3 className="text-lg">{item.typeExercise}</h3>
                      ))}
                    </div>
                  </div>
                )}

                <br />{" "}
                <div className="divider divider-horizontal">
                  <h3 className="text-xl">Agregar Incisos</h3>
                </div>

                <div className="grid grid-cols-custom-2 gap-4 w-full">
                  <div className="w-full">
                    Incisos:
                    {(showError || errors.incisos) && (
                      <span className=" badge badge-error m-1">
                        Error: Dato incompatible con tipo de ejercicio{" "}
                        {typeExercise?.Nombre}.
                      </span>
                    )}
                    <div className="form-control relative">
                      <input
                        className={
                          !errors.incisos
                            ? "input input-solid max-w-full"
                            : "input input-solid-error max-w-full"
                        }
                        placeholder={
                          typeExercise?.Nombre === "Mixto"
                            ? "Ingrese los numeros y letras separados por , (coma)"
                            : `Ingrese los ${typeExercise?.Nombre.toLocaleLowerCase()} separados por , (coma)`
                        }
                        type="text"
                        {...register("incisos", {})}
                        onChange={(e) => setDataIncises(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      className="btn btn-success mt-6 w-full"
                      type="button"
                      onClick={checkInquire}
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
                  Guardar
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

  let exercises: IExercise | IExerciseDB | null;

  let incisos: ILine | string;

  if (slug === "new") {
    exercises = {
      NombreEjercicio: "",
      FechaLimite: new Date().toISOString(),
      FechaPublicacion: new Date().toISOString(),
    };
    incisos = "";
  } else {
    // todo: hacer el chequeo de la info con el ID del ejercicio
    const datExercise = await getDataOfExercise(slug.toString());
    exercises = JSON.parse(JSON.stringify(datExercise));
    const datLine = await getLine(slug.toLocaleString());
    incisos = JSON.parse(JSON.stringify(datLine));
  }

  const typeOfExercise = await getTypeofExercise();

  const typeOfPublisher: ITypePublisher[] | undefined =
    await getTypePublisher();

  if (!exercises || !typeOfExercise || !typeOfPublisher) {
    return {
      redirect: {
        destination: "/teacher/exercise",
        permanent: false,
      },
    };
  }

  return {
    props: {
      exercises,
      typeOfExercise,
      incisos,
      typeOfPublisher,
    },
  };
};

export default ExcersisePage;
