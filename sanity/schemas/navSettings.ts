import { defineType, defineField } from "sanity";

export default defineType({
  name: "navSettings",
  title: "Navigation Settings",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Link URL",
              type: "string",
            }),
            defineField({
              name: "isButton",
              title: "Display as Button",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "isExternal",
              title: "External Link",
              type: "boolean",
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "href",
            },
          },
        },
      ],
    }),
  ],
});
