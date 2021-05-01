import Link from "next/link";
import { getAllCategoryNames } from "../lib/hn";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  return (
    <nav className="bg-primary ">
      <ul>
        <li className={`${router.pathname === "/top" ? "active" : ""} `}>
          <Link href="/top">
            <a>Top</a>
          </Link>
        </li>
        <li className={`${router.pathname === "/new" ? "active" : ""} `}>
          <Link href="/new">
            <a>New</a>
          </Link>
        </li>
        <li className={`${router.pathname === "/top" ? "active" : ""} `}>
          <Link href="/top">
            <a>Jobs</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
