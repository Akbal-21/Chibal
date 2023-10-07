import { useQuestionsStore } from "../../../store/student/question";

import { type Question as QuestionType } from "./types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Footer } from "./Footer";
import { IndexPage } from "./canvasPage";
import { useState } from "react";

const getBackgroundColor = (info: QuestionType, index: string) => {
  const { userSelectedAnswer, correctAnswer } = info;
  // usuario no ha seleccionado nada todavía
  if (userSelectedAnswer == null) return "transparent";
  // si ya selecciono pero la solución es incorrecta
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return "transparent";
  // si esta es la solución correcta
  if (index === correctAnswer) return "green";
  // si esta es la selección del usuario pero no es correcta
  if (index === userSelectedAnswer) return "red";
  // si no es ninguna de las anteriores
  return "transparent";
};

const Question = ({
  info,
  predictValue,
  updatePredictValue, 
}: {
  info: QuestionType;
  predictValue: string;
  updatePredictValue: (newValue: string) => void;
}) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const createHandleClick = (answerChar: string) => () => {
    console.log(answerChar);
    selectAnswer(info.id, answerChar); // Pasa predictValue a la función
  };

  return (
    <div className="bg-white shadow-md p-4">
      <h1 className="text-xl font-bold">{info? info.question : ""}</h1>

      <h4>{info? info.code : ""}</h4>
      <IndexPage predictValue={predictValue} updatePredictValue={updatePredictValue} />
      
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={createHandleClick(predictValue)}>Respuesta desde Padre:</button>
      {predictValue}
    </div>
  );
};

export const Game = () => {
  const [predictValue, setPredictValue] = useState("");

  const updatePredictValue = (newValue: string) => {
    setPredictValue(newValue);
  };
  
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  );

  const questionInfo = questions[currentQuestion];

  return (
    <>
      <div className="flex flex-row space-x-2 items-center justify-center">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="p-2 hover:bg-gray-200"
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <FaArrowLeft />
        </button>
        {currentQuestion + 1} / {questions.length}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="p-2 hover:bg-gray-200"
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>
      <Question info={questionInfo} predictValue={predictValue} updatePredictValue={updatePredictValue} />
    {/* Pasa predictValue como prop */}
      <Footer />
    </>
  );
};
