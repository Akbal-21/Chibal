import {
  AuthProvider,
  ExcerciseProvider,
  GroupProvider,
  InternationalProvider,
} from "@/context";
// import { ExcerciseProvider } from "@/context/teacher/excercise";
import "@/styles/globals.css";
import "@/styles/table-responsive.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

import { ABeeZee, Sen } from "next/font/google";

const abz = ABeeZee({ weight: "400", style: "normal", subsets: ["latin"] });

const letter = Sen({ subsets: ["latin"], weight: "400", style: "normal" });

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
          <InternationalProvider>
            <GroupProvider>
              <ExcerciseProvider>
                <main className={letter.className}>
                  <Component {...pageProps} />
                </main>
              </ExcerciseProvider>
            </GroupProvider>
          </InternationalProvider>
        </AuthProvider>
      </SWRConfig>
    </SessionProvider>
  );
}
