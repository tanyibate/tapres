import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import investImage from "@/assets/images/invest-image.jpg";

export default function Invest() {
  return (
    <section className="w-full flex flex-col  items-center justify-center md:flex-row max-w-screen-xl mx-auto py-16 gap-y-12">
      <div className="w-full md:flex-1 pl-8">
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
        <Button white>Know More</Button>
      </div>
      <div className="w-full md:flex-1 pl-8 md:pl-0 relative block min-h-full">
        <Image src={investImage} alt="" width={400} className="w-full" />
      </div>
    </section>
  );
}
