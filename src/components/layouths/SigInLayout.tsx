import Head from "next/head";
import { FC } from "react";
import { Navbar } from "..";

interface Props {
  titel: string;
  children: JSX.Element | JSX.Element[];
  onReload?: () => void;
}

export const SigInLayout: FC<Props> = ({ titel, children, onReload = () => {} }) => {
  return (
    <>
      <Head>
        <title>{titel}</title>
      </Head>
      <main>
        <Navbar onReload={onReload}/>
        <div className="flex justify-center items-center h-[calc(100vh - 200px)]">
          {children}
        </div>
      </main>
    </>
  );
};
