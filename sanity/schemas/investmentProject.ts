import { defineType, defineField } from "sanity";

export default defineType({
  name: "investmentProject",
  title: "Investment Project",
  type: "document",
  fields: [
    defineField({
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    }),
    defineField({
      name: "projectSubtitle",
      title: "Project Subtitle",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Card Title",
      type: "string",
      description: "Short title for the property card",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      initialValue: 0,
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
      name: "floorplans",
      title: "Floor Plans",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "streetViewUrl",
      title: "Street View URL",
      type: "url",
    }),
    defineField({
      name: "projectDetails",
      title: "Project Details",
      type: "object",
      fields: [
        defineField({ name: "status", title: "Status", type: "string" }),
        defineField({ name: "location", title: "Location", type: "string" }),
        defineField({
          name: "propertyType",
          title: "Property Type",
          type: "string",
        }),
        defineField({ name: "tenure", title: "Tenure", type: "string" }),
        defineField({
          name: "currentBedrooms",
          title: "Current Bedrooms",
          type: "number",
        }),
        defineField({
          name: "proposedBedrooms",
          title: "Proposed Bedrooms",
          type: "number",
        }),
        defineField({
          name: "currentBathrooms",
          title: "Current Bathrooms",
          type: "number",
        }),
        defineField({
          name: "proposedBathrooms",
          title: "Proposed Bathrooms",
          type: "number",
        }),
        defineField({
          name: "occupancyStatus",
          title: "Occupancy Status",
          type: "string",
        }),
        defineField({ name: "strategy", title: "Strategy", type: "string" }),
      ],
    }),
    defineField({
      name: "dealBreakdown",
      title: "Deal Breakdown",
      type: "object",
      fields: [
        defineField({
          name: "purchasePrice",
          title: "Purchase Price",
          type: "number",
        }),
        defineField({
          name: "gdvEstimated",
          title: "GDV Estimated",
          type: "number",
        }),
        defineField({
          name: "incomeProjection",
          title: "Income Projection",
          type: "object",
          fields: [
            defineField({
              name: "roomRates",
              title: "Room Rates",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "count",
                      title: "Count",
                      type: "number",
                    }),
                    defineField({
                      name: "rate",
                      title: "Rate",
                      type: "number",
                    }),
                  ],
                },
              ],
            }),
            defineField({
              name: "totalGrossIncome",
              title: "Total Gross Income",
              type: "number",
            }),
          ],
        }),
        defineField({
          name: "costs",
          title: "Costs",
          type: "object",
          fields: [
            defineField({
              name: "refurbishment",
              title: "Refurbishment",
              type: "number",
            }),
            defineField({
              name: "sourcingFees",
              title: "Sourcing Fees",
              type: "number",
            }),
            defineField({
              name: "totalInvestment",
              title: "Total Investment",
              type: "number",
            }),
          ],
        }),
        defineField({
          name: "refinance",
          title: "Refinance",
          type: "object",
          fields: [
            defineField({ name: "gdv", title: "GDV", type: "number" }),
            defineField({ name: "ltv", title: "LTV", type: "number" }),
            defineField({
              name: "mortgageAmount",
              title: "Mortgage Amount",
              type: "number",
            }),
            defineField({
              name: "moneyOutSurplus",
              title: "Money Out Surplus",
              type: "number",
            }),
          ],
        }),
        defineField({
          name: "worksOverview",
          title: "Works Overview",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
    defineField({
      name: "valueComparables",
      title: "Value Comparables",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "address",
              title: "Address",
              type: "string",
            }),
            defineField({ name: "price", title: "Price", type: "number" }),
            defineField({
              name: "valuationType",
              title: "Valuation Type",
              type: "string",
            }),
            defineField({
              name: "valuationDate",
              title: "Valuation Date",
              type: "string",
            }),
            defineField({
              name: "saleDate",
              title: "Sale Date",
              type: "string",
            }),
            defineField({
              name: "distance",
              title: "Distance",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "rentalComparables",
      title: "Rental Comparables",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "address",
              title: "Address",
              type: "string",
            }),
            defineField({ name: "price", title: "Price", type: "number" }),
            defineField({ name: "type", title: "Type", type: "string" }),
            defineField({
              name: "dateFound",
              title: "Date Found",
              type: "string",
            }),
            defineField({
              name: "distance",
              title: "Distance",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "projectTitle",
      subtitle: "projectDetails.location",
      media: "mainImage",
    },
  },
});
