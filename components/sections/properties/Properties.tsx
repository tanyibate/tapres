import PropertyCard from "@/components/property-card/PropertyCard";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import { urlFor } from "@/sanity/lib/client";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Import Swiper styles
import "swiper/css";

interface PropertiesProps {
  properties?: any[];
}

export default function Properties({ properties = [] }: PropertiesProps) {
  const lightGallery = useRef<any>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentProperty, setCurrentProperty] = useState(properties[0]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const slidesPerViewMobileRatio = 1.75 / 414;
  const slidesPerViewTabletRatio = 2.3 / 768;

  const selectProperty = (index: number) => {
    setCurrentProperty(properties[index]);
    setGalleryOpen(true);
  };

  const handleSize = () => {
    if (typeof window !== "undefined") {
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
    return () => window.removeEventListener("resize", handleSize, false);
  }, []);

  useEffect(() => {
    if (galleryOpen) {
      lightGallery.current.openGallery();
    }
  }, [galleryOpen]);

  const getImageUrl = (img: any) => {
    if (typeof img === "string") return img;
    if (img?.asset) return urlFor(img).width(1280).url();
    return "";
  };

  const getPropertyImages = (property: any) => {
    if (!property?.images) return [];
    return property.images.map((img: any) => getImageUrl(img));
  };

  if (!properties.length) return null;

  return (
    <section className="w-full bg-[#EAEAEA] pb-16" id="properties-section">
      <div className="w-full max-w-screen-lg mx-auto py-2  2xl:px-0 large-tablet:px-8">
        <div className="flex justify-between mb-8 px-8 large-tablet:px-0">
          <h2
            className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-[#1E1E1E] after:content-[''] after:block after:w-12 after:h-[3px] after:bg-gold after:mt-2"
            onClick={() => {
              lightGallery.current?.openGallery();
            }}
          >
            Properties
          </h2>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={slidesPerView}
          loop
          centeredSlides
          className="!items-stretch"
          breakpoints={{
            800: {
              centeredSlides: false,
            },
          }}
        >
          {properties.map((property, index) => {
            const imgUrl = property.mainImage
              ? urlFor(property.mainImage).width(800).url()
              : property.imgUrl || "";
            return (
              <SwiperSlide key={property._id || index} className="!h-auto">
                <div className="h-full" onClick={() => selectProperty(index)}>
                  <PropertyCard
                    imgUrl={imgUrl}
                    title={property.title}
                    description={property.description}
                    price={property.ctaLabel || "Book Now"}
                    href={property.bookingUrl}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {currentProperty && (
        <LightGallery
          speed={500}
          plugins={[lgThumbnail]}
          onInit={onInit}
          dynamic
          onBeforeClose={() => {
            setGalleryOpen(false);
          }}
          dynamicEl={[
            ...getPropertyImages(currentProperty).map((src: string) => ({
              src,
              thumb: src,
            })),
            ...(currentProperty.streetViewUrl
              ? [
                  {
                    iframe: true,
                    src: currentProperty.streetViewUrl,
                    thumb:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/1200px-Google_Maps_icon_%282015-2020%29.svg.png",
                  },
                ]
              : []),
          ]}
        ></LightGallery>
      )}
    </section>
  );
}
