const propertyList = [
  {
    id: 1,
    projectTitle: "Investment Opportunity in LA14 Barrow in Furness",
    projectSubtitle: "BRR Opportunity - Already Purchased",
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
          { count: 3, rate: 670 },
          { count: 2, rate: 690 },
          { count: 2, rate: 715 },
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
        address: "Ramsden Street Terrace",
        price: 450000,
        valuationType: "RICS Valuation",
        valuationDate: "2024-05-04",
        distance: "0.5 miles",
      },
      {
        address: "Hartingdon Street Terrace",
        price: 470000,
        saleDate: "2024-05",
        distance: "0.2 miles",
      },
    ],
    rentalComparables: [
      {
        address: "Victoria Road",
        price: 800,
        type: "Double ensuite room",
        dateFound: "2024-10-19",
        distance: "0.6 miles",
      },
      {
        address: "Hartingdon Street",
        price: 715,
        type: "Double ensuite room",
        dateFound: "2024-08-08",
        distance: "0.2 miles",
      },
      {
        address: "Storey Square",
        price: 690,
        type: "Double ensuite room",
        dateFound: "2024-10-12",
        distance: "0.5 miles",
      },
    ],

    imgUrl: "/assets/40-carlisle-street/image.jpeg",
    title: "7 Bedroom HMO",
    description:
      "This 7 HMO is located in the heart of Barrow In Furness. With amenities such as Barrow Park as stone skip away and the train station being nearby.",
    images: [
      "/assets/40-carlisle-street/image.jpeg",
      "/assets/40-carlisle-street/image2.jpeg",
      "/assets/40-carlisle-street/image3.jpeg",
      "/assets/40-carlisle-street/image4.jpeg",
    ],
    floorplans: [
      "/assets/40-carlisle-street/image5.jpeg",
      "/assets/40-carlisle-street/image6.jpeg",
      "/assets/40-carlisle-street/image7.jpeg",
    ],
    streetView:
      "https://www.google.com/maps/embed?pb=!4v1724946578349!6m8!1m7!1sG_m8nj_Ii6VvI1chKF4z5w!2m2!1d54.11617847240131!2d-3.225370926743238!3f103.46257856473689!4f-2.9831352707828387!5f0.7820865974627469",
  },
  {
    id: 2,
    projectTitle: "Investment Opportunity in DN14 Goole, Yorkshire",
    projectSubtitle: "BRR Opportunity - Already Purchased",
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
          { count: 5, rate: 650 },
          { count: 1, rate: 715 },
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
        address: "Ramsden Street",
        price: 450000,
        valuationType: "RICS Valuation",
        valuationDate: "2024-05-04",
        distance: "0.5 Miles",
      },
      {
        address: "Salisbury Avenue Street Terrace",
        price: 415000,
        valuationType: "RICS Valuation",
        valuationDate: "2023-05",
        distance: "0.2 Miles",
      },
    ],
    rentalComparables: [
      {
        address: "Marshfield Avenue",
        price: 690,
        type: "Double ensuite room",
        dateFound: "2024-10-21",
        distance: "0.2 Miles",
      },
      {
        address: "Salisbury Avenue",
        price: 715,
        type: "Double ensuite room",
        dateFound: "2024-10-08",
        distance: "0.4 Miles",
      },
      {
        address: "Marshfield Avenue",
        price: 690,
        type: "Double ensuite room",
        dateFound: "2024-10-12",
        distance: "0.2 Miles",
      },
    ],
    imgUrl: "photo_property_main.jpg",
    title: "BRR Opportunity in Goole - 6 Bed HMO Conversion",
    description:
      "End terrace property in DN14, Goole. Opportunity to convert to a 6-bed all ensuite HMO. Strong comparable sales and rental data. Fully funded and purchased. Seeking development funds.",
    images: [
      "photo_property_1.jpg",
      "photo_property_2.jpg",
      "photo_rental_1.jpg",
      "photo_rental_2.jpg",
      "photo_rental_3.jpg",
    ],
    floorplans: [
      "floorplan_ground_before.jpg",
      "floorplan_ground_after.jpg",
      "floorplan_first_before.jpg",
      "floorplan_first_after.jpg",
    ],
    streetView: "https://maps.google.com/?q=DN14+Goole+UK",
  },
];

export default propertyList;
