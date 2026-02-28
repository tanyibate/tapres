import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Send a message to Tapres",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
      initialValue:
        "Just submit your details and we'll be in touch shortly.",
    }),
    defineField({
      name: "emailAddress",
      title: "Email Address",
      type: "string",
      initialValue: "info@tapres.com",
    }),
    defineField({
      name: "submitButtonText",
      title: "Submit Button Text",
      type: "string",
      initialValue: "Send a Request",
    }),
  ],
});
