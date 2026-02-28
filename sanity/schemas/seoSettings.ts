import { defineType, defineField } from "sanity";

export default defineType({
  name: "seoSettings",
  title: "SEO Settings",
  type: "document",
  fields: [
    defineField({
      name: "defaultTitle",
      title: "Default Title",
      type: "string",
      initialValue: "Tapres | Next Generation Property Investment",
    }),
    defineField({
      name: "titleTemplate",
      title: "Title Template",
      type: "string",
      description: "Use %s as placeholder for page title. e.g. '%s | Tapres'",
      initialValue: "%s | Tapres",
    }),
    defineField({
      name: "defaultDescription",
      title: "Default Description",
      type: "text",
      initialValue:
        "Tapres offers investors a convenient way to be involved in property investment and achieve safe yet excellent returns.",
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default OG Image",
      type: "image",
    }),
  ],
});
