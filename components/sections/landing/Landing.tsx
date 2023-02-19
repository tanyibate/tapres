import React from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import LandingDesktop from "./LandingDesktop";
import LandingMobile from "./LandingMobile";

export default function Landing() {
  const { width } = useWindowDimensions();
  return (
    <div>
      <LandingDesktop />
      <LandingMobile />
    </div>
  );
}
