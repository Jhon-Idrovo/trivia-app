import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  return (
    <nav className="nav-bar h-12 flex justify-items-end bg-primary text-txt-primary">
      <Link href="/">
        <a>Family Bee</a>
      </Link>
      <ul className="flex justify-items-center content-center">
        <li className="nav-item ">Honey</li>
        <li className="nav-item ">Propolis</li>
        <li className="nav-item ">Supplements</li>
      </ul>
    </nav>
  );
}

export default NavBar;
