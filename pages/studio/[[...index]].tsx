import { NextStudio } from "next-sanity/studio";
import { NextStudioHead } from "next-sanity/studio/head";
import config from "@/sanity.config";
import Head from "next/head";

export default function StudioPage() {
  return (
    <>
      <Head>
        <NextStudioHead />
        <title>Tapres CMS Studio</title>
        <meta name="robots" content="noindex" />
      </Head>
      <NextStudio config={config} />
    </>
  );
}
