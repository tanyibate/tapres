import { defineType, defineField } from "sanity";

export default defineType({
  name: "investSection",
  title: "Invest Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Invest",
    }),
    defineField({
      name: "paragraph1",
      title: "Paragraph 1",
      type: "text",
    }),
    defineField({
      name: "paragraph2",
      title: "Paragraph 2",
      type: "text",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Invest Now",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Link",
      type: "string",
      initialValue: "/invest",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
