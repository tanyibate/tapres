import PropertyCard from "@/components/property-card/PropertyCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Properties() {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-2 px-8 2xl:px-0">
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl xl:text-4xl font-bold text-[#1E1E1E]">
          Properties
        </h2>
      </div>
      <Swiper spaceBetween={10} loop centeredSlides slidesPerView={1.3}>
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
      </Swiper>
    </div>
  );
}
