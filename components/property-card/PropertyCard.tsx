import React from "react";
import Button from "../button/Button";

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
      className="w-56 sm:w-64 large-tablet:w-60 md:w-80 lg:w-[325px] xl:w-96 aspect-[392/455] px-[2.5%] py-[3%] flex flex-col items-center justify-between border border-[#DCDCDC] border-solid rounded-lg cursor-pointer large-tablet:mx-auto bg-white"
      onClick={clickHandler}
    >
      <img src={imgUrl} alt="" className="w-full" />
      <div className="w-full flex justify-start">
        <h3 className="font-gilroy text-black text-xl">{title}</h3>
      </div>
      <p className="lg:text-lg text-black text-sm md:text-base">
        {description}
      </p>
      <div className="w-full flex justify-start">
        <Button white>{price}</Button>
      </div>
    </div>
  );
}
