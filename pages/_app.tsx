import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { lazy, Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // Lazy load drift script
  const InjectDriftScript = lazy(() =>
    import("@/drift/drift").then((mod) => ({
      default: mod.InjectScriptElement,
    }))
  );

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <InjectDriftScript />
      </Suspense>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
