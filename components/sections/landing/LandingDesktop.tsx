import styles from "./landing-styles.module.scss";
import Image from "next/image";
import landingImage from "@/assets/images/landing-background.jpg";
import Button from "@/components/button/Button";
import { urlFor } from "@/sanity/lib/client";

interface LandingDesktopProps {
  data?: any;
}

export default function Landing({ data }: LandingDesktopProps) {
  const arrayOfBlankTextBackgroundSquares = Array.from(Array(12).keys());

  const heading = data?.heading || "";
  const tagline = data?.tagline || "";
  const ctaText = data?.ctaText || "";
  const ctaLink = data?.ctaLink || "#";

  const bgSrc = data?.backgroundImage
    ? urlFor(data.backgroundImage).width(1920).url()
    : "";

  return (
    <div
      className="w-full relative hidden xl:block"
      style={{ backgroundColor: "#282828" }}
    >
      <div className={styles.square_container}>
        <div className={styles.grid_layout}>
          <div></div>
          <div></div>
          <div></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
          <div className="lighter-square"></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="darker-square"></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
          <div className="lighter-square"></div>
          <div></div>
          <div></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
        </div>
      </div>
      {typeof bgSrc === "string" ? (
        <img src={bgSrc} alt="" className="w-full opacity-25" />
      ) : (
        <Image src={bgSrc} alt="" className="w-full opacity-25" />
      )}
      <div className={styles.text_background_square_container}>
        <div className={styles.text_background_layout}>
          {arrayOfBlankTextBackgroundSquares.map((square, index) => {
            return square != arrayOfBlankTextBackgroundSquares.length - 1 ? (
              <div
                className={styles.text_background_square}
                key={"squares" + index}
              ></div>
            ) : (
              <div key={"squares" + index}></div>
            );
          })}
        </div>
        <div className={styles.text_container}>
          <div>
            <p className={styles.company_title}>{heading}</p>
            <p className={styles.company_slogan + " title"}>
              {tagline.includes("\n")
                ? tagline.split("\n").map((line: string, i: number) => (
                    <span key={i}>
                      {line}
                      {i < tagline.split("\n").length - 1 && <br />}
                    </span>
                  ))
                : tagline}
            </p>
            <div className="pt-8 bg-transparent">
              <a href={ctaLink}>
                <Button white>{ctaText}</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
