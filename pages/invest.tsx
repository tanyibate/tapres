import React from "react";
import LookingToInvest from "@/components/looking-to-invest";
import InvestContact from "@/components/invest-contact";

export default function Invest() {
  return (
    <main className="w-full pt-[120px] h-full flex flex-col">
      <LookingToInvest />
      <InvestContact />
    </main>
  );
}
