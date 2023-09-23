import { useLoginUser } from "@/store/auth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  const { checkToken } = useLoginUser();
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {/* <AuthProvider> */}
      <Component {...pageProps} />
      {/* </AuthProvider> */}
    </SWRConfig>
  );
}
