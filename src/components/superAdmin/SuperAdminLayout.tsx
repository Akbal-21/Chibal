import Head from "next/head";
import { FC } from "react";
import { SuperAdminNavbar } from "./SuperAdminNavbar";

interface Props {
  titel: string;
  children: JSX.Element | JSX.Element[];
}

export const SuperAdminLayout: FC<Props> = ({ titel, children }) => {
  return (
    <>
      <Head>
        <title>{titel}</title>
      </Head>
      <main>
        <SuperAdminNavbar />
        <div className="flex justify-center items-center h-[calc(100vh - 200px)] p-3">
          {children}
        </div>
      </main>
    </>
  );
};
