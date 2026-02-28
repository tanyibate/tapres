import Landing from "@/components/sections/landing/Landing";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { Suspense, lazy } from "react";

// Lazy load components (defined outside component to avoid re-creation on every render)
const Properties = lazy(
  () => import("@/components/sections/properties/Properties")
);
const TeamMembers = lazy(
  () => import("@/components/sections/team-members/TeamMembers")
);
const About = lazy(() => import("@/components/sections/about/About"));
const Contact = lazy(() => import("@/components/sections/contact/Contact"));
const Invest = lazy(() => import("@/components/sections/invest/Invest"));
const Projects = lazy(
  () => import("@/components/sections/projects/Projects")
);

function SectionFallback() {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Tapres | Next Generation Property Investment</title>
        <meta
          name="description"
          content="Tapres offers investors a convenient way to be involved in property investment and achieve safe yet excellent returns. Explore HMOs, flats, and serviced accommodation across the UK."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Tapres | Next Generation Property Investment" />
        <meta
          property="og:description"
          content="Invest in high-quality UK property with Tapres. HMOs, flats, and serviced accommodation with strong returns."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/tapres-logo-transparent.png" />
      </Head>
      <main className="w-full pt-20">
        <Landing />

        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <TeamMembers />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Properties />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Invest />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
