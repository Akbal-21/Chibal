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
import { useExerciseStore } from "@/store";
import { isTextLetter, isTextMix, isTextNumber } from "@/utils";
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
  Estado: number;
}
interface Props {
  exercise: IExercise;
  typeOfExercise: ITypeExercise[];
  incisos: ILine[];
  typeOfPublisher: ITypePublisher[];
}

const ExcersisePage: FC<Props> = ({
  exercise,
  typeOfExercise,
  incisos,
  typeOfPublisher,
}) => {
  const [datePublic, setDatePublic] = useState<Date | null>(new Date());
  const [dateLimit, setDateLimit] = useState<Date | null>(new Date());

  const [typeExercise, setTypeExercise] = useState("");
  const [typeExcerciseId, setTypeExcerciseID] = useState<number>(0);
  const [typePublisher, setTypePublisher] = useState("");
  const [typePublisherId, setTypePublisherId] = useState(0);

  const { addExcercise, excercise, resetStore } = useExerciseStore();
  const [showError, setShowError] = useState(false);

  const [dataIncises, setDataIncises] = useState("");

  useEffect(() => {
    setValue("TipoEjercicio_id", typeExcerciseId);
    setValue("Estado", typePublisherId);
    if (datePublic !== null) {
      setValue("FechaPublicacion", datePublic.toDateString());
    }
    if (dateLimit !== null) {
      setValue("FechaLimite", dateLimit.toDateString());
    }
  }, [typeExcerciseId, datePublic, dateLimit]);

  useEffect(() => {
    resetStore();
    if (incisos.length > 0) {
      const { TipoEjercicio_id, Estado_id } = exercise;

      setDatePublic(new Date(exercise.FechaPublicacion));
      setDateLimit(new Date(exercise.FechaLimite));

      let typeEjercicio = "";
      let typePublish = "";

      if (Estado_id === 1) {
        typePublish = "Borrador";
        setTypePublisher(typePublish);
      }

      if (Estado_id === 2) {
        typePublish = "Publicado";
        setTypePublisher(typePublish);
      }

      if (TipoEjercicio_id === 1) {
        typeEjercicio = "Letras";
        setTypeExercise(typeEjercicio);
      }
      if (TipoEjercicio_id === 2) {
        typeEjercicio = "Numeros";
        setTypeExercise(typeEjercicio);
      }
      if (TipoEjercicio_id === 3) {
        typeEjercicio = "Mixto";
        setTypeExercise(typeEjercicio);
      }
      if (TipoEjercicio_id === 4) {
        typeEjercicio = "Deletreo";
        setTypeExercise(typeEjercicio);
      }

      for (const key in incisos) {
        const { LoSolicitado } = incisos[key];

        const data = {
          solicitado: LoSolicitado,
          typeExercise: typeEjercicio,
          typeExerciseId: TipoEjercicio_id,
        };
        addExcercise(data);
      }
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
    defaultValues: exercise,
  });

  const onSubmit = (form: FormData) => {
    console.log({ form, excercise });
  };

  let isCorrect: string | undefined;
  const checkInquire = () => {
    const cadenaSinEspacios = dataIncises.replace(/\s+/g, "");

    // Separa la cadena por comas y crea un arreglo de palabras
    const item = cadenaSinEspacios.split(",");

    if (typeExercise === "Numeros") {
      isCorrect = isTextNumber(dataIncises);

      // biome-ignore lint/complexity/noExtraBooleanCast: <explanation>
      if (!!isCorrect) {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
        console.log(isCorrect);

        return;
      }

      for (const key in item) {
        const data = {
          solicitado: item[key],
          typeExercise: typeExercise,
          typeExerciseId: typeExcerciseId,
        };
        addExcercise(data);
      }

      console.log(item);
    }

    if (typeExercise === "Letras") {
      isCorrect = isTextLetter(dataIncises);

      // biome-ignore lint/complexity/noExtraBooleanCast: <explanation>
      if (!!isCorrect) {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
        return;
      }

      for (const key in item) {
        const data = {
          solicitado: item[key],
          typeExercise: typeExercise,
          typeExerciseId: typeExcerciseId,
        };
        addExcercise(data);
      }

      console.log(item);
      return;
    }
    if (typeExercise === "Mixto") {
      isCorrect = isTextMix(dataIncises);

      // biome-ignore lint/complexity/noExtraBooleanCast: <explanation>
      if (!!isCorrect) {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
        return;
      }

      for (const key in item) {
        const data = {
          solicitado: item[key],
          typeExercise: typeExercise,
          typeExerciseId: typeExcerciseId,
        };
        addExcercise(data);
      }

      console.log(item);
      return;
    }
  };
  return (
    <TeacherLayouth titel={`Ejercicio ${exercise.Ejercicios_id}`}>
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
                  <div>
                    Publicacion:
                    <div className="dropdown">
                      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                      <label className="btn btn-solid-primary" tabIndex={0}>
                        {!typePublisher ? "click" : typePublisher}
                      </label>
                      <br />
                      <ul className="dropdown-menu">
                        {typeOfPublisher.map((publish) => {
                          return (
                            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                            <li
                              key={publish.Estado_id}
                              className="dropdown-item"
                              onClick={() => {
                                setTypePublisher(publish.Nombre);
                                setTypePublisherId(publish.Estado_id);
                              }}
                            >
                              {publish.Nombre}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
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
                        //{item.Nombre === "Letras" || item.Nombre === "Numeros" && resetStore()}
                        return (
                          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                          <li
                            key={item.Tipo_id}
                            className="dropdown-item"
                            onClick={() => {
                              setTypeExercise(item.Nombre);
                              setTypeExcerciseID(item.Tipo_id);
                              resetStore();
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
                    {(showError || errors.incisos) && (
                      <span className=" badge badge-error m-1">
                        Error: Dato incompatible con tipo de ejercicio{" "}
                        {typeExercise}.
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
                          typeExercise === "Mixto"
                            ? "Ingrese los numeros y letras separados por , (coma)"
                            : `Ingrese los ${typeExercise.toLocaleLowerCase()} separados por , (coma)`
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

  let exercise: IExercise | IExerciseDB | null;

  let incisos: ILine | string;

  if (slug === "new") {
    exercise = {
      NombreEjercicio: "",
      FechaLimite: new Date().toISOString(),
      FechaPublicacion: new Date().toISOString(),
    };
    incisos = "";
  } else {
    // todo: hacer el chequeo de la info con el ID del ejercicio
    const datExercise = await getDataOfExercise(slug.toString());
    exercise = JSON.parse(JSON.stringify(datExercise));
    const datLine = await getLine(slug.toLocaleString());
    incisos = JSON.parse(JSON.stringify(datLine));
  }

  const typeOfExercise = await getTypeofExercise();

  const typeOfPublisher: ITypePublisher[] | undefined =
    await getTypePublisher();

  if (!exercise || !typeOfExercise || !typeOfPublisher) {
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
      incisos,
      typeOfPublisher,
    },
  };
};

export default ExcersisePage;
