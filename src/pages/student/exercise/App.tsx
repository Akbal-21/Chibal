import React, { useEffect, useState, ReactNode } from 'react';
import { Start } from './Start';
import { useQuestionsStore } from '../../../store/student/question';
import { useQuestionsData } from '../../../hooks/student/useQuestionsData';
import { Game } from "./Game";
import { Results } from './Results';
interface Props {
  slug: string;
  results: string;
}
function App({ slug ,results}:Props) {
  const questions = useQuestionsStore((state) => state.questions);
  const { unanswered } = useQuestionsData();
  const [componentToRender, setComponentToRender] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (questions.length === 0) {
      console.log(results)
      console.log(slug)
      setComponentToRender(<Start slug={slug} json1={results} />);
    } else if (questions.length > 0 && unanswered > 0) {
      setComponentToRender(<Game />);
    } else if (questions.length > 0 && unanswered === 0) {
      setComponentToRender(<Results />);
    }
  }, [questions, unanswered,slug,results]);

  return (
    <main>
      <div className="mx-auto max-w-sm">
        <div className="flex flex-row space-x-2 items-center justify-center">
          <h1 className="text-xl font-bold">JavaScript Quiz</h1>
        </div>

        <strong style={{ fontSize: '18px', marginBottom: '48px', display: 'block' }}>
          ¿Quieres aprender React ⚛️? <a style={{ color: 'yellow' }} href='https://github.com/midudev/aprendiendo-react'>¡Haz click aquí!</a>
        </strong>

        {/* Contenido del componente renderizado condicionalmente */}
        {componentToRender}

        <strong style={{ display: 'block', fontSize: '14px', marginTop: '48px' }}>Desarrollado con TypeScript + Zustand - <a style={{ color: 'yellow' }} href='https://github.com/midudev/aprendiendo-react/tree/master/projects/13-javascript-quiz-con-zustand'>Ir al código</a></strong>
      </div>
    </main>
  );
}

export default App;
