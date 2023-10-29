import { SigInLayout } from "@/components";
import { ListStudent } from "@/components/teacher/exercise/ListStudent";
import { ExcerciseContext } from "@/context";
import {
  getAllStudentsByTeacherId,
  getDataOfExercise,
  getLine,
  getTypePublisher,
  getTypeofExercise,
} from "@/db/teacher";
import {
  DataExerciseStgring,
  IExercise,
  IExerciseTeacherDB,
  IGetAllStudentsByTeacherID,
  IGetStudentAsigmentExercise,
  ILine,
  ISetStudentsExerciseContext,
  ITypeExercise,
  ITypePublisher,
} from "@/interface/";
import { isTextLetter, isTextMix, isTextNumber } from "@/utils";
import { GetServerSideProps, NextPage } from "next";
import { useContext, useEffect, useState } from "react";
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
  studentsGroup: IGetAllStudentsByTeacherID[];
  asigmentStudentExcercise: IGetStudentAsigmentExercise[];
}

const ExcersisePage: NextPage<Props> = ({
  exercises,
  typeOfExercise,
  incisos,
  typeOfPublisher,
  studentsGroup,
  asigmentStudentExcercise,
}) => {
  const { addStudentAtExcercise, resetListStudent } =
    useContext(ExcerciseContext);
  const [dates, setDates] = useState<{
    dateLimit: Date | null;
  }>({
    dateLimit: new Date(),
  });
  let datePublic = new Date();

  const [typeExercise, setTypeExercise] = useState<ITypeExercise>();
  const [typePublisher, setTypePublisher] = useState<ITypePublisher>();

  const [addExercise, setAddExercise] = useState<DataExerciseStgring[]>([]);

  const [showError, setShowError] = useState(false);

  const [dataIncises, setDataIncises] = useState("");

  useEffect(() => {
    resetListStudent();
    setAddExercise([]);
    if (incisos.length > 0) {
      const { TipoEjercicio_id } = exercises;
      datePublic = new Date(exercises.FechaPublicacion);
      setDates({
        dateLimit: new Date(exercises.FechaLimite),
      });

      let typeEjercicio = "";
      let typePublish = "";

      if (exercises.Estado_id === 1) {
        typePublish = "Borrador";
        setTypePublisher({ Estado_id: 1, Nombre: typePublish });
      }

      if (exercises.Estado_id === 2) {
        typePublish = "Publicado";
        setTypePublisher({ Estado_id: 2, Nombre: typePublish });
      }

      if (exercises.TipoEjercicio_id === 1) {
        typeEjercicio = "Letras";
        setTypeExercise({ Tipo_id: 1, Nombre: "Letras" });
      }
      if (exercises.TipoEjercicio_id === 2) {
        typeEjercicio = "Numeros";
        setTypeExercise({ Tipo_id: 2, Nombre: "Numeros" });
      }
      if (exercises.TipoEjercicio_id === 3) {
        typeEjercicio = "Mixto";
        setTypeExercise({ Tipo_id: 3, Nombre: "Mixto" });
      }
      if (exercises.TipoEjercicio_id === 4) {
        typeEjercicio = "Deletreo";
        setTypeExercise({ Tipo_id: 4, Nombre: "Deletreo" });
      }

      setExercisesFunctionILine(
        incisos,
        typeEjercicio,
        Number(TipoEjercicio_id),
      );
    }

    if (asigmentStudentExcercise.length === 0) {
      for (const key in studentsGroup) {
        const student: ISetStudentsExerciseContext =
          studentsGroup[key].Usuarios;
        addStudentAtExcercise(student);
      }
    } else {
      for (const key in asigmentStudentExcercise) {
        const student: ISetStudentsExerciseContext =
          asigmentStudentExcercise[key].Alumnos.Usuarios;
          console.log("YAREGISTRADO",student)
        addStudentAtExcercise(student);
      }
    }
    console.log("YAREGISTRADOSSS",asigmentStudentExcercise);
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
    setValue("FechaPublicacion", datePublic.toDateString());
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

      setExercisesFunctionString(
        item,
        typeExercise?.Nombre,
        typeExercise.Tipo_id,
      );
    }

    if (typeExercise?.Nombre === "Letras") {
      isCorrect = isTextLetter(dataIncises);

      const error = setErrorFunction(isCorrect);
      if (error === false) {
        return;
      }
      setExercisesFunctionString(
        item,
        typeExercise?.Nombre,
        typeExercise.Tipo_id,
      );
      return;
    }
    if (typeExercise?.Nombre === "Mixto") {
      isCorrect = isTextMix(dataIncises);
      const error = setErrorFunction(isCorrect);
      if (error === false) {
        return;
      }
      setExercisesFunctionString(
        item,
        typeExercise?.Nombre,
        typeExercise.Tipo_id,
      );

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
  const setExercisesFunctionILine = (
    item: ILine[],
    typeExercise: string,
    typeExerciseId: number,
  ) => {
    for (const key in item) {
      const { LoSolicitado } = incisos[key];
      setAddExercise((prevExercises) => [
        ...prevExercises,
        {
          solit: LoSolicitado,
          typeExercise,
          typeExerciseId,
        },
      ]);
    }
  };

  const setExercisesFunctionString = (
    item: string[],
    typeExercise: string,
    typeExerciseId: number,
  ) => {
    for (const key in item) {
      const solit = item[key];
      setAddExercise((prevExercises) => [
        ...prevExercises,
        {
          solit,
          typeExercise,
          typeExerciseId,
        },
      ]);
    }
  };

  return (
    <SigInLayout titel={`Ejercicio ${exercises.Ejercicios_id}`}>
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
                    <div className="dropdown w-full">
                      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                      <label className="btn btn-solid-primary" tabIndex={0}>
                        {!typePublisher?.Nombre
                          ? "click"
                          : typePublisher.Nombre}
                      </label>
                      <ul className="dropdown-menu">
                        {typeOfPublisher.map((publish) => {
                          return (
                            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                            <li
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
                  <br />
                  <div className="dropdown w-full">
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

                <div>
                  Alumnos asignados:
                  <br />
                  <div className="dropdown w-full">
                    {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                    <label className="btn btn-solid-primary" tabIndex={0}>
                      click
                    </label>
                    <ul className="dropdown-menu">
                      <ListStudent group={studentsGroup}/>
                    </ul>
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
                        <h3 className="text-lg">{item.solit}</h3>
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
    </SigInLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = "" } = query;
  const parts = slug.toString().split("-");

  let exercises: IExercise | IExerciseTeacherDB | null;

  let incisos: ILine[] | string;

  if (slug === "new") {
    exercises = {
      NombreEjercicio: "",
      FechaLimite: new Date().toISOString(),
      FechaPublicacion: new Date().toISOString(),
    };
    incisos = [];
  } else {
    const datExercise = await getDataOfExercise(parts[0]);
    exercises = JSON.parse(JSON.stringify(datExercise));
    const datLine = await getLine(parts[0]);
    incisos = JSON.parse(JSON.stringify(datLine));
  }

  const getAllStudents:
    | Error
    | {
        studentsGroup: IGetAllStudentsByTeacherID[];
        asigmentStudentExcercise: IGetStudentAsigmentExercise[];
      }
    | undefined = await getAllStudentsByTeacherId(parts);

  const typeOfExercise = await getTypeofExercise();

  const typeOfPublisher: ITypePublisher[] | undefined =
    await getTypePublisher();

  if (
    !exercises ||
    !typeOfExercise ||
    !typeOfPublisher ||
    !getAllStudents ||
    getAllStudents instanceof Error
  ) {
    return {
      redirect: {
        destination: "/teacher/exercise",
        permanent: false,
      },
    };
  }
  const { asigmentStudentExcercise, studentsGroup } = getAllStudents;
  console.log(asigmentStudentExcercise, studentsGroup)
  return {
    props: {
      exercises,
      typeOfExercise,
      incisos,
      typeOfPublisher,
      asigmentStudentExcercise,
      studentsGroup,
    },
  };
};

export default ExcersisePage;
