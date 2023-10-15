import { getExerciseQuestions } from "@/api/getJson";
import { type IQuestion } from "@/interface/student/Question";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
interface State {
  setQuestions: (parse: string) => void;
  questions: IQuestion[];
  currentQuestion: number;
}

interface ActionsState {
  fetchQuestions: (id: string) => Promise<void>;
  selectAnswer: (questionId: number, answerChar: string) => void;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
  reset: () => void;
}

export const useQuestionsStore = create<State & ActionsState>()(
  devtools(
    persist(
      (set, get) => {
        return {
          loading: false,
          questions: [],
          currentQuestion: 0,

          fetchQuestions: async (id: string) => {
            const json = await getExerciseQuestions(Number(id));
            const parse = JSON.parse(json);
            if (parse) set({ questions: parse }, false, "FETCH_QUESTIONS");
          },
          setQuestions: (parse: string) => {
            console.log(parse);
            const formated = JSON.parse(parse);

            console.log(formated);
            set({ questions: formated }, false, "SET_QUESTIONS");
          },

          selectAnswer: (questionId: number, answerChar: string) => {
            const { questions } = get();
            // usar el structuredClone para clonar el objeto
            const newQuestions = structuredClone(questions);
            // encontramos el índice de la pregunta
            const questionIndex = newQuestions.findIndex(
              (q) => q.id === questionId,
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
                "GO_PREVIOUS_QUESTION",
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
      },
    ),
  ),
);
