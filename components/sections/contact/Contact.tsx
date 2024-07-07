import Button from "@/components/button/Button";
import React from "react";

export default function Contact() {
  return (
    <section className="bg-[#1E1E1E] w-full py-16" id="contact-section">
      <div className="w-full max-w-screen-xl px-8 2xl:px-0 mx-auto text-white">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col items-center gap-y-2 text-center">
            <h2 className="font-gilroy font-bold  text-lg md:text-5xl">
              Send a message to Tapres
            </h2>
            <p className="text-sm">
              Just submit your details and we&apos;ll be in touch shortly.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-x-4 items-center">
                <div className="w-8">
                  <img
                    src="/assets/phone-icon.png"
                    alt=""
                    className="h-6 md:h-8"
                  />
                </div>
                <span className="md:text-xl font-bold">07648344343</span>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="w-8">
                  <img
                    src="/assets/mail-icon.png"
                    alt=""
                    className="h-6 md:h-8"
                  />
                </div>
                <span className="md:text-xl font-bold">test@mail.com</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="fullname"
                  className="text-sm md:text-lg font-bold"
                >
                  Full Name
                </label>
                <input type="text" name="fullname" id="fullname" />
              </div>
              <div className="flex w-full flex-col md:flex-row-reverse gap-y-4 md:gap-y-0 md:gap-x-6">
                <div className="space-y-1 flex-1">
                  <label
                    htmlFor="email"
                    className="text-sm md:text-lg font-bold"
                  >
                    Email
                  </label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="space-y-1 flex-1">
                  <label
                    htmlFor="phonenumber"
                    className="text-sm md:text-lg font-bold"
                  >
                    Phone Number
                  </label>
                  <input type="text" name="phonenumber" id="phonenumber" />
                </div>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-sm md:text-lg font-bold"
                >
                  Message
                </label>
                <textarea name="message" id="message" rows={10}></textarea>
              </div>
              <Button white> Send a Request</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
