import {
  AuthProvider,
  ExcerciseProvider,
  GroupProvider,
  InternationalProvider,
} from "@/context";
// import { ExcerciseProvider } from "@/context/teacher/excercise";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

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
                <Component {...pageProps} />
              </ExcerciseProvider>
            </GroupProvider>
          </InternationalProvider>
        </AuthProvider>
      </SWRConfig>
    </SessionProvider>
  );
}
