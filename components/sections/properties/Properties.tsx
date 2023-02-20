import PropertyCard from "@/components/property-card/PropertyCard";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Properties() {
  const slidesPerViewMobileRatio = 1.75 / 414;
  const slidesPerViewTabletRatio = 2.3 / 768;

  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleSize = () => {
    if (typeof window !== "undefined") {
      // browser code
      if (window.innerWidth < 640) {
        setSlidesPerView(slidesPerViewMobileRatio * window.innerWidth);
      } else if (window.innerWidth < 800) {
        setSlidesPerView(slidesPerViewTabletRatio * window.innerWidth);
      }
    }
  };
  useEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize, false);
  }, []);
  return (
    <div className="w-full max-w-screen-xl mx-auto py-2  2xl:px-0 large-tablet:px-8">
      <div className="flex justify-between mb-8 px-8 large-tablet:px-0">
        <h2 className="text-2xl xl:text-4xl font-bold text-[#1E1E1E]">
          Properties
        </h2>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        loop
        centeredSlides
      >
        <SwiperSlide>
          <PropertyCard
            {...{
              imgUrl: "/assets/property-card-house-1.jpg",
              title: "Luxury House",
              description:
                "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
              price: "$10000",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard
            {...{
              imgUrl: "/assets/property-card-house-1.jpg",
              title: "Luxury House 2",
              description:
                "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
              price: "$10000",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard
            {...{
              imgUrl: "/assets/property-card-house-1.jpg",
              title: "Luxury House 3",
              description:
                "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
              price: "$10000",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard
            {...{
              imgUrl: "/assets/property-card-house-1.jpg",
              title: "Luxury House ",
              description:
                "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
              price: "$10000",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard
            {...{
              imgUrl: "/assets/property-card-house-1.jpg",
              title: "Luxury House 2",
              description:
                "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
              price: "$10000",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard
            {...{
              imgUrl: "/assets/property-card-house-1.jpg",
              title: "Luxury House 3",
              description:
                "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
              price: "$10000",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
