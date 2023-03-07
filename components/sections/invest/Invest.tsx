import React from "react";

export default function Invest() {
  return (
    <div className="w-full flex flex-col  items-center justify-center md:flex-row max-w-screen-xl mx-auto py-16">
      <div className="w-full md:w-1/2 pl-8">
        <h2 className="text-2xl xl:text-4xl font-bold text-[#1E1E1E]">
          Invest
        </h2>
        <div className="text-lg text-[#3A3A3A] flex flex-col gap-y-10 mb-6 pr-2">
          <p>
            We focus on buy-to-hold investment properties in Liverpool, Reading
            High Wycombe. These range from HMOs to flats.
          </p>
          <p>
            Tapres offers investors a convenient way for investors to be
            involved in property and achieve a dafe yet excellent return on
            their capital.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 pl-8 md:pl-0">
        <img src="/assets/invest-image.jpg" alt="" className="w-full" />
      </div>
    </div>
  );
}