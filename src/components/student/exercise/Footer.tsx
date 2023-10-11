import { useQuestionsStore } from "../../../store/student/question";
import { useQuestionsData } from "../../../hooks/student/useQuestionsData";

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData();
  const reset = useQuestionsStore((state) => state.reset);

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
      <div style={{ marginTop: "16px" }}>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={() => reset()}>Resetear juego</button>
      </div>
    </footer>
  );
};
export default Footer;