import { useQuestionsStore } from "../../../store/student/question";
import { GetServerSideProps, NextPage } from "next";
import { getExerciseQuestions } from "@/api/getJson";
import { useState } from "react";
const LIMIT_QUESTIONS = 10;
interface Props {
  slug: string;
  json1: string;
}
export const Start:NextPage<Props> = ({slug,json1}) => {
  const fetchQuestions = useQuestionsStore((state) => state.setQuestions);

  const handleClick = async () => {
    console.log(json1)
    fetchQuestions(json1);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={handleClick}>¡Empezar el juego!</button>
    </div>
  );
};

export default Start;


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = "" } = query as { slug: string };
  console.log(slug);
  const results: string | undefined = await getExerciseQuestions(Number(slug));
  const json1 = results;
  console.log(json1);
  return {
    props: {
      json1
    },
  };
};
