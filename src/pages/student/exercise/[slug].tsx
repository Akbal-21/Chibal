import React, { useEffect, useState } from "react";
import { getExerciseQuestions } from "@/api/getJson";
import { GetServerSideProps, NextPage } from "next";

import App from "./App";

// El componente App se exporta como valor por defecto, por lo que no se necesita "import { App }"
interface Props {
  results: string;
  slug: string;
}
const solve: NextPage<Props> = ({ results, slug }) => {
  console.log(JSON.parse(results));
  console.log(typeof results);

  return (
    <div>
      {results}

      <React.StrictMode>
        <App slug={slug} results={results} />
      </React.StrictMode>
    </div>
  );
};

export default solve;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = "" } = query as { slug: string };
  const results: string = await getExerciseQuestions(Number(slug));
  console.log(slug);
  console.log(results);

  if (Number(slug)){
    return {
      props: {
        results,
        slug,
      },
    };
  }
  else {
    return {
      redirect: {
        destination: "/student",
        permanent: false,
      },
    };
  }
};
