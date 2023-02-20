import React, { useState } from "react";

export default function Slider({
  slides,
  numOfSlidesPerPage,
  inset,
  joined,
  top,
  bottom,
  focusOnCenter,
}: {
  slides: any;
  numOfSlidesPerPage: number;
  inset?: boolean;
  joined?: boolean;
  top?: boolean;
  bottom?: boolean;
  focusOnCenter?: boolean;
}) {
  const [visibleSlides, setVisibleSlides] = useState(
    slides.slice(0, numOfSlidesPerPage)
  );
  const [currentSlide, setCurrentSlide] = useState(
    numOfSlidesPerPage % 2 === 0 ? 0 : 1
  );
  return (
    <div className="w-full">
      {top && <div></div>}
      <div>
        {inset && (
          <div
            className={`flex absolute w-10/12 ${
              joined
                ? "justify-end gap-x-2 bottom-2 right-4"
                : "justify-between top-1/2 -translate-y-1/2 mx-auto"
            }`}
          ></div>
        )}
        <div className="flex justify-between"></div>
      </div>
      {bottom && <div></div>}
    </div>
  );
}
