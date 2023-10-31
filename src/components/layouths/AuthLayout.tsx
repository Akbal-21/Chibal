import Head from "next/head";
import { FC } from "react";

interface Props {
  titel: string;
  children: JSX.Element | JSX.Element[];
}

export const AuthLayouth: FC<Props> = ({ titel, children }) => {
  return (
    <>
      <Head>
        <title>{titel}</title>
      </Head>
      <main>
        <div className="grid justify-center items-center h-[calc(100vh - 200px)]">
          {children}
        </div>
      </main>
    </>
  );
};
