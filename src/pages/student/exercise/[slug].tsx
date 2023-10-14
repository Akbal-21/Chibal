import { getExerciseQuestions } from "@/api/getJson";
import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";

import { StudentLayout } from "@/components";
import { Question, Results, Start } from "@/components/student";
import { useQuestionsData } from "@/hooks/student/useQuestionsData";
import { useQuestionsStore } from "@/store/student/question";

// El componente App se exporta como valor por defecto, por lo que no se necesita "import { App }"
interface Props {
  results: string;
  slug: string;
}
const solve: NextPage<Props> = ({ results, slug }) => {
  const questions = useQuestionsStore((state) => state.questions);
  const { unanswered } = useQuestionsData();
  const [componentToRender, setComponentToRender] = useState<ReactNode | null>(
    null,
  );

  useEffect(() => {
    questions.length === 0
      ? setComponentToRender(<Start slug={slug} json1={results} />)
      : questions.length > 0 && unanswered > 0
      ? setComponentToRender(<Question />)
      : questions.length > 0 &&
        unanswered === 0 &&
        setTimeout(() => setComponentToRender(<Results />), 3000);
  }, [questions, unanswered, slug, results]);

  return (
    <StudentLayout titel={"Resuelve el ejercicio"}>
      <div>
        <div className="mx-auto max-w-sm">
          {/* Contenido del componente renderizado condicionalmente */}
          {componentToRender}
        </div>
      </div>
    </StudentLayout>
  );
};

export default solve;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = "" } = query as { slug: string };
  const results: string = await getExerciseQuestions(Number(slug));
  console.log(slug);
  console.log(results);

  if (Number(slug)) {
    return {
      props: {
        results,
        slug,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/student",
        permanent: false,
      },
    };
  }
};
