import { chibalApi } from "@/api";
import { AuthContext } from "@/context";
import { canvasToNeg, modelUrls, predictionValue } from "@/functions";
import { IQuestion } from "@/interface";
import { useQuestionsStore } from "@/store/student/question";
import { LayersModel, Rank, Tensor, loadLayersModel } from "@tensorflow/tfjs";
import { useContext, useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Footer } from ".";

export const Question = () => {
  const { user } = useContext(AuthContext);
  const {
    questions,
    currentQuestion,
    goNextQuestion,
    goPreviousQuestion,
    selectAnswer,
  } = useQuestionsStore();
  const info: IQuestion = questions[currentQuestion];
  // console.log(info.code);
  let modelIndex: 0 | 1 = 0;

  const [predictValue, setPredictValue] = useState("");

  // !Refactorizar desde aca
  const [model, setModel] = useState<LayersModel>();
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

      const prob = predictCharacter(predictionsArray);
      return prob;
    }
  };

  // Función para procesar la predicción
  const predictCharacter = async (
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    predictionsArray: any,
  ): Promise<{
    maxProb: number;
    newPredict3: string;
  }> => {
    // Encontrar la clase con la probabilidad más alta
    let maxProb = -1; //Puntaje de acierto
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

    console.log(predictValue, newPredict3); // Imprimir en la consola
    const predict = {
      maxProb,
      newPredict3,
    };
    selectAnswer(info.id, newPredict3);

    return predict;
  };

  const handleSaveCloudinary = async () => {
    const dataUrl = canvasRef.current
      ?.getTrimmedCanvas()
      .toDataURL("image/png");

    if (!dataUrl) {
      return;
    }

    const blob = await (await fetch(dataUrl)).blob();
    const formData = new FormData();
    formData.append("file", blob);

    const { data } = await chibalApi.post<{ message: string }>(
      "/student/uploadImage",
      formData,
    );
    return data.message;
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  const handleNextQuestion = async () => {
    const url = await handleSaveCloudinary();
    const prob = await predict();
    const { id } = questions[currentQuestion];
    const id_User = user?.Usuarios_id;
    console.log({ url, prob, id });
    await chibalApi({
      method: "POST",
      url: "/student/doExerciseByLine",
      data: {
        url,
        prob,
        id,
        id_User,
      },
    });

    goNextQuestion();
    handleClear();
  };

  return (
    <div>
      <div className="flex flex-row space-x-2 items-center justify-center">
        <div className="text-3xl font-bold">
          {currentQuestion + 1} / {questions.length}
        </div>
      </div>
      <div className="bg-white shadow-md p-4 rounded-md">
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
                width: 300,
                height: 250,
                style: { border: "2px solid #000" },
                title: "Dibuja",
              }}
            />
          </div>
          <div style={{ margin: "5px" }}>
            {currentQuestion >= questions.length - 1 ? (
              <div className="grid grid-cols-2">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  onClick={handleClear}
                  className="btn btn-primary font-bold w-full"
                >
                  Limpiar
                </button>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  className="btn btn-primary font-bold"
                  onClick={handleNextQuestion}
                >
                  Finalizar
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  onClick={handleClear}
                  className="btn btn-primary font-bold"
                >
                  Limpiar
                </button>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  className="btn btn-primary font-bold"
                  onClick={handleNextQuestion}
                >
                  Siguiente
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
