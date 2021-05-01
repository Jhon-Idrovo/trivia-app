import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  return <nav className="nav-bar"></nav>;
}

export default NavBar;
