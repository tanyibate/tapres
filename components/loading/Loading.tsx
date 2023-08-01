import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className="w-screen h-screen z-50 fixed top-0 left-0 bg-black flex flex-col items-center justify-center gap-y-4">
      <img src="/assets/tapres-logo-transparent.png" alt="" className="w-32" />
      <ClipLoader color="#ffffff" />
    </div>
  );
}
