import React from "react";
import Button from "../button/Button";
import Image from "next/image";

export default function PropertyCard({
  imgUrl,
  title,
  description,
  price,
  clickHandler,
}: {
  imgUrl: string;
  title: string;
  description: string;
  price: string;
  clickHandler?: () => void;
}) {
  return (
    <div
      className="relative w-56 sm:w-64 large-tablet:w-60 md:w-80 lg:w-[325px] xl:w-96 aspect-[392/455] px-[2.5%] py-[3%] flex flex-col items-center  border border-[#DCDCDC] border-solid rounded-lg cursor-pointer large-tablet:mx-auto bg-white"
      onClick={clickHandler}
    >
      <div>
        <img src={imgUrl} alt="" className="w-full aspect-[5/3] mb-2" />
        <div className="w-full flex justify-start mb">
          <h3 className="font-gilroy text-black text-xl">{title}</h3>
        </div>
        <p className="text-black text-sm mb-4">{description}</p>
      </div>
      <div className="w-full flex justify-start mb-2 absolute left-[2.5%] bottom-0">
        <Button white>{price}</Button>
      </div>
    </div>
  );
}
