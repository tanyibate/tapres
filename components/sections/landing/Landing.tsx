import Loading from "@/components/loading/Loading";
import React, { Suspense, lazy } from "react";

export default function Landing() {
  // Lazy load the components
  const LandingDesktop = lazy(() => import("./LandingDesktop"));
  const LandingMobile = lazy(() => import("./LandingMobile"));
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <LandingDesktop />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LandingMobile />
      </Suspense>
    </section>
  );
}
