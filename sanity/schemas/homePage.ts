import { defineType, defineField } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Tapres",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Next Generation Homes",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "View our Projects",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Button Link",
      type: "string",
      initialValue: "#projects-section",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Page Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Meta Description",
          type: "text",
        }),
        defineField({
          name: "ogImage",
          title: "OG Image",
          type: "image",
        }),
      ],
    }),
  ],
});
