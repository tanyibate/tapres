import React from "react";
import LookingToInvest from "@/components/looking-to-invest";
import InvestContact from "@/components/invest-contact";

export default function Invest() {
  return (
    <main className="w-full pt-[120px] h-full flex flex-col">
      <LookingToInvest />
      <InvestContact />
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg font-bold text-[#1E1E1E] mb-3">
            Investment Disclaimer
          </h2>
          <div className="space-y-2 text-sm text-[#3A3A3A]">
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
            <p className="font-medium text-xs">
              By proceeding with an investment, you acknowledge that you have
              read and understood this disclaimer and accept the risks
              associated with property investment.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
