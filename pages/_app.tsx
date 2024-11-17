import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { lazy, Suspense } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  // Lazy load drift script
  const InjectDriftScript = lazy(() =>
    import("@/drift/drift").then((mod) => ({
      default: mod.InjectScriptElement,
    }))
  );

  const router = useRouter();
  // get current route
  const currentRoute = router.pathname;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <InjectDriftScript />
      </Suspense>
      <Navbar route={currentRoute} />
      <Component {...pageProps} />
    </>
  );
}
