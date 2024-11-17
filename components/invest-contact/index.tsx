import React from "react";
import Image from "next/image";
import investContactBackground from "@/assets/images/invest-background.png";
import { useForm } from "react-hook-form";
import Button from "../button/Button";

const Input = ({
  label,
  register,
  required,
  type = "text",
  pattern,
  errorMessage,
  labelText,
}: {
  labelText: string;
  label: string;
  register: any;
  required: boolean;
  type?: string;
  pattern?: RegExp;
  errorMessage?: string;
}) => (
  <div className="space-y-1 flex-1">
    <div className="flex gap-x-2">
      <label htmlFor={label} className="text-white">
        {labelText}
      </label>
      <div className="text-red-500">{errorMessage}</div>
    </div>
    <input
      type={type}
      id={label}
      {...register(label, { required, pattern })}
      className={`text-sm md:text-lg font-bold text-white ${
        errorMessage && "border border-red-500 text-red-500"
      }`}
    />
  </div>
);

export default function InvestContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="relative flex-1 overflow-y-scroll">
      <Image
        src={investContactBackground}
        alt="contact background"
        fill
        className="h-full w-full object-cover object-center"
      />
      <div className="w-full h-full flex flex-col lg:flex-row relative">
        <div className="bg-[#1e1e1e] opacity-85  w-full h-[75%] lg:w-[55%] lg:h-full relative"></div>
        <div className="absolute w-full lg:h-full lg:w-1/2 top-0 left-0 flex justify-center items-center">
          <div className="w-full px-6 py-6">
            <div className="font-gilroy text-lg lg:text-3xl text-white mb-4">
              Get In Touch With Us
            </div>
            <form
              className="space-y-4 w-full"
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <div className="flex w-full flex-col md:flex-row-reverse gap-y-4 md:gap-y-0 md:gap-x-6">
                <Input
                  label="name"
                  register={register}
                  required
                  errorMessage={errors.name && "Name is required"}
                  labelText="Name"
                />
                <Input
                  label="email"
                  register={register}
                  required
                  type="email"
                  errorMessage={errors.Email && "Email is required"}
                  labelText="Email"
                />
              </div>
              <Button white>Enquire Now</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
