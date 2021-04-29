import Link from "next/link";
import { getAllCategoryNames } from "../lib/trivia";
function NavBar() {
  return (
    <nav className="nav-bar">
      <Link href="https://home.com">
        <a>Trivia 4All</a>
      </Link>
      <div className="hamburger">
        <input type="checkbox" id="hamburger-check" />
        <div></div>
        <ul className="nav-options">
          <li id="nav-item-leaderboard">
            <Link href="#">
              <a className="primary-nav-item">Leaderboard</a>
            </Link>
          </li>
          <li id="nav-item-categories">
            <label htmlFor="categories-check" className="primary-nav-item">
              Categories
            </label>
            <input type="checkbox" id="categories-check" />
            <span></span>
            <ul className="sub-nav">
              {getAllCategoryNames().map((cat) => (
                <li className="sub-nav-category-item">
                  <a href={`/${cat}`}> {cat}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href="#">
              <a className="primary-nav-item">Send Comments</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="primary-nav-item">Creators</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
