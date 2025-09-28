import React, { useState } from "react";
import Image from "next/image";
import investContactBackground from "@/assets/images/invest-background.png";
import { sendEmail } from "@/util/email";

interface Property {
  id: string;
  title: string;
  location: string;
  investmentAmount: string;
}

const properties: Property[] = [
  {
    id: "la14-barrow",
    title: "LA14 Barrow in Furness",
    location: "Barrow-in-Furness, Cumbria",
    investmentAmount: "£299,000",
  },
  {
    id: "liverpool-hmo",
    title: "Liverpool HMO",
    location: "Liverpool, Merseyside",
    investmentAmount: "£250,000",
  },
  {
    id: "reading-flat",
    title: "Reading Apartment",
    location: "Reading, Berkshire",
    investmentAmount: "£180,000",
  },
];

export default function InvestContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyId: "",
    investmentAmount: "",
    investmentExperience: "",
    investmentGoals: "",
    additionalInfo: "",
    disclaimerAccepted: false,
  });
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.disclaimerAccepted) {
      alert("Please accept the investment disclaimer to proceed.");
      return;
    }
    // Handle form submission
    sendEmail({
      name: formData.firstName + " " + formData.lastName,
      message: `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Property ID: ${formData.propertyId}
      Investment Amount: ${formData.investmentAmount}
      Investment Experience: ${formData.investmentExperience}
      Investment Goals: ${formData.investmentGoals}
      Additional Information: ${formData.additionalInfo}
      `,
      email: formData.email,
    }).then(() => {
      // clear the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        propertyId: "",
        investmentAmount: "",
        investmentExperience: "",
        investmentGoals: "",
        additionalInfo: "",
        disclaimerAccepted: false,
      });
      setEmailSent(true);
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className="w-full bg-[#1E1E1E] py-16">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl xl:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-300 mb-8">
              Fill out the form below to start your investment journey with us.
              We&apos;ll get back to you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Select Property</label>
                <select
                  name="propertyId"
                  value={formData.propertyId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
                  required
                >
                  <option value="">Choose a property</option>
                  {properties.map((property) => (
                    <option key={property.id} value={property.id}>
                      {property.title} - {property.location} (
                      {property.investmentAmount})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white mb-2">
                  Investment Amount
                </label>
                <input
                  type="text"
                  name="investmentAmount"
                  value={formData.investmentAmount}
                  onChange={handleChange}
                  placeholder="Enter your investment amount"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2">
                  Investment Experience
                </label>
                <select
                  name="investmentExperience"
                  value={formData.investmentExperience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
                  required
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="experienced">Experienced</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2">
                  Investment Goals
                </label>
                <select
                  name="investmentGoals"
                  value={formData.investmentGoals}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
                  required
                >
                  <option value="">Select your investment goals</option>
                  <option value="long-term">Long-term capital growth</option>
                  <option value="income">Regular rental income</option>
                  <option value="both">Both capital growth and income</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your investment preferences or any questions you have"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="disclaimerAccepted"
                  checked={formData.disclaimerAccepted}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#B69A3E] focus:ring-[#B69A3E]"
                  required
                />
                <label className="text-sm text-gray-300">
                  I have read and understood the investment disclaimer at the
                  bottom of the page. I acknowledge that property investment
                  involves risks and I accept these risks.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#B69A3E] text-white py-3 rounded hover:bg-[#A0882E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.disclaimerAccepted}
                onSubmit={handleSubmit}
              >
                Submit Investment Interest
              </button>
              {emailSent && (
                <div className="text-green-500">Email sent successfully</div>
              )}
            </form>
          </div>
          <div className="w-full md:w-1/2 relative">
            <Image
              src={investContactBackground}
              alt="Investment Contact"
              className="rounded-lg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
