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
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

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

  function formatData(data: ILine[]) {
    return data.map((item) => ({
      id: item.Incisos_id,
      question: `Ingresa: ${item.LoSolicitado}`,
      code: `${Number(item.LoSolicitado) ? "Número" : "Letra"}`,
      answers: ["esto", "no", "sirve", ":("],
      correctAnswer: item.LoSolicitado,
    }));
  }

  const formattedData = formatData(incisos);
  const jsonData = JSON.stringify(formattedData, null, 2);
  console.log(typeof JSON.parse(jsonData));
  console.log(JSON.parse(jsonData));

  return jsonData;
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
        destination: "/student/exercise",
        permanent: false,
      },
    };
  }
  console.log(typeof incisos);
  console.log(incisos);
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
