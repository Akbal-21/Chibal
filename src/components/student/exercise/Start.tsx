import { useQuestionsStore } from "@/store/student/question";
import { FC } from "react";
import { modelUrls } from "@/functions";
import { loadLayersModel } from "@tensorflow/tfjs";
//* Precarga los modelos (mejora tiempo de carga)
loadLayersModel(modelUrls[0]);
loadLayersModel(modelUrls[1]);
interface Props {
  slug: string;
  json1: string;
}
export const Start: FC<Props> = ({ slug, json1 }) => {
  const fetchQuestions = useQuestionsStore((state) => state.setQuestions);

  const handleClick = async () => {
    console.log(json1);
    fetchQuestions(json1);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={handleClick} className="btn btn-primary">
        ¡Empezar a responder!
      </button>
    </div>
  );
};

export default Start;
