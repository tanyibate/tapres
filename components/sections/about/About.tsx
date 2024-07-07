import React from "react";

export default function About() {
  return (
    <section
      className="w-full flex flex-col lg:flex-row xl:justify-between py-16 xl:py-36 max-w-screen-xl max-h-fit mx-auto gap-y-4 lg:gap-y-0 lg:px-8 2xl:px-0"
      id="about-section"
    >
      <div className="w-full lg:w-1/2  relative">
        <iframe
          src="https://www.youtube.com/embed/sssrfVJUdFk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-11/12 lg:w-full aspect-video rounded-tr-xl rounded-br-xl lg:rounded-xl"
        ></iframe>
        <div className="absolute top-0 left-0 h-full w-full grid grid-cols-4 grid-rows-3 hidden">
          <div className="darker-square-video"></div>
          <div className="lighter-square"></div>
          <div className="darker-square-video"></div>
          <div className="lighter-square"></div>
          <div className="lighter-square"></div>
          <div className="darker-square-video"></div>
          <div className="lighter-square"></div>
          <div className="darker-square-video"></div>
          <div className="darker-square-video"></div>
          <div className="lighter-square"></div>
          <div className="darker-square-video"></div>
          <div className="lighter-square"></div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-y-2 items-start justify-center px-8 lg:px-0 lg:pl-4">
        <h2 className="text-2xl xl:text-4xl font-bold text-[#1E1E1E]">About</h2>
        <div className="text-lg text-[#3A3A3A] flex flex-col gap-y-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quisquam tenetur nemo excepturi atque!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            veniam, suscipit magnam quibusdam ipsa eum rem odio officiis.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            officia quaerat non recusandae? Odio, esse? Sed doloremque aut et
            earum quam, ipsum vero ex ea voluptas eius repudiandae voluptatibus
            id similique. Similique expedita saepe, eius tenetur autem
            architecto dolore!
          </p>
        </div>
      </div>
    </section>
  );
}
