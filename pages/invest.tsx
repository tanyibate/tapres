import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import LookingToInvest from "@/components/looking-to-invest";
import InvestContact from "@/components/invest-contact";
import { client } from "@/sanity/lib/client";
import { investPageQuery } from "@/sanity/queries";

interface InvestProps {
  data: any;
  projectSlug: string | null;
}

export default function Invest({ data, projectSlug }: InvestProps) {
  const projects = data?.projects || [];
  const project = projectSlug
    ? projects.find((p: any) => p.slug === projectSlug)
    : null;

  const seo = data?.investForm?.seo;
  const pageTitle = seo?.title || "Invest | Tapres Property Investment";
  const pageDescription =
    seo?.description ||
    "Start your property investment journey with Tapres. Explore HMO and serviced accommodation opportunities across the UK with strong returns.";

  return (
    <main className="w-full pt-20 h-full flex flex-col">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>
      <LookingToInvest data={data?.lookingToInvest} />
      <InvestContact
        project={project ?? undefined}
        projects={projects}
        formData={data?.investForm}
      />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<InvestProps> = async ({
  query,
}) => {
  const data = await client.fetch(investPageQuery);
  const projectSlug = (query.projectSlug as string) || null;
  return {
    props: {
      data,
      projectSlug,
    },
  };
};
