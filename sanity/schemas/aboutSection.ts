import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "About Tapres",
    }),
    defineField({
      name: "bodyText",
      title: "Body Text",
      type: "text",
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string", initialValue: "Our Mission" }),
        defineField({ name: "text", title: "Text", type: "text" }),
      ],
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string", initialValue: "Our Values" }),
        defineField({ name: "text", title: "Text", type: "text" }),
      ],
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string", initialValue: "Our Vision" }),
        defineField({ name: "text", title: "Text", type: "text" }),
      ],
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube Embed URL",
      type: "url",
    }),
  ],
});
