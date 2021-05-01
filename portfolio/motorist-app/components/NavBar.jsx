import Link from "next/link";
import { getAllCategoryNames } from "../lib/trivia";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  return (
    <nav className="h-8 relative from-primary to-base">
      <Link href="https://home.com">
        <a>Async JavaScript</a>
      </Link>
      <div className="absolute top-0 right-1">
        <input type="checkbox" id="hamburger-check" />
        <div></div>
        <ul className="nav-options"></ul>
      </div>
    </nav>
  );
}

export default NavBar;
