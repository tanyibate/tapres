import { defineType, defineField } from "sanity";

export default defineType({
  name: "investFormSection",
  title: "Invest Form Section",
  type: "document",
  fields: [
    defineField({
      name: "formHeading",
      title: "Form Heading",
      type: "string",
      initialValue: "Get in Touch",
    }),
    defineField({
      name: "formSubtext",
      title: "Form Subtext",
      type: "text",
      initialValue:
        "Fill out the form below to start your investment journey with us. We'll get back to you within 24 hours.",
    }),
    defineField({
      name: "disclaimerTitle",
      title: "Disclaimer Title",
      type: "string",
      initialValue: "Investment Disclaimer",
    }),
    defineField({
      name: "disclaimerContent",
      title: "Disclaimer Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "disclaimerCheckboxLabel",
      title: "Disclaimer Checkbox Label",
      type: "text",
      initialValue:
        "I have read and understood the investment disclaimer. I acknowledge that property investment involves risks and I accept these risks.",
    }),
    defineField({
      name: "submitButtonText",
      title: "Submit Button Text",
      type: "string",
      initialValue: "Submit Investment Interest",
    }),
    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "text",
      initialValue:
        "Your investment interest has been submitted successfully. We'll be in touch within 24 hours.",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Page Title", type: "string" }),
        defineField({
          name: "description",
          title: "Meta Description",
          type: "text",
        }),
      ],
    }),
  ],
});
