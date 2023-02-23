import PropertyCard from "@/components/property-card/PropertyCard";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import propertyList from "./propertyList";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Import Swiper styles
import "swiper/css";

export default function Properties() {
  const lightGallery = useRef<any>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentProperty, setCurrentProperty] = useState(propertyList[0]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGallery.current = detail.instance;
      console.log("intialized");
    }
  }, []);

  const slidesPerViewMobileRatio = 1.75 / 414;
  const slidesPerViewTabletRatio = 2.3 / 768;

  const selectProperty = (index: number) => {
    setCurrentProperty(propertyList[index]);
    setGalleryOpen(true);
  };

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

  useEffect(() => {
    if (galleryOpen) {
      lightGallery.current.openGallery();
    }
  }, [galleryOpen]);
  return (
    <div className="w-full max-w-screen-xl mx-auto py-2  2xl:px-0 large-tablet:px-8">
      <div className="flex justify-between mb-8 px-8 large-tablet:px-0">
        <h2
          className="text-2xl xl:text-4xl font-bold text-[#1E1E1E]"
          onClick={() => {
            lightGallery.current.openGallery();
          }}
        >
          Properties
        </h2>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        loop={slidesPerView < 3 ? true : false}
        centeredSlides={slidesPerView < 3 ? true : false}
      >
        {propertyList.map((property, index) => {
          return (
            <SwiperSlide key={index}>
              <div onClick={() => selectProperty(index)}>
                <PropertyCard
                  {...{
                    ...property,
                  }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        onInit={onInit}
        dynamic
        onBeforeClose={() => {
          console.log("before close");
          setGalleryOpen(false);
        }}
        dynamicEl={[
          ...currentProperty.images.map((image) => {
            return {
              src: image,
              thumb: image,
            };
          }),

          {
            iframe: true,
            src: currentProperty.streetView,
            thumb:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/1200px-Google_Maps_icon_%282015-2020%29.svg.png",
          },
        ]}
      ></LightGallery>
    </div>
  );
}
