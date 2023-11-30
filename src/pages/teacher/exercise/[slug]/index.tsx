import { chibalApi } from "@/api";
import { SigInLayout } from "@/components";
import { ListStudent } from "@/components/teacher/exercise/ListStudent";
import { ExcerciseContext, InternationalContext } from "@/context";
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
import { en, es } from "@/messages";
import { isTextLetter, isTextMix, isTextNumber } from "@/utils";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { BsFillCalendarFill } from "react-icons/bs";

interface FormData {
  NombreEjercicio: string;
  TipoEjercicio_id?: number;
  FechaPublicacion?: string;
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
  parts: string[];
}

const ExcersisePage: NextPage<Props> = ({
  exercises,
  typeOfExercise,
  incisos,
  typeOfPublisher,
  studentsGroup,
  asigmentStudentExcercise,
  parts,
}) => {
  const { addStudentAtExcercise, resetListStudent, allStudents } =
    useContext(ExcerciseContext);

  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;

  const [dates, setDates] = useState<Date | null>(new Date());

  const [typeExercise, setTypeExercise] = useState<ITypeExercise>();
  const [typePublisher, setTypePublisher] = useState<ITypePublisher>();

  const [addExercise, setAddExercise] = useState<DataExerciseStgring[]>([]);

  const [showError, setShowError] = useState(false);

  const [dataIncises, setDataIncises] = useState("");

  const route = useRouter();

  useEffect(() => {
    resetListStudent();
    setAddExercise([]);
    if (incisos.length > 0) {
      const { TipoEjercicio_id } = exercises;

      setDates(new Date(exercises.FechaLimite));

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
        addStudentAtExcercise(student);
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
    defaultValues: exercises,
  });

  const setValuesForm = async () => {
    setValue("Estado", 1);
    setValue("TipoEjercicio_id", typeExercise?.Tipo_id);
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    setValue("Estado", typePublisher!.Estado_id);
    if (dates === null) {
      return;
    }
    setValue("FechaLimite", dates.toDateString());
    const datePublic = new Date();
    console.log("HOla");

    if (typePublisher?.Estado_id === 2) {
      setValue("FechaPublicacion", datePublic.toDateString());
      setValue("Estado", 2);
    }
    //setValue("TipoEjercicio_id",  );
    const valor = getValues("TipoEjercicio_id");
    console.log(valor);
    const pub = getValues("FechaPublicacion");
    console.log(pub);
  };

  const onSubmit = async (form: FormData) => {
    await setValuesForm();
    const { FechaPublicacion, Estado, TipoEjercicio_id } = getValues();

    console.log(TipoEjercicio_id);

    const teacherID = parts[1];

    if (parts[0] === "new") {
      const saveExercise = await chibalApi({
        method: "POST",
        data: {
          form,
          addExercise,
          allStudents,
          teacherID,
          FechaPublicacion,
          Estado,
          TipoEjercicio_id,
        },
        url: "/teacher/exercise",
      });
    } else {
      const saveExercise = await chibalApi({
        method: "PUT",
        data: {
          form,
          addExercise,
          allStudents,
          FechaPublicacion,
          Estado,
          TipoEjercicio_id,
        },
        url: "/teacher/exercise",
      });
    }
    route.replace("/teacher/exercise");
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
    <SigInLayout
      titel={`${ms.teacher.exercise.exercise} ${exercises.Ejercicios_id}`}
    >
      <div className="pt-11">
        <section className="bg-gray-2 rounded-xl">
          <div className="p-8 shadow-lg">
            <form
              className="space-y-4"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="form-control relative w-full">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-custom-2 w-full">
                  <div>
                    {ms.teacher.exercise.nameExercise}:
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
                        required: ms.login.required,
                        minLength: { value: 3, message: "Mínimo 3 caracteres" },
                      })}
                    />
                  </div>
                  <div>
                    {ms.teacher.exercise.slug.publicType}:
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
                          console.log(publish);

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
                  {ms.teacher.exercise.slug.typeExercise}:
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
                  {ms.teacher.exercise.limitDate}:
                  <div className="form-control relative">
                    <BsFillCalendarFill />
                    <ReactDatePicker
                      className="input input-solid"
                      selected={dates}
                      onChange={
                        (date) => setDates(date)
                        // setDateLimit(date)
                      }
                    />
                  </div>
                </div>

                <div>
                  {ms.teacher.exercise.slug.asigmentStudent}:
                  <br />
                  <div className="dropdown w-full">
                    {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                    <label className="btn btn-solid-primary" tabIndex={0}>
                      {allStudents.length === studentsGroup.length
                        ? ms.teacher.exercise.slug.text.allStudents
                        : ms.teacher.exercise.slug.text.selectedStudents}
                    </label>
                    <ul className="dropdown-menu">
                      <ListStudent group={studentsGroup} />
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="divider divider-horizontal">
                  <h3 className="text-xl">
                    {ms.teacher.exercise.slug.exerciseLines}
                  </h3>
                </div>
                {addExercise.length === 0 ? (
                  <div className="flex justify-center items-center">
                    <h3>{ms.teacher.exercise.slug.addLinePlease}</h3>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 w-full">
                    <div className="w-full text-center">
                      <h3 className="text-xl">
                        <b>{ms.teacher.exercise.slug.solid}</b>
                      </h3>
                      {addExercise.map((item) => (
                        <h3 className="text-lg">{item.solit}</h3>
                      ))}
                    </div>
                    <div className="w-full text-center">
                      <h3 className="text-xl">
                        <b>{ms.teacher.exercise.slug.typeExercise}</b>
                      </h3>
                      {addExercise.map((item) => (
                        <h3 className="text-lg">{item.typeExercise}</h3>
                      ))}
                    </div>
                  </div>
                )}

                <br />{" "}
                <div className="divider divider-horizontal">
                  <h3 className="text-xl">
                    {ms.teacher.exercise.slug.exerciseLines}
                  </h3>
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
                      {ms.teacher.exercise.slug.addLineList}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="rounded-lg btn btn-primary btn-block"
                >
                  {ms.teacher.exercise.slug.save}
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

  if (parts[0] === "new") {
    exercises = {
      NombreEjercicio: "",
      FechaLimite: new Date().toISOString(),
      FechaPublicacion: "",
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
  return {
    props: {
      parts,
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
