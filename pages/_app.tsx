import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { lazy, Suspense } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const InjectDriftScript = lazy(() =>
    import("@/drift/drift").then((mod) => ({
      default: mod.InjectScriptElement,
    }))
  );

  const router = useRouter();
  const currentRoute = router.pathname;

  // Thread navData from any page's props to Navbar
  const navData = pageProps?.data?.nav || pageProps?.navData || null;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <InjectDriftScript />
      </Suspense>
      <Navbar route={currentRoute} navData={navData} />
      <Component {...pageProps} />
    </>
  );
}
