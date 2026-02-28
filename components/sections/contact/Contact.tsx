import Button from "@/components/button/Button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/util/email";
import Image from "next/image";

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
      <label htmlFor={label}>{labelText}</label>
      <div className="text-red-500">{errorMessage}</div>
    </div>
    <input
      type={type}
      id={label}
      {...register(label, { required, pattern })}
      className={`text-sm md:text-lg font-bold focus:ring-2 focus:ring-gold focus:outline-none transition-all duration-200 ${
        errorMessage && "border border-red-500"
      }`}
    />
  </div>
);

interface ContactProps {
  data?: any;
}

export default function Contact({ data }: ContactProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [emailSent, setEmailSent] = useState(false);

  const heading = data?.heading || "";
  const subheading = data?.subheading || "";
  const emailAddress = data?.emailAddress || "";
  const submitButtonText = data?.submitButtonText || "";

  const onEmailSubmit = async () => {
    setEmailSent(true);
  };

  return (
    <section className="bg-[#1E1E1E] w-full py-16" id="contact-section">
      <div className="w-full max-w-screen-xl px-8 2xl:px-0 mx-auto text-white">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col items-center gap-y-2 text-center">
            <h2 className="font-gilroy font-bold text-lg md:text-5xl after:content-[''] after:block after:w-16 after:h-1 after:bg-gold after:mt-2 after:mx-auto">
              {heading}
            </h2>
            <p className="text-sm">{subheading}</p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-x-4 items-center">
                <div className="w-8">
                  <Image
                    src="/assets/mail-icon.png"
                    alt="Email icon"
                    width={32}
                    height={32}
                    className="h-6 md:h-8 w-auto"
                  />
                </div>
                <span className="md:text-xl font-bold">{emailAddress}</span>
              </div>
            </div>
          </div>
          <div>
            <form
              className="space-y-4"
              onSubmit={handleSubmit(async (formData) => {
                sendEmail(formData as any).then(() => {
                  onEmailSubmit();
                });
              })}
            >
              <Input
                label="name"
                register={register}
                required
                errorMessage={errors.name && "Name is required"}
                labelText="Name"
              />
              <div className="flex w-full flex-col md:flex-row-reverse gap-y-4 md:gap-y-0 md:gap-x-6">
                <Input
                  label="email"
                  register={register}
                  required
                  type="email"
                  errorMessage={errors.Email && "Email is required"}
                  labelText="Email"
                />
                <Input
                  label="phoneNumber"
                  register={register}
                  required
                  errorMessage={
                    errors.phoneNumber && "Phone number is invalid"
                  }
                  labelText="Phone Number"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-sm md:text-lg font-bold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={10}
                  {...register("message", { required: true })}
                  className={
                    `${
                      errors.message && "border border-red-500"
                    } w-full p-2 text-white focus:ring-2 focus:ring-gold focus:outline-none transition-all duration-200` +
                    ` ${errors.message ? "border-red-500" : "border-white"}`
                  }
                ></textarea>
              </div>
              <Button white>{submitButtonText}</Button>
              {emailSent && (
                <div className="flex items-center gap-x-2 text-green-400 bg-green-400/10 px-4 py-3 rounded">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Email sent successfully
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
