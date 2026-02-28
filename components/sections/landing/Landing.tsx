import Loading from "@/components/loading/Loading";
import React, { Suspense, lazy } from "react";

const LandingDesktop = lazy(() => import("./LandingDesktop"));
const LandingMobile = lazy(() => import("./LandingMobile"));

interface LandingProps {
  data?: any;
}

export default function Landing({ data }: LandingProps) {
  return (
    <section id="landing-section" className="relative">
      <Suspense fallback={<Loading />}>
        <LandingDesktop data={data} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LandingMobile data={data} />
      </Suspense>
    </section>
  );
}
