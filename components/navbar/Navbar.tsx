import Button from "../button/Button";
import Hamburger from "hamburger-react";
import styles from "./navbar-styles.module.scss";
import { useEffect, useState } from "react";

export default function Navbar({ route }: { route: string }) {
  const [navbarBackgroundOpacity, setNavbarBackgroundOpacity] = useState(0);
  useEffect(() => {
    const onScroll = (e: any) => {
      setNavbarBackgroundOpacity(
        (e.target.documentElement.scrollTop + 120) / window.innerHeight
      );
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [navbarBackgroundOpacity]);
  return (
    <nav
      className={
        "fixed right-0 z-50 flex justify-between px-12 w-full items-center py-5 "
      }
    >
      <div
        className={styles["darker_background"] + " " + styles.navbar_background}
        style={{
          opacity: navbarBackgroundOpacity,
        }}
      ></div>
      <img src="/assets/tapres-logo-transparent.png" alt="" className="w-32" />
      <ul className={`text-xl items-center gap-x-12 hidden xl:flex`}>
        {["Home", "About", "Properties", "Invest"].map((item, index) => {
          return (
            <li
              className={`${
                route === "/" ? "text-white" : "text-black"
              } "cursor-pointer hover:text-gold"`}
              key={"navbar-item-" + index}
            >
              <a
                href={`/#${
                  item === "Home" ? "landing" : item.toLocaleLowerCase()
                }-section`}
              >
                {item}
              </a>
            </li>
          );
        })}

        <li className="cursor-pointer">
          <a href="#contact-section">
            <Button white>Contact</Button>
          </a>
        </li>
      </ul>
      <div className="xl:hidden">
        <Hamburger color="#B69A3E" size={48} />
      </div>
    </nav>
  );
}
