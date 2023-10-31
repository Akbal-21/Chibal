import { browser, image } from "@tensorflow/tfjs";
import { caracteres } from ".";

export const predictionValue = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  predictionsArray: any,
  maxIndex: number,
): string => {
  // let newPredict3 = "";
  if (predictionsArray[0].length === 10) {
    return caracteres.digitos[maxIndex];
  } else if (predictionsArray[0].length === 54) {
    if (maxIndex >= 0 && maxIndex < caracteres.mayusculas.length) {
      return caracteres.mayusculas[maxIndex];
    } else if (
      maxIndex >= caracteres.mayusculas.length &&
      maxIndex < caracteres.mayusculas.length + caracteres.minusculas.length
    ) {
      return caracteres.minusculas[maxIndex - caracteres.mayusculas.length];
    }
  }
  return "Carácter fuera de rango";
};

export const canvasToNeg = (canvas: HTMLCanvasElement) => {
  const img = browser.fromPixels(canvas, 1);
  const imgResized = image.resizeBilinear(img, [28, 28]);
  const tensor = imgResized.expandDims(0).toFloat().div(255);
  return tensor.mul(-1).add(1);
};
