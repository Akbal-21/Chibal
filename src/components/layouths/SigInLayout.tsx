import Head from "next/head";
import { FC } from "react";
import { Navbar } from "..";

interface Props {
  titel: string;
  children: JSX.Element | JSX.Element[];
}

export const SigInLayout: FC<Props> = ({ titel, children }) => {
  return (
    <>
      <Head>
        <title>{titel}</title>
      </Head>
      <main>
        <Navbar />
        <div className="flex justify-center items-center h-[calc(100vh - 200px)]">
          {children}
        </div>
      </main>
    </>
  );
};
