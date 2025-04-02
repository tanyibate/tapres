import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tab from "@/components/ui/Tab";
import Button from "@/components/button/Button";
import { useRouter } from "next/router";
import propertyList from "@/components/sections/projects/propertyList";

// Types for our project data
interface Project {
  id: number;
  projectTitle: string;
  projectSubtitle: string;
  projectDetails: {
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
  };
  dealBreakdown: {
    purchasePrice: number;
    gdvEstimated: number;
    incomeProjection: {
      roomRates: Array<{
        count: number;
        rate: number;
      }>;
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
  };
  valueComparables: Array<{
    address: string;
    price: number;
    valuationType?: string;
    valuationDate?: string;
    saleDate?: string;
    distance: string;
  }>;
  rentalComparables: Array<{
    address: string;
    price: number;
    type?: string;
    dateFound?: string;
    distance: string;
  }>;
  imgUrl: string;
  title: string;
  description: string;
  images: string[];
  floorplans: string[];
  streetView: string;
}

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [currentFloorPlanIndex, setCurrentFloorPlanIndex] = useState(0);
  const tabs = [
    "overview",
    "details",
    "financials",
    "comparables",
    "floorplans",
    "streetview",
  ];

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

      case "floorplans":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Floor Plans</h2>
            <div className="relative">
              <div className="relative h-[600px] w-full">
                <Image
                  src={project.floorplans[currentFloorPlanIndex]}
                  alt={`Floor plan ${currentFloorPlanIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              {project.floorplans.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentFloorPlanIndex((prev) =>
                        prev === 0 ? project.floorplans.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                    aria-label="Previous floor plan"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setCurrentFloorPlanIndex((prev) =>
                        prev === project.floorplans.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                    aria-label="Next floor plan"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.floorplans.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFloorPlanIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentFloorPlanIndex
                            ? "bg-gold w-4"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to floor plan ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        );

      case "streetview":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Street View</h2>
            <div className="relative h-[600px] w-full">
              <iframe
                src={project.streetView}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
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

      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src={project.imgUrl}
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
  const project = propertyList.find(
    (project) => project.id === Number(params?.id)
  );

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
