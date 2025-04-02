import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tab from "@/components/ui/Tab";
import Button from "@/components/button/Button";
import Link from "next/link";
import { useRouter } from "next/router";

// Types for our project data
interface RoomRate {
  count: number;
  rate: number;
}

interface ProjectDetails {
  status: string;
  location: string;
  propertyType: string;
  tenure: string;
  currentBedrooms: number;
  proposedBedrooms: number;
  currentBathrooms: number;
  proposedBathrooms: number;
  occupancyStatus: string;
  strategy: string;
}

interface DealBreakdown {
  purchasePrice: number;
  gdvEstimated: number;
  incomeProjection: {
    roomRates: RoomRate[];
    totalGrossIncome: number;
  };
  costs: {
    refurbishment: number;
    sourcingFees: number;
    totalInvestment: number;
  };
  refinance: {
    gdv: number;
    ltv: number;
    mortgageAmount: number;
    moneyOutSurplus: number;
  };
  worksOverview: string[];
}

interface Comparable {
  address: string;
  price: number;
  valuationType?: string;
  valuationDate?: string;
  saleDate?: string;
  type?: string;
  dateFound?: string;
  distance: string;
}

interface Project {
  projectTitle: string;
  projectSubtitle: string;
  projectDetails: ProjectDetails;
  dealBreakdown: DealBreakdown;
  valueComparables: Comparable[];
  rentalComparables: Comparable[];
  media: {
    projectPhotos: string[];
    comparablesPhotos: string[];
    rentalUnitPhotos: string[];
    floorplans: {
      before: string;
      after: string;
    };
    brand: {
      createdBy: string;
      logo: string;
    };
  };
}

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = ["overview", "details", "financials", "comparables"];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Details Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">Status</p>
                    <p className="font-medium">
                      {project.projectDetails.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Location</p>
                    <p className="font-medium">
                      {project.projectDetails.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Property Type</p>
                    <p className="font-medium">
                      {project.projectDetails.propertyType}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Tenure</p>
                    <p className="font-medium">
                      {project.projectDetails.tenure}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Summary Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Financial Summary</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">Purchase Price</p>
                    <p className="font-medium">
                      {formatCurrency(project.dealBreakdown.purchasePrice)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">GDV</p>
                    <p className="font-medium">
                      {formatCurrency(project.dealBreakdown.gdvEstimated)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Total Investment</p>
                    <p className="font-medium">
                      {formatCurrency(
                        project.dealBreakdown.costs.totalInvestment
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Money Out Surplus</p>
                    <p className="font-medium">
                      {formatCurrency(
                        project.dealBreakdown.refinance.moneyOutSurplus
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "details":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Current Layout</h3>
                <div className="space-y-2">
                  <p>Bedrooms: {project.projectDetails.currentBedrooms}</p>
                  <p>Bathrooms: {project.projectDetails.currentBathrooms}</p>
                  <p>
                    Occupancy Status: {project.projectDetails.occupancyStatus}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Proposed Layout</h3>
                <div className="space-y-2">
                  <p>Bedrooms: {project.projectDetails.proposedBedrooms}</p>
                  <p>Bathrooms: {project.projectDetails.proposedBathrooms}</p>
                  <p>Strategy: {project.projectDetails.strategy}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "financials":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Financial Breakdown</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Income Projection</h3>
                <div className="space-y-2">
                  <p>
                    Total Gross Income:{" "}
                    {formatCurrency(
                      project.dealBreakdown.incomeProjection.totalGrossIncome
                    )}
                  </p>
                  <div className="mt-2">
                    <p className="font-medium">Room Rates:</p>
                    {project.dealBreakdown.incomeProjection.roomRates.map(
                      (rate, index) => (
                        <p key={index}>
                          {rate.count} rooms at {formatCurrency(rate.rate)} each
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Costs</h3>
                <div className="space-y-2">
                  <p>
                    Refurbishment:{" "}
                    {formatCurrency(project.dealBreakdown.costs.refurbishment)}
                  </p>
                  <p>
                    Sourcing Fees:{" "}
                    {formatCurrency(project.dealBreakdown.costs.sourcingFees)}
                  </p>
                  <p className="font-medium">
                    Total Investment:{" "}
                    {formatCurrency(
                      project.dealBreakdown.costs.totalInvestment
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "comparables":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Value Comparables</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.valueComparables.map((comparable, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <p className="font-medium">{comparable.address}</p>
                    <p className="text-gray-600">
                      {formatCurrency(comparable.price)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {comparable.distance} away
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">
                Rental Comparables
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.rentalComparables.map((comparable, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <p className="font-medium">{comparable.address}</p>
                    <p className="text-gray-600">
                      {formatCurrency(comparable.price)}
                    </p>
                    <p className="text-sm text-gray-500">{comparable.type}</p>
                    <p className="text-sm text-gray-500">
                      {comparable.distance} away
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>{project.projectTitle} | Tapres</title>
        <meta name="description" content={project.projectSubtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src={`/images/${project.media.projectPhotos[0]}`}
              alt={project.projectTitle}
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {project.projectTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              {project.projectSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Button white onClick={() => router.replace("/invest")}>
                Invest Now
              </Button>
            </motion.div>
          </div>
        </section>

        <Tab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}>
          {renderTabContent()}
        </Tab>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // In a real application, you would fetch the project data from an API
  // For now, we'll use the static data
  const project = {
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
    media: {
      projectPhotos: ["photo_property_1.jpg", "photo_property_2.jpg"],
      comparablesPhotos: ["photo_comparable_1.jpg", "photo_comparable_2.jpg"],
      rentalUnitPhotos: [
        "photo_rental_1.jpg",
        "photo_rental_2.jpg",
        "photo_rental_3.jpg",
      ],
      floorplans: {
        before: "floorplan_before.jpg",
        after: "floorplan_after.jpg",
      },
      brand: {
        createdBy: "TAPRES LTD",
        logo: "company_logo.jpg",
      },
    },
  };

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
