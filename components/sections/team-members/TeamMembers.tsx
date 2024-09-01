import React from "react";
import styles from "./team-member-styles.module.scss";
import Image from "next/image";
import headshot from "@/assets/images/modified_headshot.jpg";
import aboutUs from "@/assets/images/about-us-background.jpg";
import aboutUsMobile from "@/assets/images/about-us-background-mobile.jpg";

export default function TeamMembers() {
  return (
    <section
      className="w-full max-w-screen-xl flex justify-center mx-auto md:px-8 md:pb-8 relative"
      id="team-members-section"
    >
      <div className={styles.container}>
        <Image
          src={aboutUsMobile}
          alt=""
          className="w-full opacity-25 md:hidden"
        />
        <Image
          src={aboutUs}
          alt=""
          className="w-full opacity-25 hidden md:block"
        />
        <div className={styles.square_container + " hidden md:grid"}>
          <div className="darker-square"></div>
          <div className="lighter-square"></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
          <div></div>
          <div className="lighter-square"></div>
        </div>
        <div className={styles.square_container + " grid md:hidden"}>
          <div></div>
          <div className="darker-square"></div>
          <div></div>
          <div className="lighter-square"></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
          <div className="darker-square"></div>
          <div className="lighter-square"></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
        </div>
        <div
          className={
            styles.text_overlay +
            " text-white pl-8 pt-10 pr-4 md:pr-2 lg:pl-20 md:pt-20"
          }
        >
          <h2 className="font-bold font-gilroy text-xl md:text-2xl">Peter</h2>
          <div className="space-y-4">
            <p className="text-xs lg:text-base">
              Peter is founder and Managing Director of Tapres LTD. He transfers
              the constant changes in the IT industry unto the property market
              to provide high innovative next generation housing for tenants and
              investors. He has done the one year master mind Programme with
              Property Investment Network-PIN
            </p>
            <p className="text-xs lg:text-base">
              <span className="text-gold">IT Security Architect: </span>Over 20
              years as an IT consultant with many household name companies. He
              is very creative and collaborates other people to bring about
              meaning changes for people and companies.
            </p>
          </div>
        </div>
        <div className={styles.img_container}>
          <Image
            src={headshot}
            alt=""
            className="relative w-9/12 h-5/6 md:w-8/12 md:h-3/4"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="w-screen hidden md:block absolute bottom-0 mx-auto z-[-5] h-1/6 bg-[#EAEAEA]"></div>
    </section>
  );
}
