import Button from "../button/Button";
import Hamburger from "hamburger-react";
import styles from "./navbar-styles.module.scss";
import { useState } from "react";
import MobileMenu from "../mobile-menu/MobileMenu";

export default function Navbar({ route }: { route: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed right-0 z-50 flex justify-between px-12 w-full items-center h-20 ${
          route === "/" ? "bg-black" : "bg-white"
        }`}
      >
        <img
          src="/assets/tapres-logo-transparent.png"
          alt=""
          className="w-24"
        />
        <ul className={`text-lg items-center gap-x-12 hidden xl:flex`}>
          {["Home", "About", "Properties", "Invest"].map((item, index) => {
            return (
              <li
                className={`${
                  route === "/" ? "text-white" : "text-black"
                } cursor-pointer hover:text-gold`}
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
            <a href="/#contact-section">
              <Button white>Contact</Button>
            </a>
          </li>
        </ul>
        <div className="xl:hidden">
          <Hamburger
            color="#B69A3E"
            size={48}
            toggled={isMobileMenuOpen}
            toggle={setIsMobileMenuOpen}
          />
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        route={route}
      />
    </>
  );
}
