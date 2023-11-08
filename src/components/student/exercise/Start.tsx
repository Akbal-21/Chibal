import { InternationalContext } from "@/context";
import { modelUrls } from "@/functions";
import { en, es } from "@/messages";
import { useQuestionsStore } from "@/store/student/question";
import { loadLayersModel } from "@tensorflow/tfjs";
import { FC, useContext } from "react";
//* Precarga los modelos (mejora tiempo de carga)
loadLayersModel(modelUrls[0]);
loadLayersModel(modelUrls[1]);
interface Props {
  slug: string;
  json1: string;
}
export const Start: FC<Props> = ({ slug, json1 }) => {
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;
  const fetchQuestions = useQuestionsStore((state) => state.setQuestions);

  const handleClick = async () => {
    console.log(json1);
    fetchQuestions(json1);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={handleClick} className="btn btn-primary">
        {ms.student.draw.starGame}
      </button>
    </div>
  );
};

export default Start;
