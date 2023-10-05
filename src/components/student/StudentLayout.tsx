import Head from "next/head";
import { FC } from "react";
import { StudentNavbar } from ".";

interface Props {
    titel: string;
    children: JSX.Element | JSX.Element[];
}


export const StudentLayout: FC<Props> = ({ titel, children }) => {
return (
    <>
    <Head>
        <title>{titel}</title>
    </Head>
    <main>
        <StudentNavbar/>
        <div className="flex justify-center items-center h-[calc(100vh - 200px)]">
        {children}
        </div>
    </main>
    </>
);
};
