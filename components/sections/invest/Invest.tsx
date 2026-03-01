import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import investImage from "@/assets/images/invest-image.jpg";
import { urlFor } from "@/sanity/lib/client";

interface InvestProps {
  data?: any;
}

export default function Invest({ data }: InvestProps) {
  const heading = data?.heading || "";
  const paragraph1 = data?.paragraph1 || "";
  const paragraph2 = data?.paragraph2 || "";
  const ctaText = data?.ctaText || "";
  const ctaLink = data?.ctaLink || "#";

  const imageSrc = data?.image
    ? urlFor(data.image).width(800).url()
    : "";

  return (
    <section
      className="w-full flex flex-col  items-center justify-center md:flex-row max-w-screen-lg mx-auto py-10 xl:py-12 gap-y-8"
      id="invest-section"
    >
      <div className="w-full md:flex-1 pl-8 border-l-4 border-gold">
        <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-[#1E1E1E] after:content-[''] after:block after:w-12 after:h-[3px] after:bg-gold after:mt-2">
          {heading}
        </h2>
        <div className="text-sm xl:text-base text-[#3A3A3A] flex flex-col gap-y-6 mb-4 pr-2 mt-3">
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>
        <div className="mt-8">
          <a href={ctaLink}>
            <Button white>{ctaText}</Button>
          </a>
        </div>
      </div>
      <div className="w-full md:flex-1 pl-8 md:pl-0 relative block min-h-full">
        {typeof imageSrc === "string" ? (
          <img
            src={imageSrc}
            alt="Tapres investment property"
            className="w-full"
          />
        ) : (
          <Image
            src={imageSrc}
            alt="Tapres investment property"
            className="w-full"
          />
        )}
      </div>
    </section>
  );
}
