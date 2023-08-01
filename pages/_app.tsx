import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { InjectScriptElement as InjectDriftScript } from "../drift/drift";
import { Suspense } from "react";
import Loading from "@/components/loading/Loading";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <InjectDriftScript />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
