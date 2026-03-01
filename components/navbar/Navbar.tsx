import Button from "../button/Button";
import Hamburger from "hamburger-react";
import styles from "./navbar-styles.module.scss";
import { useState } from "react";
import MobileMenu from "../mobile-menu/MobileMenu";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";

interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
  isExternal?: boolean;
}

interface NavData {
  logo?: any;
  navLinks?: NavLink[];
}

export default function Navbar({
  route,
  navData,
}: {
  route: string;
  navData?: NavData | null;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoSrc = navData?.logo
    ? urlFor(navData.logo).width(192).url()
    : "";

  const links = navData?.navLinks || [];

  return (
    <>
      <nav
        className={`fixed right-0 z-50 flex justify-between px-6 xl:px-10 w-full items-center h-14 xl:h-16 transition-colors duration-300 ${
          route === "/"
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-white/80 backdrop-blur-md border-b border-black/10"
        }`}
      >
        {typeof logoSrc === "string" && logoSrc.startsWith("http") ? (
          <img src={logoSrc} alt="Tapres Logo" className="w-16 xl:w-20 h-auto" />
        ) : (
          <Image
            src={logoSrc}
            alt="Tapres Logo"
            width={96}
            height={40}
            className="w-16 xl:w-20"
            priority
          />
        )}
        <ul className={`text-sm items-center gap-x-6 xl:gap-x-8 hidden xl:flex`}>
          {links
            .filter((link) => !link.isButton)
            .map((link, index) => (
              <li
                className={`${
                  route === "/" ? "text-white" : "text-black"
                } cursor-pointer hover:text-gold transition-colors duration-200`}
                key={"navbar-item-" + index}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}

          {links
            .filter((link) => link.isButton)
            .map((link, index) => (
              <li className="cursor-pointer" key={"navbar-btn-" + index}>
                <a href={link.href}>
                  <Button white>{link.label}</Button>
                </a>
              </li>
            ))}
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
        navLinks={links}
      />
    </>
  );
}
