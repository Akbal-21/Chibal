export interface IQuestion {
  id: number;
  question: string;
  code: string;
  answers: string[];
  correctAnswer: string;
  userSelectedAnswer?: string;
  isCorrectUserAnswer?: boolean;
}
