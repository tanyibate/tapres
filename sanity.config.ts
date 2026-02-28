import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemas } from "./sanity/schemas";
import {
  singletonStructure,
  singletonActions,
  singletonNewDocument,
} from "./sanity/lib/singletonStructure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "tapres-studio",
  title: "Tapres CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({ structure: singletonStructure }),
  ],
  schema: {
    types: schemas,
    templates: singletonNewDocument,
  },
  document: {
    actions: singletonActions,
  },
});
