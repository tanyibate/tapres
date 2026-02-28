import { defineType, defineField } from "sanity";

export default defineType({
  name: "lookingToInvestSection",
  title: "Looking to Invest Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Looking to invest",
    }),
    defineField({
      name: "bodyText",
      title: "Body Text",
      type: "text",
    }),
  ],
});
