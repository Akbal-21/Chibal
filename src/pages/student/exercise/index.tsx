import {
    LayersModel,
    Rank,
    Tensor,
    browser,
    image,
    loadLayersModel,
  } from "@tensorflow/tfjs";
  import Image from "next/image";
  import { useEffect, useRef, useState } from "react";
  import SignatureCanvas from "react-signature-canvas";
  
  const modelUrls = [
    "https://raw.githubusercontent.com/francisco-renteria/francisco-renteria.github.io/main/digitos/model.json",
    "https://raw.githubusercontent.com/francisco-renteria/francisco-renteria.github.io/main/letras/model.json",
  ];
  
  // Define un objeto para mapear los índices a caracteres
  const caracteres = {
    mayusculas: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
    minusculas: "abcdefghijklmnñopqrstuvwxyz",
    digitos: "0123456789",
  };
  
  const indexPage = () => {
    const [model, setModel] = useState<LayersModel>();
    const [imageUrl, setImageUrl] = useState("");
    const [predict3, setPredict3] = useState(""); // Estado para la predicción
    const [isDigitMode, setIsDigitMode] = useState(true); // Estado para el modo de predicción
    const canvasRef = useRef<SignatureCanvas>(null);
  
    // Se carga el modelo
    useEffect(() => {
      loadModel();
    }, [isDigitMode]);
  
    // Función para cargar el modelo según el modo actual
    const loadModel = async () => {
      const modelIndex = isDigitMode ? 1 : 0;
  
      const modelCharge = await loadLayersModel(modelUrls[modelIndex]);
      setModel(modelCharge);
    };
  
    // Función para predecir
    const predict = async () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current?.getCanvas() as HTMLCanvasElement;
  
        const img = browser.fromPixels(canvas, 1);
        const imgResized = image.resizeBilinear(img, [28, 28]);
        const tensor = imgResized.expandDims(0).toFloat().div(255);
        const tensorNeg = tensor.mul(-1).add(1);
  
        const predict: Tensor<Rank> | Tensor<Rank>[] | undefined =
          model?.predict(tensorNeg);
  
        if (!predict || !(predict instanceof Tensor)) {
          console.log("No hay parámetros");
          return;
        }
  
        const predictionsArray = predict.arraySync();
        console.log(predictionsArray);
  
        predictCharacter(predictionsArray);
      }
    };
  
    // Función para procesar la predicción
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const predictCharacter = (predictionsArray: any) => {
      // Encontrar la clase con la probabilidad más alta
      let maxProb = -1;
      let maxIndex = -1;
      for (let i = 0; i < predictionsArray[0].length; i++) {
        if (predictionsArray[0][i] > maxProb) {
          maxProb = predictionsArray[0][i];
          maxIndex = i;
        }
      }
      let newPredict3 = ""; // Crear una nueva variable para almacenar el valor
      console.log(predictionsArray[0].length);
      if (predictionsArray[0].length === 10) {
        newPredict3 = caracteres.digitos[maxIndex];
      } else if (predictionsArray[0].length === 54) {
        if (maxIndex >= 0 && maxIndex < caracteres.mayusculas.length) {
          newPredict3 = caracteres.mayusculas[maxIndex];
        } else if (
          maxIndex >= caracteres.mayusculas.length &&
          maxIndex < caracteres.mayusculas.length + caracteres.minusculas.length
        ) {
          newPredict3 =
            caracteres.minusculas[maxIndex - caracteres.mayusculas.length];
        }
      } else {
        newPredict3 = "Carácter fuera de rango";
      }
  
      setPredict3(newPredict3); // Actualizar el estado
  
      console.log(newPredict3); // Imprimir en la consola
      // saveData(newPredict3); // Guardar en el servidor
    };
  
    // Función para cambiar entre números y letras
    const toggleMode = () => {
      setIsDigitMode(!isDigitMode);
    };
  
    const handleSave = () => {
      const dataUrl = canvasRef.current?.getTrimmedCanvas().toDataURL();
      setImageUrl(dataUrl || "");
    };
  
    const handleClear = () => {
      canvasRef.current?.clear();
    };
  
    return (
      <div className="grid h-screen place-items-center">
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
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            onClick={toggleMode}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Cambiar a {isDigitMode ? "Números" : "Letras"}
          </button>
        </div>
  
        <div>
          <p>Predicción: {predict3}</p>
          {imageUrl && (
            <Image src={imageUrl} alt="signature" width={50} height={50} />
          )}
        </div>
      </div>
    );
  };
  
  export default indexPage;
  