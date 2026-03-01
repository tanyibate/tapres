import React, { useEffect, useState } from "react";
import Image from "next/image";
import { sendEmail } from "@/util/email";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/client";

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount);
};

const inputClasses =
  "w-full px-3 py-1.5 text-sm bg-white/10 border border-white/20 rounded text-white focus:ring-2 focus:ring-gold focus:outline-none transition-all duration-200";

const selectClasses =
  "w-full px-3 py-1.5 text-sm bg-white/10 border border-white/20 rounded text-white focus:ring-2 focus:ring-gold focus:outline-none transition-all duration-200";

interface InvestContactProps {
  project?: any;
  projects?: any[];
  formData?: any;
}

/* --- Project Details Panel (shared between desktop sidebar & mobile drawer) --- */
function ProjectDetailsPanel({ project }: { project: any }) {
  const getImageUrl = (img: any) => {
    if (typeof img === "string") return img;
    if (img?.asset) return urlFor(img).width(400).url();
    return "";
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-white mb-1">
          {project.projectTitle}
        </h3>
        <p className="text-gray-400 text-sm">{project.projectSubtitle}</p>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Image thumbnails */}
      {project.images?.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {project.images.map((img: any, i: number) => {
            const src = getImageUrl(img);
            return (
              <div
                key={i}
                className="relative w-36 h-24 flex-shrink-0 rounded-lg overflow-hidden"
              >
                {src ? (
                  <Image
                    src={src}
                    alt={`${project.title} image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      )}

      {/* Key details grid */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Location", value: project.projectDetails?.location },
          {
            label: "Property Type",
            value: project.projectDetails?.propertyType,
          },
          { label: "Tenure", value: project.projectDetails?.tenure },
          { label: "Strategy", value: project.projectDetails?.strategy },
        ].map((item) => (
          <div key={item.label} className="bg-white/5 rounded-lg p-3">
            <p className="text-xs text-gray-400">{item.label}</p>
            <p className="text-sm font-medium text-white">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Financial highlights */}
      <div className="grid grid-cols-2 gap-3">
        {[
          {
            label: "Purchase Price",
            value: formatCurrency(project.dealBreakdown?.purchasePrice || 0),
          },
          {
            label: "GDV (Estimated)",
            value: formatCurrency(project.dealBreakdown?.gdvEstimated || 0),
          },
          {
            label: "Total Investment",
            value: formatCurrency(
              project.dealBreakdown?.costs?.totalInvestment || 0
            ),
          },
          {
            label: "Projected Gross Income",
            value: `${formatCurrency(project.dealBreakdown?.incomeProjection?.totalGrossIncome || 0)}/yr`,
          },
        ].map((item) => (
          <div key={item.label} className="bg-white/5 rounded-lg p-3">
            <p className="text-xs text-gray-400">{item.label}</p>
            <p className="text-sm font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Disclaimer Modal --- */
function DisclaimerModal({
  open,
  onClose,
  onAccept,
  cmsData,
}: {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
  cmsData?: any;
}) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (open) setChecked(false);
  }, [open]);

  if (!open) return null;

  const title = cmsData?.disclaimerTitle || "Investment Disclaimer";
  const checkboxLabel =
    cmsData?.disclaimerCheckboxLabel ||
    "I have read and understood the investment disclaimer. I acknowledge that property investment involves risks and I accept these risks.";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-[#2A2A2A] rounded-xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl">
        <h2 className="text-lg font-bold text-white mb-4">{title}</h2>

        <div className="space-y-3 text-sm text-gray-300">
          {cmsData?.disclaimerContent ? (
            <PortableText value={cmsData.disclaimerContent} />
          ) : (
            <>
              <p>
                Investing in property involves significant risks and may not be
                suitable for all investors. The value of your investment can go
                down as well as up, and you may not get back the full amount
                invested.
              </p>
              <p>
                Past performance is not a reliable indicator of future results.
                The information provided on this website is for general
                information purposes only and does not constitute financial
                advice.
              </p>
              <p>Before making any investment decision, you should:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Consider your own financial circumstances and investment
                  objectives
                </li>
                <li>Seek independent financial advice</li>
                <li>
                  Understand that property investment is illiquid and may be
                  difficult to sell quickly
                </li>
                <li>
                  Be aware that returns are not guaranteed and may be lower than
                  expected
                </li>
                <li>Consider all associated costs and fees</li>
              </ul>
              <p className="font-medium text-xs text-gray-400">
                By proceeding with an investment, you acknowledge that you have
                read and understood this disclaimer and accept the risks
                associated with property investment.
              </p>
            </>
          )}
        </div>

        <label className="flex items-start gap-3 mt-5 cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#B69A3E] focus:ring-[#B69A3E]"
          />
          <span className="text-sm text-gray-300">{checkboxLabel}</span>
        </label>

        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2.5 rounded border border-white/20 text-gray-300 hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              if (checked) onAccept();
            }}
            disabled={!checked}
            className="flex-1 px-4 py-2.5 rounded bg-[#B69A3E] text-white hover:bg-[#A0882E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Accept &amp; Continue
          </button>
        </div>
      </div>
    </div>
  );
}

/* --- Mobile Drawer --- */
function MobileDrawer({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project: any;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed inset-x-0 bottom-0 z-50 bg-[#2A2A2A] rounded-t-2xl max-h-[85vh] overflow-y-auto transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="sticky top-0 bg-[#2A2A2A] pt-3 pb-2 px-4 flex justify-between items-center border-b border-white/10 rounded-t-2xl">
          <div className="w-10 h-1 bg-gray-500 rounded-full mx-auto" />
        </div>
        <div className="flex justify-between items-center px-4 py-3">
          <h3 className="text-lg font-bold text-white">Project Details</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-4 pb-6">
          <ProjectDetailsPanel project={project} />
        </div>
      </div>
    </>
  );
}

/* --- Main Component --- */
export default function InvestContact({
  project,
  projects = [],
  formData: cmsFormData,
}: InvestContactProps) {
  const selectedProjectSlug = project?.slug;

  const properties = projects.map((p: any) => ({
    slug: p.slug,
    title: p.title,
    location: p.projectDetails?.location,
    investmentAmount: formatCurrency(
      p.dealBreakdown?.costs?.totalInvestment || 0
    ),
  }));

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertySlug: selectedProjectSlug || "",
    investmentAmount: "",
    investmentExperience: "",
    investmentGoals: "",
    additionalInfo: "",
  });
  const [emailSent, setEmailSent] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const activeProject = formState.propertySlug
    ? projects.find((p: any) => p.slug === formState.propertySlug)
    : project;

  useEffect(() => {
    if (selectedProjectSlug) {
      setFormState((prev) => ({
        ...prev,
        propertySlug: selectedProjectSlug,
      }));
    }
  }, [selectedProjectSlug]);

  const formHeading = cmsFormData?.formHeading || "";
  const formSubtext = cmsFormData?.formSubtext || "";
  const submitButtonText = cmsFormData?.submitButtonText || "";
  const successMessage = cmsFormData?.successMessage || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!disclaimerAccepted) {
      setDisclaimerOpen(true);
      return;
    }
    sendEmail({
      name: formState.firstName + " " + formState.lastName,
      message: `
      First Name: ${formState.firstName}
      Last Name: ${formState.lastName}
      Email: ${formState.email}
      Phone: ${formState.phone}
      Property Slug: ${formState.propertySlug}
      Investment Amount: ${formState.investmentAmount}
      Investment Experience: ${formState.investmentExperience}
      Investment Goals: ${formState.investmentGoals}
      Additional Information: ${formState.additionalInfo}
      `,
      email: formState.email,
    }).then(() => {
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        propertySlug: "",
        investmentAmount: "",
        investmentExperience: "",
        investmentGoals: "",
        additionalInfo: "",
      });
      setDisclaimerAccepted(false);
      setEmailSent(true);
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formContent = (
    <div>
      <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-white mb-3 after:content-[''] after:block after:w-12 after:h-[3px] after:bg-gold after:mt-2">
        {formHeading}
      </h2>
      <p className="text-gray-300 text-sm mb-6">{formSubtext}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm mb-1">Select Property</label>
            <select
              name="propertySlug"
              value={formState.propertySlug}
              onChange={handleChange}
              className={selectClasses}
              required
            >
              <option value="">Choose a property</option>
              {properties.map((property) => (
                <option key={property.slug} value={property.slug}>
                  {property.title} - {property.location} (
                  {property.investmentAmount})
                </option>
              ))}
            </select>
            {activeProject && (
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="md:hidden w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#B69A3E]/40 text-[#B69A3E] text-sm hover:bg-[#B69A3E]/10 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                View Project Details
              </button>
            )}
          </div>
          <div>
            <label className="block text-white text-sm mb-1">Investment Amount</label>
            <input
              type="text"
              name="investmentAmount"
              value={formState.investmentAmount}
              onChange={handleChange}
              placeholder="Enter your investment amount"
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm mb-1">
              Investment Experience
            </label>
            <select
              name="investmentExperience"
              value={formState.investmentExperience}
              onChange={handleChange}
              className={selectClasses}
              required
            >
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>
          <div>
            <label className="block text-white text-sm mb-1">Investment Goals</label>
            <select
              name="investmentGoals"
              value={formState.investmentGoals}
              onChange={handleChange}
              className={selectClasses}
              required
            >
              <option value="">Select your investment goals</option>
              <option value="long-term">Long-term capital growth</option>
              <option value="income">Regular rental income</option>
              <option value="both">Both capital growth and income</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-white mb-2">
            Additional Information
          </label>
          <textarea
            name="additionalInfo"
            value={formState.additionalInfo}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your investment preferences or any questions you have"
            className={`${inputClasses} h-auto`}
          />
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setDisclaimerOpen(true)}
            className="text-sm text-[#B69A3E] underline underline-offset-2 hover:text-[#d4b84e] transition-colors"
          >
            Review Investment Disclaimer
          </button>

          {disclaimerAccepted && (
            <p className="flex items-center gap-2 text-sm text-green-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Disclaimer accepted
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#B69A3E] text-white py-3 rounded hover:bg-[#A0882E] hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!disclaimerAccepted}
          >
            {submitButtonText}
          </button>

          {emailSent && (
            <div className="flex items-center gap-x-2 text-green-400 bg-green-400/10 px-4 py-3 rounded">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {successMessage}
            </div>
          )}
        </div>
      </form>
    </div>
  );

  return (
    <section className="w-full bg-[#1E1E1E] py-10 xl:py-12">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        {activeProject ? (
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-[55%]">{formContent}</div>

            <div className="hidden md:block w-full md:w-[45%]">
              <div className="sticky top-20 bg-white/5 rounded-xl p-5 border border-white/10">
                <ProjectDetailsPanel project={activeProject} />
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">{formContent}</div>
        )}
      </div>

      {activeProject && (
        <MobileDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          project={activeProject}
        />
      )}

      <DisclaimerModal
        open={disclaimerOpen}
        onClose={() => setDisclaimerOpen(false)}
        onAccept={() => {
          setDisclaimerAccepted(true);
          setDisclaimerOpen(false);
        }}
        cmsData={cmsFormData}
      />
    </section>
  );
}
