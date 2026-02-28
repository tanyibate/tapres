import { defineType, defineField } from "sanity";

export default defineType({
  name: "servicedAccommodation",
  title: "Serviced Accommodation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
      initialValue: "Book Now",
    }),
    defineField({
      name: "bookingUrl",
      title: "Booking URL",
      type: "url",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "streetViewUrl",
      title: "Street View URL",
      type: "url",
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
