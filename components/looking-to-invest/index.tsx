import React from "react";

interface LookingToInvestProps {
  data?: any;
}

export default function LookingToInvest({ data }: LookingToInvestProps) {
  const heading = data?.heading || "";
  const bodyText = data?.bodyText || "";

  return (
    <div className="w-full bg-white lg:px-6 lg:py-8 flex justify-center items-center">
      <div className="bg-[#1e1e1e] w-full lg:w-[90%] py-10 px-6 flex flex-col items-center space-y-4 text-center">
        <div className="text-2xl lg:text-4xl xl:text-5xl font-gilroy text-white after:content-[''] after:block after:w-16 after:h-1 after:bg-gold after:mt-3 after:mx-auto">
          {heading}
        </div>
        <div className="max-w-[80%] lg:text-lg text-white font-thin">
          {bodyText}
        </div>
      </div>
    </div>
  );
}
