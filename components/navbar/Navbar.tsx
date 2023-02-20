import Button from "../button/Button";
import Hamburger from "hamburger-react";

export default function Navbar() {
  return (
    <nav className="fixed top-10 right-0 z-50  flex   justify-between px-12 w-full items-center">
      <img src="/assets/tapres-logo-transparent.png" alt="" className="w-32" />
      <ul className="text-white text-xl items-center gap-x-12 hidden xl:flex">
        <li>
          <a className="cursor-pointer">Home</a>
        </li>
        <li className="cursor-pointer">
          <a>Properties</a>
        </li>
        <li className="cursor-pointer">
          <a>Projects</a>
        </li>
        <li className="cursor-pointer">
          <a>Invest</a>
        </li>
        <li className="cursor-pointer">
          <Button>Contact</Button>
        </li>
      </ul>
      <div className="xl:hidden">
        <Hamburger color="#B69A3E" size={48} />
      </div>
    </nav>
  );
}
