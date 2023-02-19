import Button from "../button/Button";

export default function Navbar() {
  return (
    <nav className="fixed top-10 right-0 z-50 w-1/2 flex justify-center">
      <ul className="text-white text-xl flex items-center gap-x-12">
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
    </nav>
  );
}
