import { AuthProvider, ExcerciseProvider, GroupProvider } from "@/context";
// import { ExcerciseProvider } from "@/context/teacher/excercise";
import "@/styles/globals.css";
import "@/styles/table-responsive.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

import { ABeeZee } from "next/font/google";

const abz = ABeeZee({ weight: "400", style: "normal", subsets:["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <AuthProvider>
          <GroupProvider>
            <ExcerciseProvider>
              <main className={abz.className}>
                <Component {...pageProps} />
              </main>
            </ExcerciseProvider>
          </GroupProvider>
        </AuthProvider>
      </SWRConfig>
    </SessionProvider>
  );
}
