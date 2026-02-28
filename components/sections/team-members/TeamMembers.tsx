import React from "react";
import styles from "./team-member-styles.module.scss";
import Image from "next/image";
import headshot from "@/assets/images/modified_headshot.jpg";
import aboutUs from "@/assets/images/about-us-background.jpg";
import aboutUsMobile from "@/assets/images/about-us-background-mobile.jpg";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/client";

interface TeamMembersProps {
  data?: any;
}

export default function TeamMembers({ data }: TeamMembersProps) {
  // Use first member from CMS or fallback to hardcoded
  const member = data?.members?.[0];

  const name = member?.name || "";
  const headshotSrc = member?.headshot
    ? urlFor(member.headshot).width(600).url()
    : "";
  const bgDesktopSrc = member?.backgroundImageDesktop
    ? urlFor(member.backgroundImageDesktop).width(1280).url()
    : "";
  const bgMobileSrc = member?.backgroundImageMobile
    ? urlFor(member.backgroundImageMobile).width(800).url()
    : "";

  return (
    <section
      className="w-full max-w-screen-xl flex justify-center mx-auto md:px-8 md:pb-8 relative"
      id="team-members-section"
    >
      <div className={styles.container}>
        {typeof bgMobileSrc === "string" ? (
          <img
            src={bgMobileSrc}
            alt="About us background"
            className="w-full opacity-25 md:hidden"
          />
        ) : (
          <Image
            src={bgMobileSrc}
            alt="About us background"
            className="w-full opacity-25 md:hidden"
          />
        )}
        {typeof bgDesktopSrc === "string" ? (
          <img
            src={bgDesktopSrc}
            alt="About us background"
            className="w-full opacity-25 hidden md:block"
          />
        ) : (
          <Image
            src={bgDesktopSrc}
            alt="About us background"
            className="w-full opacity-25 hidden md:block"
          />
        )}
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
          <h2 className="font-bold font-gilroy text-xl md:text-2xl after:content-[''] after:block after:w-16 after:h-1 after:bg-gold after:mt-2">
            {name}
          </h2>
          <div className="space-y-4">
            {member?.bio ? (
              <div className="text-xs lg:text-base">
                <PortableText value={member.bio} />
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.img_container}>
          {typeof headshotSrc === "string" ? (
            <img
              src={headshotSrc}
              alt={`${name} - Team Member`}
              className="relative w-9/12 h-5/6 md:w-8/12 md:h-3/4 object-cover"
            />
          ) : (
            <Image
              src={headshotSrc}
              alt={`${name} - Founder and Managing Director of Tapres`}
              className="relative w-9/12 h-5/6 md:w-8/12 md:h-3/4"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>
      <div className="w-screen hidden md:block absolute bottom-0 mx-auto z-[-5] h-1/6 bg-[#EAEAEA]"></div>
    </section>
  );
}
