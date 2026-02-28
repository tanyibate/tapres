import type { StructureBuilder } from "sanity/structure";

// Singleton document types that should only have one instance
const singletonTypes = new Set([
  "homePage",
  "aboutSection",
  "teamMembersSection",
  "investSection",
  "contactSection",
  "lookingToInvestSection",
  "investFormSection",
  "navSettings",
  "seoSettings",
]);

export const singletonStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // Singleton items
      S.listItem()
        .title("Home Page")
        .id("homePage")
        .child(
          S.document().schemaType("homePage").documentId("homePage")
        ),
      S.listItem()
        .title("About Section")
        .id("aboutSection")
        .child(
          S.document().schemaType("aboutSection").documentId("aboutSection")
        ),
      S.listItem()
        .title("Team Members")
        .id("teamMembersSection")
        .child(
          S.document()
            .schemaType("teamMembersSection")
            .documentId("teamMembersSection")
        ),
      S.listItem()
        .title("Invest Section")
        .id("investSection")
        .child(
          S.document().schemaType("investSection").documentId("investSection")
        ),
      S.listItem()
        .title("Contact Section")
        .id("contactSection")
        .child(
          S.document()
            .schemaType("contactSection")
            .documentId("contactSection")
        ),
      S.listItem()
        .title("Looking to Invest")
        .id("lookingToInvestSection")
        .child(
          S.document()
            .schemaType("lookingToInvestSection")
            .documentId("lookingToInvestSection")
        ),
      S.listItem()
        .title("Invest Form")
        .id("investFormSection")
        .child(
          S.document()
            .schemaType("investFormSection")
            .documentId("investFormSection")
        ),
      S.listItem()
        .title("Navigation")
        .id("navSettings")
        .child(
          S.document().schemaType("navSettings").documentId("navSettings")
        ),
      S.listItem()
        .title("SEO Settings")
        .id("seoSettings")
        .child(
          S.document().schemaType("seoSettings").documentId("seoSettings")
        ),

      S.divider(),

      // Collection items
      S.listItem()
        .title("Investment Projects")
        .child(S.documentTypeList("investmentProject").title("Investment Projects")),
      S.listItem()
        .title("Serviced Accommodations")
        .child(
          S.documentTypeList("servicedAccommodation").title(
            "Serviced Accommodations"
          )
        ),
    ]);

// Filter singletons out of the default "new document" menu
export const singletonActions = (prev: any[], context: any) => {
  if (singletonTypes.has(context.schemaType)) {
    return prev.filter(({ action }: any) => action !== "delete");
  }
  return prev;
};

export const singletonNewDocument = (prev: any[]) =>
  prev.filter((item: any) => !singletonTypes.has(item.templateId));
