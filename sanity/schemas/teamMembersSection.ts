import { defineType, defineField } from "sanity";

export default defineType({
  name: "teamMembersSection",
  title: "Team Members",
  type: "document",
  fields: [
    defineField({
      name: "members",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "role",
              title: "Role",
              type: "string",
            }),
            defineField({
              name: "bio",
              title: "Bio",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "headshot",
              title: "Headshot",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "backgroundImageDesktop",
              title: "Background Image (Desktop)",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "backgroundImageMobile",
              title: "Background Image (Mobile)",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "role",
              media: "headshot",
            },
          },
        },
      ],
    }),
  ],
});
