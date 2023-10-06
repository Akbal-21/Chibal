import {
    IExercise,
    ILine,
    ITypeExercise,
    ITypePublisher,
  } from "@/interface/";
  import "react-datepicker/dist/react-datepicker.css";
  
  import { getLine } from "../db/teacher";
  interface Props {
    exercise: IExercise;
    typeOfExercise: ITypeExercise[];
    incisos: ILine[];
    typeOfPublisher: ITypePublisher[];
  }
  
  interface question {
    id: number;
    question: string;
    code: string;
    answers: string[];
    correctAnswer: string;
  }
  
  // Define la función formatData fuera del bloque
  function formatData(data: ILine[]): question[] {
    return data.map((item) => ({
      id: item.Incisos_id,
      question: `Ingresa: ${item.LoSolicitado}`,
      code: `${Number(item.LoSolicitado) ? "Número" : "Letra"}`,
      answers: ["esto", "no", "sirve", ":("],
      correctAnswer: item.LoSolicitado,
    }));
  }
  
  export const getExerciseQuestions = async (exerciseID: number) => {
    const datLine = await getLine(exerciseID.toString());

    console.log(datLine);
    // Llama a la función formatData desde dentro del bloque
    const formattedData = formatData(datLine);
    const jsonData = JSON.stringify(formattedData, null, 2);
    console.log(typeof JSON.parse(jsonData));
    console.log(JSON.parse(jsonData));
  
    return jsonData.toString();
  };
  