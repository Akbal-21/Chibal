import { useQuestionsData } from "../../../hooks/student/useQuestionsData";
import { useQuestionsStore } from "../../../store/student/question";

export const Results = () => {
  const { correct, incorrect } = useQuestionsData();
  const { reset } = useQuestionsStore();

  return (
    <div style={{ marginTop: "16px" }}>
      <strong className=" text-center">
        <p>
          Tus respuestas se han enviado correctamente
          <br />
          <h1 className="text-6xl">😜</h1>
        </p>
        {/* <p>✅ {correct} correctas</p>
        <p>❌ {incorrect} incorrectas</p> */}
      </strong>
      <br />
      <div style={{ marginTop: "16px" }}>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={() => reset()}>¡Empezar de nuevo!</button>
      </div>
    </div>
  );
};
export default Results;

// <div className="grid grid-cols-1 items-center">
//   {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
//   <button className="btn btn-secondary">Regresar a inicio</button>
// </div>;
