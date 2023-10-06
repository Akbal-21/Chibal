import { create } from "zustand";
import { type Question } from "../../interface/student/Question";
import { persist, devtools } from "zustand/middleware";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerChar: string) => void;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
  reset: () => void;
}

const API_URL = "/";

export const useQuestionsStore = create<State>()(
  devtools(
    persist(
      (set, get) => {
        return {
          loading: false,
          questions: [],
          currentQuestion: 0,

          fetchQuestions: async (limit: number) => {
            const res = await fetch(`${API_URL}/data.json`);
            const json = await res.json();

            const questions = json
              .sort(() => Math.random() - 0.5)
              .slice(0, limit);
            set({ questions }, false, "FETCH_QUESTIONS");
          },

          selectAnswer: (questionId: number, answerChar: string) => {
            const { questions } = get();
            // usar el structuredClone para clonar el objeto
            const newQuestions = structuredClone(questions);
            // encontramos el índice de la pregunta
            const questionIndex = newQuestions.findIndex(
              (q) => q.id === questionId
            );
            // obtenemos la información de la pregunta
            const questionInfo = newQuestions[questionIndex];
            // averiguamos si el usuario ha seleccionado la respuesta correcta
            const isCorrectUserAnswer =
              questionInfo.correctAnswer === answerChar;

            if (isCorrectUserAnswer) {
              console.log("Bien");
            } else {
              console.log("mal");
            }

            // cambiar esta información en la copia de la pregunta
            newQuestions[questionIndex] = {
              ...questionInfo,
              isCorrectUserAnswer,
              userSelectedAnswer: answerChar,
            };
            // actualizamos el estado
            set({ questions: newQuestions }, false, "SELECT_ANSWER");
          },

          goNextQuestion: () => {
            const { currentQuestion, questions } = get();
            const nextQuestion = currentQuestion + 1;

            if (nextQuestion < questions.length) {
              set({ currentQuestion: nextQuestion }, false, "GO_NEXT_QUESTION");
            }
          },

          goPreviousQuestion: () => {
            const { currentQuestion } = get();
            const previousQuestion = currentQuestion - 1;

            if (previousQuestion >= 0) {
              set(
                { currentQuestion: previousQuestion },
                false,
                "GO_PREVIOUS_QUESTION"
              );
            }
          },

          reset: () => {
            set({ currentQuestion: 0, questions: [] }, false, "RESET");
          },
        };
      },
      {
        name: "questions",
      }
    )
  )
);
