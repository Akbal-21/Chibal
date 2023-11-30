import { InternationalContext } from "@/context";
import { en, es } from "@/messages";
import { useContext } from "react";
import { useQuestionsData } from "../../../hooks/student/useQuestionsData";
import { useQuestionsStore } from "../../../store/student/question";

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData();
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;
  const reset = useQuestionsStore((state) => state.reset);

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} ${ms.student.draw.correct} - ❌ ${incorrect} ${ms.student.draw.incorrect} - ❓ ${unanswered} ${ms.student.draw.notAnswer}`}</strong>
    </footer>
  );
};
export default Footer;
