import { useQuestionsStore } from "../../../store/student/question";
import { useQuestionsData } from "../../../hooks/student/useQuestionsData";

export const Results = () => {
  const { correct, incorrect } = useQuestionsData();
  const reset = useQuestionsStore((state) => state.reset);

  return (
    <div style={{ marginTop: "16px" }}>
      <h1>¡Tus resultados</h1>

      <strong>
        <p>✅ {correct} correctas</p>
        <p>❌ {incorrect} incorrectas</p>
      </strong>

      <div style={{ marginTop: "16px" }}>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={() => reset()}>¡Empezar de nuevo!</button>
      </div>
    </div>
  );
};
export default Results;