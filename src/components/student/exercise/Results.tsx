import { chibalApi } from "@/api";
import { AuthContext, InternationalContext } from "@/context";
import { en, es } from "@/messages";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useQuestionsStore } from "../../../store/student/question";

export const Results = () => {
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;
  const { reset } = useQuestionsStore();

  const { user } = useContext(AuthContext);

  const { questions, currentQuestion } = useQuestionsStore();

  const { id } = questions[currentQuestion];
  const userID = user?.Usuarios_id;
  console.log(id, userID);
  const route = useRouter();
  const handleFinish = async () => {
    const dataResult = await chibalApi({
      method: "PUT",
      url: "/student/doExerciseByLine",
      data: {
        id,
        userID,
      },
    });
    console.log(dataResult);

    route.push("/student");
  };

  return (
    <div className="mt-4">
      <strong className="text-center">
        <p>
          {ms.student.draw.sendAnswer}
          <br />
          <h1 className="text-6xl">😜</h1>
        </p>
      </strong>
      <br />
      <div className="mt-4 items-center">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button className="btn btn-primary" onClick={() => handleFinish()}>
          {ms.student.draw.back_Menu}
        </button>
      </div>
    </div>
  );
};
export default Results;

// <div className="grid grid-cols-1 items-center">
//   {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
//   <button className="btn btn-secondary">Regresar a inicio</button>
// </div>;
