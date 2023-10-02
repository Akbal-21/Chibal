import Head from "next/head";
import { FC } from "react";

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
        <h1>Cuenta Alumno</h1>
        <div className="flex justify-center items-center h-[calc(100vh - 200px)]">
        {children}
        </div>
    </main>
    </>
);
};
