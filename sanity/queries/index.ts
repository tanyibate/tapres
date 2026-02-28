import { groq } from "next-sanity";

// ─── Home Page (compound query: all sections + collections) ─────────────────
export const homePageQuery = groq`{
  "homePage": *[_type == "homePage"][0]{
    heading,
    tagline,
    ctaText,
    ctaLink,
    backgroundImage,
    seo
  },
  "about": *[_type == "aboutSection"][0]{
    heading,
    bodyText,
    mission,
    values,
    vision,
    youtubeUrl
  },
  "team": *[_type == "teamMembersSection"][0]{
    members[]{
      name,
      role,
      bio,
      headshot,
      backgroundImageDesktop,
      backgroundImageMobile
    }
  },
  "invest": *[_type == "investSection"][0]{
    heading,
    paragraph1,
    paragraph2,
    ctaText,
    ctaLink,
    image
  },
  "contact": *[_type == "contactSection"][0]{
    heading,
    subheading,
    emailAddress,
    submitButtonText
  },
  "projects": *[_type == "investmentProject"] | order(sortOrder asc){
    _id,
    projectTitle,
    projectSubtitle,
    title,
    description,
    "slug": slug.current,
    mainImage,
    images,
    streetViewUrl,
    projectDetails,
    dealBreakdown
  },
  "properties": *[_type == "servicedAccommodation"] | order(sortOrder asc){
    _id,
    title,
    description,
    ctaLabel,
    bookingUrl,
    mainImage,
    images,
    streetViewUrl
  },
  "nav": *[_type == "navSettings"][0]{
    logo,
    navLinks
  },
  "seo": *[_type == "seoSettings"][0]{
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultOgImage
  }
}`;

// ─── Project by slug ────────────────────────────────────────────────────────
export const projectBySlugQuery = groq`*[_type == "investmentProject" && slug.current == $slug][0]{
  _id,
  projectTitle,
  projectSubtitle,
  title,
  description,
  "slug": slug.current,
  mainImage,
  images,
  floorplans,
  streetViewUrl,
  projectDetails,
  dealBreakdown,
  valueComparables,
  rentalComparables
}`;

// ─── All project slugs (for getStaticPaths) ─────────────────────────────────
export const allProjectSlugsQuery = groq`*[_type == "investmentProject" && defined(slug.current)]{
  "slug": slug.current
}`;

// ─── Invest page ────────────────────────────────────────────────────────────
export const investPageQuery = groq`{
  "lookingToInvest": *[_type == "lookingToInvestSection"][0]{
    heading,
    bodyText
  },
  "investForm": *[_type == "investFormSection"][0]{
    formHeading,
    formSubtext,
    disclaimerTitle,
    disclaimerContent,
    disclaimerCheckboxLabel,
    submitButtonText,
    successMessage,
    seo
  },
  "projects": *[_type == "investmentProject"] | order(sortOrder asc){
    _id,
    projectTitle,
    projectSubtitle,
    title,
    description,
    "slug": slug.current,
    mainImage,
    images,
    projectDetails,
    dealBreakdown
  }
}`;
