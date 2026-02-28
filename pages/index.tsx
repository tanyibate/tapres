import Landing from "@/components/sections/landing/Landing";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Suspense, lazy } from "react";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/queries";

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

interface HomeProps {
  data: any;
}

export default function Home({ data }: HomeProps) {
  const seo = data?.homePage?.seo;
  const pageTitle =
    seo?.title || "Tapres | Next Generation Property Investment";
  const pageDescription =
    seo?.description ||
    "Tapres offers investors a convenient way to be involved in property investment and achieve safe yet excellent returns. Explore HMOs, flats, and serviced accommodation across the UK.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/tapres-logo-transparent.png"
        />
      </Head>
      <main className="w-full pt-20">
        <Landing data={data?.homePage} />

        <Suspense fallback={<SectionFallback />}>
          <About data={data?.about} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Projects projects={data?.projects} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <TeamMembers data={data?.team} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Properties properties={data?.properties} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Invest data={data?.invest} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact data={data?.contact} />
        </Suspense>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.fetch(homePageQuery);
  return {
    props: { data },
    revalidate: 60,
  };
};
