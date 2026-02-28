import React from "react";

interface AboutProps {
  data?: any;
}

export default function About({ data }: AboutProps) {
  const heading = data?.heading || "";
  const bodyText = data?.bodyText || "";
  const mission = data?.mission || { title: "", text: "" };
  const values = data?.values || { title: "", text: "" };
  const vision = data?.vision || { title: "", text: "" };
  const youtubeUrl = data?.youtubeUrl || "";

  return (
    <section
      className="w-full flex flex-col-reverse lg:flex-row xl:justify-between py-16 max-w-screen-xl max-h-fit mx-auto gap-y-4 lg:gap-y-0 lg:px-8 2xl:px-0"
      id="about-section"
    >
      <div className="w-full lg:w-5/12  relative">
        <iframe
          src={youtubeUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-11/12 rounded-tr-xl rounded-br-xl lg:rounded-xl mx-auto aspect-[9/16]"
        ></iframe>
      </div>
      <div className="w-full lg:w-7/12 flex flex-col gap-y-4 items-start px-8 lg:px-0 lg:pl-4">
        <h2 className="text-2xl xl:text-4xl font-bold text-[#1E1E1E] after:content-[''] after:block after:w-16 after:h-1 after:bg-gold after:mt-2">
          {heading}
        </h2>
        <div className="text-lg text-[#3A3A3A] space-y-4">
          <p>{bodyText}</p>
          <div>
            <strong>{mission.title}</strong>
            <p>{mission.text}</p>
          </div>
          <div>
            <strong>{values.title}</strong>
            <p>{values.text}</p>
          </div>
          <div>
            <strong>{vision.title}</strong>
            <p>{vision.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
