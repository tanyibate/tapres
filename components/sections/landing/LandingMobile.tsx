import styles from "./landing-mobile-styles.module.scss";

export default function LandingMobile() {
  return (
    <div className={styles.container + " xl:hidden"}>
      <div className={styles.background_image}></div>
    </div>
  );
}
