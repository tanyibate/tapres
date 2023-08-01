import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { InjectScriptElement as InjectDriftScript } from "../drift/drift";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <InjectDriftScript />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
