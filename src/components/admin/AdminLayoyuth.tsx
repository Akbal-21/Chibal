import Head from "next/head";
import { FC } from "react";
import { AdminNavbar } from ".";

interface Props {
  titel: string;
  children: JSX.Element | JSX.Element[];
}

export const AdminLayouth: FC<Props> = ({ titel, children }) => {
  return (
    <>
      <Head>
        <title>{titel}</title>
      </Head>
      <main>
        <AdminNavbar />
        <div className="flex justify-center items-center h-[calc(100vh - 200px)] p-3">
          {children}
        </div>
      </main>
    </>
  );
};
