import { useQuestionsStore } from "../../../store/student/question";

const LIMIT_QUESTIONS = 10;

export const Start = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={handleClick}>¡Empezar el juego!</button>
    </div>
  );
};

export default Start;
