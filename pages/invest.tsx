import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import LookingToInvest from "@/components/looking-to-invest";
import InvestContact from "@/components/invest-contact";
import propertyList from "@/components/sections/projects/propertyList";

interface InvestProps {
  projectId: number | null;
}

export default function Invest({ projectId }: InvestProps) {
  const project = projectId
    ? propertyList.find((p: any) => p.id === projectId)
    : null;

  return (
    <main className="w-full pt-20 h-full flex flex-col">
      <Head>
        <title>Invest | Tapres Property Investment</title>
        <meta
          name="description"
          content="Start your property investment journey with Tapres. Explore HMO and serviced accommodation opportunities across the UK with strong returns."
        />
        <meta property="og:title" content="Invest | Tapres Property Investment" />
        <meta
          property="og:description"
          content="Start your property investment journey with Tapres. Explore HMO and serviced accommodation opportunities across the UK."
        />
      </Head>
      <LookingToInvest />
      <InvestContact project={project ?? undefined} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<InvestProps> = async ({
  query,
}) => {
  const projectId = query.projectId ? Number(query.projectId) : null;
  return {
    props: {
      projectId,
    },
  };
};
