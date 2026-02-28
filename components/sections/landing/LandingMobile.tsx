import styles from "./landing-mobile-styles.module.scss";
import Image from "next/image";
import landingImage from "@/assets/images/landing-background.jpg";
import Button from "@/components/button/Button";
import { urlFor } from "@/sanity/lib/client";

interface LandingMobileProps {
  data?: any;
}

export default function LandingMobile({ data }: LandingMobileProps) {
  const heading = data?.heading || "";
  const tagline = data?.tagline || "";
  const ctaText = data?.ctaText || "";
  const ctaLink = data?.ctaLink || "#";

  const bgSrc = data?.backgroundImage
    ? urlFor(data.backgroundImage).width(1280).url()
    : "";

  return (
    <div className={styles.container + " xl:hidden"}>
      <div className={styles.square_container}>
        <div className="lighter-square"></div>
        <div className="darker-square"></div>
        <div className="darker-square"></div>
        <div className="lighter-square"></div>
      </div>
      {typeof bgSrc === "string" ? (
        <img src={bgSrc} className={styles.background_image} alt="" />
      ) : (
        <Image src={bgSrc} className={styles.background_image} alt="" />
      )}

      <div className={styles.text_background_grid_container}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="lighter-square"></div>
        <div className="absolute top-1/3 bg-transparent gap-y-4 flex flex-col left-8">
          <div className="text-2xl sm:text-3xl text-gold bg-transparent font-bold">
            {heading}
          </div>
          <div className="text-4xl sm:text-7xl font-gilroy font-bold text-white bg-transparent">
            {tagline.includes("\n")
              ? tagline.split("\n").map((line: string, i: number) => (
                  <span key={i}>
                    {line}
                    {i < tagline.split("\n").length - 1 && <br />}
                  </span>
                ))
              : (
                <>
                  Next Generation <br />
                  Homes
                </>
              )}
          </div>
          <div className="pt-8 bg-transparent">
            <a href={ctaLink}>
              <Button white>{ctaText}</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
