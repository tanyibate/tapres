import React from "react";

export default function About() {
  return (
    <section
      className="w-full flex flex-col lg:flex-row xl:justify-between py-16 max-w-screen-xl max-h-fit mx-auto gap-y-4 lg:gap-y-0 lg:px-8 2xl:px-0"
      id="about-section"
    >
      <div className="w-full lg:w-1/4  relative">
        <iframe
          src="https://www.youtube.com/embed/2Mj7CIla3L4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full rounded-tr-xl rounded-br-xl lg:rounded-xl"
        ></iframe>
      </div>
      <div className="w-full lg:w-3/4 flex flex-col gap-y-2 items-start  px-8 lg:px-0 lg:pl-4">
        <h2 className="text-2xl xl:text-4xl font-bold text-[#1E1E1E]">
          About Tapres
        </h2>
        <div className="text-lg text-[#3A3A3A] space-y-2">
          <p>
            Tapres limited was founded in 2022 with the mission to provide
            Houses of Multiple Occupancy (HMO's) to professional by buying,
            renovate, re-mortgage and rent using investor’s money and bridging
            loans. We also provide home away from home by providing high quality
            Serviced accommodation(SA).
          </p>
          <div>
            <strong>Our Mission</strong>
            <p>
              To use high professional approach to supply quality next
              generation properties to tenants and investors, setting high
              standards across the property industry. We go the extra mile to
              make our tenants feel valued.
            </p>
          </div>
          <div>
            <strong>Our Values</strong>
            <p>
              Tenants are primary focus of that we do. We are honest,
              Trustworthy, transparent and respectful in providing high quality
              property to our customers.
            </p>
          </div>
          <div>
            <strong>Our Vision</strong>
            <p>
              Our vision is to provide high quality property to tenants
              worldwide irrespective of nationality, culture, class or
              education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
