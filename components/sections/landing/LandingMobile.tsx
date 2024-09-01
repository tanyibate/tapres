import styles from "./landing-mobile-styles.module.scss";
import Image from "next/image";
import landingImage from "@/assets/images/landing-background.jpg";
import Button from "@/components/button/Button";

export default function LandingMobile() {
  return (
    <div className={styles.container + " xl:hidden"}>
      <div className={styles.square_container}>
        <div className="lighter-square"></div>
        <div className="darker-square"></div>
        <div className="darker-square"></div>
        <div className="lighter-square"></div>
      </div>
      <Image src={landingImage} className={styles.background_image} alt="" />

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
            Tapres
          </div>
          <div className="text-4xl sm:text-7xl font-gilroy font-bold text-white bg-transparent">
            Next Generation <br />
            Homes
          </div>
          <div className="pt-8 bg-transparent">
            <a href="#projects-section">
              <Button white>View our Projects</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
