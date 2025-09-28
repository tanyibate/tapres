import React from "react";
import Button from "../button/Button";
import Image from "next/image";

export default function PropertyCard({
  imgUrl,
  title,
  description,
  price,
  openGallery,
  href,
}: {
  imgUrl: string;
  title: string;
  description: string;
  price: string;
  openGallery?: () => void;
  href?: string;
}) {
  return (
    <div className="relative w-56 sm:w-64 large-tablet:w-60 md:w-80 lg:w-[325px] xl:w-96 px-[2.5%] py-[3%] flex flex-col items-center  border border-[#DCDCDC] border-solid rounded-lg large-tablet:mx-auto bg-white">
      <div>
        <img
          src={imgUrl}
          alt=""
          className="w-full aspect-[5/3] mb-2 cursor-pointer"
          onClick={openGallery}
        />
        <div className="w-full flex justify-start mb">
          <h3 className="font-gilroy text-black text-xl">{title}</h3>
        </div>
        <p className="text-black text-[10px] md:text-sm mb-4">{description}</p>
      </div>
      <div className="w-full flex justify-start">
        {href ? (
          <a
            href={href}
            className="inline-block px-3 py-2 bg-black text-white hover:bg-gray-800 transition-colors rounded"
          >
            {price}
          </a>
        ) : (
          <Button white>{price}</Button>
        )}
      </div>
    </div>
  );
}
