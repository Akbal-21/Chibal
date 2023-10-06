import React, { useEffect, useState } from "react";
import { getExerciseQuestions } from "@/api/getJson";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  results: string;
}
const solve: NextPage<Props> = ({ results }) => {
  console.log(JSON.parse(results));

  return <div>{results}</div>;
};

export default solve;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = "" } = query as { slug: string };
  const results: string | undefined = await getExerciseQuestions(Number(slug));

  return {
    props: {
      results,
    },
  };
};
