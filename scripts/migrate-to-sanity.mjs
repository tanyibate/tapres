#!/usr/bin/env node

/**
 * Migration script: Populates Sanity CMS with existing hardcoded content.
 *
 * Usage:
 *   1. Set env vars: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN
 *   2. Run: node scripts/migrate-to-sanity.mjs
 *
 * This script:
 *   - Uploads local images from public/assets/ and assets/images/ to Sanity
 *   - Downloads + re-uploads external images (Booking.com CDN)
 *   - Creates all singleton documents with hardcoded text content
 *   - Creates all collection documents (investment projects, serviced accommodations)
 */

import { createClient } from "@sanity/client";
import { basename } from "path";
import { readFileSync } from "fs";
import { resolve } from "path";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing env vars. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2025-01-01",
  useCdn: false,
});

const ROOT = resolve(process.cwd());

// ─── Helpers ────────────────────────────────────────────────────────────────

async function uploadLocalImage(relativePath) {
  // Try public/ first, then assets/images/
  let fullPath;
  const publicPath = resolve(ROOT, "public", relativePath.replace(/^\//, ""));
  const assetsPath = resolve(
    ROOT,
    "assets/images",
    relativePath.replace(/^\/assets\/images\//, "").replace(/^\//, "")
  );

  try {
    readFileSync(publicPath);
    fullPath = publicPath;
  } catch {
    try {
      readFileSync(assetsPath);
      fullPath = assetsPath;
    } catch {
      console.warn(`  [WARN] Image not found: ${relativePath}`);
      return null;
    }
  }

  const filename = basename(fullPath);
  console.log(`  Uploading: ${filename}`);
  const imageBuffer = readFileSync(fullPath);
  const asset = await client.assets.upload("image", imageBuffer, {
    filename,
  });
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
}

async function uploadExternalImage(url) {
  console.log(`  Downloading: ${url.substring(0, 80)}...`);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  [WARN] Failed to download: ${url}`);
      return null;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const filename =
      url.split("/").pop().split("?")[0] || "external-image.jpg";
    const asset = await client.assets.upload("image", buffer, { filename });
    return {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err) {
    console.warn(`  [WARN] Error downloading ${url}: ${err.message}`);
    return null;
  }
}

async function uploadImage(src) {
  if (typeof src !== "string") return null;
  if (src.startsWith("http")) return uploadExternalImage(src);
  return uploadLocalImage(src);
}

function portableTextFromStrings(paragraphs) {
  return paragraphs.map((text, i) => ({
    _type: "block",
    _key: `block-${i}`,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `span-${i}`, text, marks: [] }],
  }));
}

// ─── Singleton data ─────────────────────────────────────────────────────────

async function createHomePage() {
  console.log("\n--- Home Page ---");
  const backgroundImage = await uploadLocalImage(
    "/assets/images/landing-background.jpg"
  );
  await client.createOrReplace({
    _id: "homePage",
    _type: "homePage",
    heading: "Tapres",
    tagline: "Next Generation Homes",
    ctaText: "View our Projects",
    ctaLink: "#projects-section",
    backgroundImage,
    seo: {
      title: "Tapres | Next Generation Property Investment",
      description:
        "Tapres offers investors a convenient way to be involved in property investment and achieve safe yet excellent returns. Explore HMOs, flats, and serviced accommodation across the UK.",
    },
  });
  console.log("  Created homePage singleton");
}

async function createAboutSection() {
  console.log("\n--- About Section ---");
  await client.createOrReplace({
    _id: "aboutSection",
    _type: "aboutSection",
    heading: "About Tapres",
    bodyText:
      "Tapres limited was founded in 2022 with the mission to provide Houses of Multiple Occupancy (HMO's) to professional by buying, renovate, re-mortgage and rent using investor's money and bridging loans. We also provide home away from home by providing high quality Serviced accommodation(SA).",
    mission: {
      title: "Our Mission",
      text: "To use high professional approach to supply quality next generation properties to tenants and investors, setting high standards across the property industry. We go the extra mile to make our tenants feel valued.",
    },
    values: {
      title: "Our Values",
      text: "Tenants are primary focus of that we do. We are honest, Trustworthy, transparent and respectful in providing high quality property to our customers.",
    },
    vision: {
      title: "Our Vision",
      text: "Our vision is to provide high quality property to tenants worldwide irrespective of nationality, culture, class or education.",
    },
    youtubeUrl: "https://www.youtube.com/embed/2Mj7CIla3L4",
  });
  console.log("  Created aboutSection singleton");
}

async function createTeamMembersSection() {
  console.log("\n--- Team Members ---");
  const headshot = await uploadLocalImage("/assets/images/modified_headshot.jpg");
  const bgDesktop = await uploadLocalImage(
    "/assets/images/about-us-background.jpg"
  );
  const bgMobile = await uploadLocalImage(
    "/assets/images/about-us-background-mobile.jpg"
  );

  const bio = portableTextFromStrings([
    "Peter is founder and Managing Director of Tapres LTD. He transfers the constant changes in the IT industry unto the property market to provide high innovative next generation housing for tenants and investors. He has done the one year master mind Programme with Property Investment Network-PIN",
    "IT Security Architect: Over 20 years as an IT consultant with many household name companies. He is very creative and collaborates other people to bring about meaning changes for people and companies.",
  ]);

  await client.createOrReplace({
    _id: "teamMembersSection",
    _type: "teamMembersSection",
    members: [
      {
        _key: "peter",
        name: "Peter",
        role: "Founder & Managing Director",
        bio,
        headshot,
        backgroundImageDesktop: bgDesktop,
        backgroundImageMobile: bgMobile,
      },
    ],
  });
  console.log("  Created teamMembersSection singleton");
}

async function createInvestSection() {
  console.log("\n--- Invest Section ---");
  const image = await uploadLocalImage("/assets/images/invest-image.jpg");
  await client.createOrReplace({
    _id: "investSection",
    _type: "investSection",
    heading: "Invest",
    paragraph1:
      "We focus on buy-to-hold investment properties in Liverpool, Reading High Wycombe. These range from HMOs to flats.",
    paragraph2:
      "Tapres offers investors a convenient way for investors to be involved in property and achieve a safe yet excellent return on their capital.",
    ctaText: "Invest Now",
    ctaLink: "/invest",
    image,
  });
  console.log("  Created investSection singleton");
}

async function createContactSection() {
  console.log("\n--- Contact Section ---");
  await client.createOrReplace({
    _id: "contactSection",
    _type: "contactSection",
    heading: "Send a message to Tapres",
    subheading: "Just submit your details and we'll be in touch shortly.",
    emailAddress: "info@tapres.com",
    submitButtonText: "Send a Request",
  });
  console.log("  Created contactSection singleton");
}

async function createLookingToInvestSection() {
  console.log("\n--- Looking to Invest ---");
  await client.createOrReplace({
    _id: "lookingToInvestSection",
    _type: "lookingToInvestSection",
    heading: "Looking to invest",
    bodyText:
      "Off the back of an incredibly successful year we're raising a new funding round to innovate our industry and grow our property portfolio to satisfy the demand we're getting from our current proposals.",
  });
  console.log("  Created lookingToInvestSection singleton");
}

async function createInvestFormSection() {
  console.log("\n--- Invest Form ---");
  const disclaimerContent = portableTextFromStrings([
    "Investing in property involves significant risks and may not be suitable for all investors. The value of your investment can go down as well as up, and you may not get back the full amount invested.",
    "Past performance is not a reliable indicator of future results. The information provided on this website is for general information purposes only and does not constitute financial advice.",
    "Before making any investment decision, you should consider your own financial circumstances and investment objectives, seek independent financial advice, understand that property investment is illiquid and may be difficult to sell quickly, be aware that returns are not guaranteed and may be lower than expected, and consider all associated costs and fees.",
    "By proceeding with an investment, you acknowledge that you have read and understood this disclaimer and accept the risks associated with property investment.",
  ]);

  await client.createOrReplace({
    _id: "investFormSection",
    _type: "investFormSection",
    formHeading: "Get in Touch",
    formSubtext:
      "Fill out the form below to start your investment journey with us. We'll get back to you within 24 hours.",
    disclaimerTitle: "Investment Disclaimer",
    disclaimerContent,
    disclaimerCheckboxLabel:
      "I have read and understood the investment disclaimer. I acknowledge that property investment involves risks and I accept these risks.",
    submitButtonText: "Submit Investment Interest",
    successMessage:
      "Your investment interest has been submitted successfully. We'll be in touch within 24 hours.",
    seo: {
      title: "Invest | Tapres Property Investment",
      description:
        "Start your property investment journey with Tapres. Explore HMO and serviced accommodation opportunities across the UK with strong returns.",
    },
  });
  console.log("  Created investFormSection singleton");
}

async function createNavSettings() {
  console.log("\n--- Nav Settings ---");
  const logo = await uploadLocalImage(
    "/assets/tapres-logo-transparent.png"
  );
  await client.createOrReplace({
    _id: "navSettings",
    _type: "navSettings",
    logo,
    navLinks: [
      { _key: "home", label: "Home", href: "/#landing-section", isButton: false, isExternal: false },
      { _key: "about", label: "About", href: "/#about-section", isButton: false, isExternal: false },
      { _key: "properties", label: "Properties", href: "/#properties-section", isButton: false, isExternal: false },
      { _key: "invest", label: "Invest", href: "/#invest-section", isButton: false, isExternal: false },
      { _key: "contact", label: "Contact", href: "/#contact-section", isButton: true, isExternal: false },
    ],
  });
  console.log("  Created navSettings singleton");
}

async function createSeoSettings() {
  console.log("\n--- SEO Settings ---");
  await client.createOrReplace({
    _id: "seoSettings",
    _type: "seoSettings",
    defaultTitle: "Tapres | Next Generation Property Investment",
    titleTemplate: "%s | Tapres",
    defaultDescription:
      "Tapres offers investors a convenient way to be involved in property investment and achieve safe yet excellent returns.",
  });
  console.log("  Created seoSettings singleton");
}

// ─── Collection data ────────────────────────────────────────────────────────

async function createInvestmentProjects() {
  console.log("\n--- Investment Projects ---");

  // Project 1: Barrow in Furness
  console.log("  Processing: Barrow in Furness");
  const barrowMainImage = await uploadLocalImage(
    "/assets/40-carlisle-street/prerefurb.jpeg"
  );
  const barrowImages = [];
  for (const src of [
    "/assets/40-carlisle-street/prerefurb.jpeg",
    "/assets/40-carlisle-street/prerefurb2.jpeg",
    "/assets/40-carlisle-street/prerefurb3.jpeg",
    "/assets/40-carlisle-street/prerefurb4.jpeg",
  ]) {
    const img = await uploadLocalImage(src);
    if (img) barrowImages.push({ ...img, _key: `img-${barrowImages.length}` });
  }
  const barrowFloorplans = [];
  for (const src of [
    "/assets/40-carlisle-street/floorplan.jpeg",
    "/assets/40-carlisle-street/floorplan2.jpeg",
    "/assets/40-carlisle-street/floorplan3.jpeg",
  ]) {
    const img = await uploadLocalImage(src);
    if (img)
      barrowFloorplans.push({ ...img, _key: `fp-${barrowFloorplans.length}` });
  }

  await client.createOrReplace({
    _id: "project-barrow-in-furness",
    _type: "investmentProject",
    projectTitle: "Investment Opportunity in LA14 Barrow in Furness",
    projectSubtitle: "BRR Opportunity - Already Purchased",
    title: "7 Bedroom HMO",
    description:
      "This 7 HMO is located in the heart of Barrow In Furness. With amenities such as Barrow Park as stone skip away and the train station being nearby.",
    slug: { _type: "slug", current: "barrow-in-furness-la14" },
    sortOrder: 1,
    mainImage: barrowMainImage,
    images: barrowImages,
    floorplans: barrowFloorplans,
    streetViewUrl:
      "https://www.google.com/maps/embed?pb=!4v1724946578349!6m8!1m7!1sG_m8nj_Ii6VvI1chKF4z5w!2m2!1d54.11617847240131!2d-3.225370926743238!3f103.46257856473689!4f-2.9831352707828387!5f0.7820865974627469",
    projectDetails: {
      status: "Development Funds Needed",
      location: "LA14 Barrow in Furness",
      propertyType: "Link Detached house",
      tenure: "Freehold",
      currentBedrooms: 4,
      proposedBedrooms: 7,
      currentBathrooms: 2,
      proposedBathrooms: 7,
      occupancyStatus: "Un-Occupied",
      strategy: "Conversion to HMO and then refinance",
    },
    dealBreakdown: {
      purchasePrice: 125000,
      gdvEstimated: 480000,
      incomeProjection: {
        roomRates: [
          { _key: "r1", count: 3, rate: 670 },
          { _key: "r2", count: 2, rate: 690 },
          { _key: "r3", count: 2, rate: 715 },
        ],
        totalGrossIncome: 57900,
      },
      costs: {
        refurbishment: 170000,
        sourcingFees: 4000,
        totalInvestment: 299000,
      },
      refinance: {
        gdv: 480000,
        ltv: 0.75,
        mortgageAmount: 360000,
        moneyOutSurplus: 61000,
      },
      worksOverview: [
        "Conversion of workshop into kitchen diner and bedroom",
        "Conversion of conservatory into bedroom",
        "Conversion of all bedrooms into ensuite rooms",
      ],
    },
    valueComparables: [
      {
        _key: "vc1",
        address: "Ramsden Street Terrace",
        price: 450000,
        valuationType: "RICS Valuation",
        valuationDate: "2024-05-04",
        distance: "0.5 miles",
      },
      {
        _key: "vc2",
        address: "Hartingdon Street Terrace",
        price: 470000,
        saleDate: "2024-05",
        distance: "0.2 miles",
      },
    ],
    rentalComparables: [
      {
        _key: "rc1",
        address: "Victoria Road",
        price: 800,
        type: "Double ensuite room",
        dateFound: "2024-10-19",
        distance: "0.6 miles",
      },
      {
        _key: "rc2",
        address: "Hartingdon Street",
        price: 715,
        type: "Double ensuite room",
        dateFound: "2024-08-08",
        distance: "0.2 miles",
      },
      {
        _key: "rc3",
        address: "Storey Square",
        price: 690,
        type: "Double ensuite room",
        dateFound: "2024-10-12",
        distance: "0.5 miles",
      },
    ],
  });
  console.log("  Created: Barrow in Furness project");

  // Project 2: Goole
  console.log("  Processing: Goole, Yorkshire");
  const gooleMainImage = await uploadLocalImage(
    "/assets/77-carlisle-street/kitchen-diner/DSC_5791-HDR-Edit.jpg"
  );
  const gooleImages = [];
  for (const src of [
    "/assets/77-carlisle-street/room-1/DSC_5714-Edit.jpg",
    "/assets/77-carlisle-street/room-2/DSC_5732-Edit.jpg",
    "/assets/77-carlisle-street/room-3/DSC_5697-Edit.jpg",
    "/assets/77-carlisle-street/kitchen-diner/DSC_5791-HDR-Edit.jpg",
  ]) {
    const img = await uploadLocalImage(src);
    if (img) gooleImages.push({ ...img, _key: `img-${gooleImages.length}` });
  }
  const gooleFloorplans = [];
  const fpImg = await uploadLocalImage("/assets/77-carlisle-street/layout.jpg");
  if (fpImg) gooleFloorplans.push({ ...fpImg, _key: "fp-0" });

  await client.createOrReplace({
    _id: "project-goole-yorkshire",
    _type: "investmentProject",
    projectTitle: "Investment Opportunity in DN14 Goole, Yorkshire",
    projectSubtitle: "BRR Opportunity - Already Purchased",
    title: "BRR Opportunity in Goole - 6 Bed HMO Conversion",
    description:
      "End terrace property in DN14, Goole. Opportunity to convert to a 6-bed all ensuite HMO. Strong comparable sales and rental data. Fully funded and purchased. Seeking development funds.",
    slug: { _type: "slug", current: "goole-yorkshire-dn14" },
    sortOrder: 2,
    mainImage: gooleMainImage,
    images: gooleImages,
    floorplans: gooleFloorplans,
    streetViewUrl: "https://maps.google.com/?q=DN14+Goole+UK",
    projectDetails: {
      status: "Development Funds Needed",
      location: "DN14 Goole, Yorkshire",
      propertyType: "End Terrace house",
      tenure: "Freehold",
      currentBedrooms: 3,
      proposedBedrooms: 6,
      currentBathrooms: 2,
      proposedBathrooms: 6,
      occupancyStatus: "Un-Occupied",
      strategy: "Conversion to HMO and then refinance",
    },
    dealBreakdown: {
      purchasePrice: 125000,
      gdvEstimated: 420000,
      incomeProjection: {
        roomRates: [
          { _key: "r1", count: 5, rate: 650 },
          { _key: "r2", count: 1, rate: 715 },
        ],
        totalGrossIncome: 48060,
      },
      costs: {
        refurbishment: 150000,
        sourcingFees: 4000,
        totalInvestment: 279000,
      },
      refinance: {
        gdv: 420000,
        ltv: 0.75,
        mortgageAmount: 315000,
        moneyOutSurplus: 36000,
      },
      worksOverview: [
        "Conversion of 2 reception rooms into bedrooms",
        "Conversion of family bathroom into a bedroom",
        "Conversion of all bedrooms into ensuite rooms",
      ],
    },
    valueComparables: [
      {
        _key: "vc1",
        address: "Ramsden Street",
        price: 450000,
        valuationType: "RICS Valuation",
        valuationDate: "2024-05-04",
        distance: "0.5 Miles",
      },
      {
        _key: "vc2",
        address: "Salisbury Avenue Street Terrace",
        price: 415000,
        valuationType: "RICS Valuation",
        valuationDate: "2023-05",
        distance: "0.2 Miles",
      },
    ],
    rentalComparables: [
      {
        _key: "rc1",
        address: "Marshfield Avenue",
        price: 690,
        type: "Double ensuite room",
        dateFound: "2024-10-21",
        distance: "0.2 Miles",
      },
      {
        _key: "rc2",
        address: "Salisbury Avenue",
        price: 715,
        type: "Double ensuite room",
        dateFound: "2024-10-08",
        distance: "0.4 Miles",
      },
      {
        _key: "rc3",
        address: "Marshfield Avenue",
        price: 690,
        type: "Double ensuite room",
        dateFound: "2024-10-12",
        distance: "0.2 Miles",
      },
    ],
  });
  console.log("  Created: Goole project");
}

async function createServicedAccommodations() {
  console.log("\n--- Serviced Accommodations ---");

  const bathImages = [];
  const bathImageUrls = [
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/556898594.jpg?k=814210d28a1a96ba23cdd4da08ad6b5874b81b75a9bfab6b940721a40e22ae15&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/556898634.jpg?k=d8b59eee1f5ddd829f29dac55990ea2fdd473710795cee6d424abe4064cdb3d3&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/556898622.jpg?k=888f3c9f2034a3c9f11fb14dff0553d6068e9b564b4301c121ba69a494537d95&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/556898553.jpg?k=e9fd257cc01b8fcf2e0bff9cde425d5241af2534c8fb54c0ae2e03b356e965de&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/556898339.jpg?k=99b065d9e749a3906c1efb602205d3ef9d674a3c6cfa74ea10abe7d92d629fbe&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/556898468.jpg?k=ab5974173624fb34685e65c07ead587295cc4015ca51ff36a1dc37c575d051d7&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/556898585.jpg?k=3daf017079ff0e6798f1094c412b60bdcdc31f9168d0aae1fd4a554286f1f8e2&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/556898548.jpg?k=bced014bb80b6c338f1b1b6ffc99a940f48d64e4882dee593afedb13c5f853db&o=&hp=1",
  ];

  for (const url of bathImageUrls) {
    const img = await uploadExternalImage(url);
    if (img) bathImages.push({ ...img, _key: `img-${bathImages.length}` });
  }

  const mainImage = bathImages[0]
    ? { _type: "image", asset: bathImages[0].asset }
    : null;

  await client.createOrReplace({
    _id: "property-bath-apartment",
    _type: "servicedAccommodation",
    title: "Modern Apartment in the Heart of Bath",
    description:
      "Modern Apartment in the Heart of Bath is set in the Bath City Centre district of Bath, 200 metres from Bath Abbey, 70 metres from The Roman Baths and less than 1 km from The Circus Bath.",
    ctaLabel: "Book Now",
    mainImage,
    images: bathImages,
    streetViewUrl:
      "https://www.google.com/maps/embed?pb=!4v1677076262535!6m8!1m7!1sTVqkQqGXhFctw-dwhYoNbg!2m2!1d51.49530631535228!2d-0.1784244203131543!3f140.92233906021835!4f-1.178956891499979!5f0.7820865974627469",
    sortOrder: 1,
  });
  console.log("  Created: Bath apartment");
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log("=== Tapres CMS Migration ===");
  console.log(`Project: ${projectId} | Dataset: ${dataset}\n`);

  // Singletons
  await createHomePage();
  await createAboutSection();
  await createTeamMembersSection();
  await createInvestSection();
  await createContactSection();
  await createLookingToInvestSection();
  await createInvestFormSection();
  await createNavSettings();
  await createSeoSettings();

  // Collections
  await createInvestmentProjects();
  await createServicedAccommodations();

  console.log("\n=== Migration Complete ===");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
