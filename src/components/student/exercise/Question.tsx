import { canvasToNeg, modelUrls, predictionValue } from "@/functions";
import { IQuestion } from "@/interface";
import { useQuestionsStore } from "@/store/student/question";
import { LayersModel, Rank, Tensor, loadLayersModel } from "@tensorflow/tfjs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import SignatureCanvas from "react-signature-canvas";
import { Footer } from ".";

export const Question = () => {
  const { questions, currentQuestion, goNextQuestion, goPreviousQuestion } =
    useQuestionsStore();
  const info: IQuestion = questions[currentQuestion];
  // console.log(info.code);
  let modelIndex: 0 | 1 = 0;

  useQuestionsStore();
  const [predictValue, setPredictValue] = useState("");

  const updatePredictValue = (newValue: string) => {
    setPredictValue(newValue);
  };
  const { selectAnswer } = useQuestionsStore();

  // !Refactorizar desde aca
  const [model, setModel] = useState<LayersModel>();
  const [imageUrl, setImageUrl] = useState("");
  const canvasRef = useRef<SignatureCanvas>(null);
  // Se carga el modelo
  useEffect(() => {
    loadModel(info);
  }, [info]);

  // Función para cargar el modelo según el modo actual
  const loadModel = async (info: IQuestion) => {
    const typeExercise = info.code;
    if (typeExercise === "Letra") {
      modelIndex = 1;
    } else if (typeExercise === "Número") {
      modelIndex = 0;
    }
    const modelCharge = await loadLayersModel(modelUrls[modelIndex]);
    setModel(modelCharge);
  };

  // Función para predecir
  const predict = async () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current?.getCanvas() as HTMLCanvasElement;

      const tensorNeg = canvasToNeg(canvas);

      const predict: Tensor<Rank> | Tensor<Rank>[] | undefined =
        model?.predict(tensorNeg);

      if (!predict || !(predict instanceof Tensor)) {
        console.log("No hay parámetros");
        return;
      }

      const predictionsArray = predict.arraySync();

      predictCharacter(predictionsArray);
    }
  };

  // Función para procesar la predicción
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const predictCharacter = (predictionsArray: any): void => {
    // Encontrar la clase con la probabilidad más alta
    let maxProb = -1;
    let maxIndex = -1;
    for (let i = 0; i < predictionsArray[0].length; i++) {
      if (predictionsArray[0][i] > maxProb) {
        maxProb = predictionsArray[0][i];
        maxIndex = i;
      }
    }
    const newPredict3 = predictionValue(predictionsArray, maxIndex);
    // setPredict3(newPredict3); // Actualizar el estado
    setPredictValue(newPredict3);

    console.log(newPredict3); // Imprimir en la consola

    updatePredictValue(newPredict3);
    selectAnswer(info.id, newPredict3);
  };

  // * Función para cambiar entre números y letras
  // const toggleMode = () => {
  // modelIndex = !modelIndex
  //   setIsDigitMode(!isDigitMode);
  // };

  const handleSave = () => {
    const dataUrl = canvasRef.current?.getTrimmedCanvas().toDataURL();
    setImageUrl(dataUrl || "");
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  const handleNextQuestion = () => {
    goNextQuestion();
    // loadModel(info.code);
    canvasRef.current?.clear();
  };

  return (
    <div>
      <div className="flex flex-row space-x-2 items-center justify-center">
        {/* <button
          className="p-2 hover:bg-gray-200"
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <FaArrowLeft />
        </button> */}
        {currentQuestion + 1} / {questions.length}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="p-2 hover:bg-gray-200"
          onClick={handleNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="bg-white shadow-md p-4">
        <h1 className="text-xl font-bold">{info ? info.question : ""}</h1>

        <h4>{info ? info.code : ""}</h4>

        <div className="grid place-items-center">
          <div className="max-w-screen-lg place-items-center">
            <SignatureCanvas
              ref={canvasRef}
              backgroundColor="white"
              dotSize={8}
              minWidth={8}
              maxWidth={8}
              canvasProps={{
                width: 200,
                height: 200,
                style: { border: "2px solid #000" },
                title: "Dibuja",
              }}
            />
          </div>
          <div style={{ margin: "5px" }}>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Guardar
            </button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={predict}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Predecir
            </button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={handleClear}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Limpiar
            </button>
            {/* //*
             <button
              onClick={toggleMode}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Cambiar a {isDigitMode ? "Números" : "Letras"}
            </button> */}
          </div>

          <div>
            <p>Predicción: {predictValue}</p>
            {imageUrl && (
              <Image src={imageUrl} alt="signature" width={50} height={50} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
