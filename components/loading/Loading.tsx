import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-screen h-screen z-50 fixed top-0 left-0 bg-black flex flex-col items-center justify-center gap-y-4">
      <Image
        src="/assets/tapres-logo-transparent.png"
        alt="Tapres Logo"
        width={128}
        height={53}
        className="w-32"
        priority
      />
      <ClipLoader color="#a98f3a" />
    </div>
  );
}
