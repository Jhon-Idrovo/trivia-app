import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" bg-primary relative">
      <Link href="/">
        <a>Motorists App</a>
      </Link>
      <div className="absolute right-1 top-0 bot">
        <input
          type="checkbox"
          name=""
          id="hamburger-check"
          className="absolute bottom-0 right-0 h-full w-full opacity-0"
          onChange={() => setIsOpen((isOpen) => !isOpen)}
        />
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul>
        <li>Configuration</li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}

export default NavBar;
