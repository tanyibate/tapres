import React from "react";
import styles from "./team-member-styles.module.scss";
import Image from "next/image";
import headshot from "@/assets/images/headshot.jpeg";
import aboutUs from "@/assets/images/about-us-background.jpg";
import aboutUsMobile from "@/assets/images/about-us-background-mobile.jpg";

export default function TeamMembers() {
  return (
    <section className="w-full max-w-screen-xl flex justify-center mx-auto md:px-8 md:pb-8 relative">
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
          <h2 className="font-bold font-gilroy text-xl md:text-2xl">Julia</h2>
          <div className="space-y-4">
            <p className="text-xs lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              itaque quas quibusdam architecto nostrum repudiandae, ab
              recusandae iure totam officia doloremque? Sit quam, quod ipsam
              recusandae vel nisi reprehenderit itaque?
            </p>
            <p className="text-xs lg:text-base">
              <span className="text-gold">Lorem ipsum dolor: </span>Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Praesentium ut
              fugiat molestiae voluptate reiciendis alias, unde error dolor!
            </p>
            <p className="text-xs lg:text-base">
              <span className="text-gold">Lorem ipsum dolor sit: </span>Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ut
              fugiat molestiae voluptate reiciendis alias, unde error dolor!
            </p>
            <p className="text-xs lg:text-base">
              <span className="text-gold">Lorem ipsum dolor: </span>Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Praesentium ut
              fugiat molestiae voluptate reiciendis alias, unde error dolor!
            </p>
          </div>
        </div>
        <div className={styles.img_container}>
          <Image
            src={headshot}
            alt=""
            className="relative w-9/12 h-5/6 md:w-8/12 md:h-3/4"
          />
        </div>
      </div>
      <div className="w-screen hidden md:block absolute bottom-0 mx-auto z-[-5] h-1/6 bg-[#EAEAEA]"></div>
    </section>
  );
}
