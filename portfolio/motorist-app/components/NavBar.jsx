import Link from "next/link";
import { useRouter } from "next/router";

function NavBar({ section, changeSection }) {
  return (
    <nav className=" w-full bg-primary ">
      <div className="flex justify-end items-center p-2 ">
        <label htmlFor="toggler-check">Night Mode</label>
        <div className="relative mx-2  w-12 h-4 bg-base rounded-full border-opacity-30 border-2 border-solid border-txt-primary">
          <input
            type="checkbox"
            id="toggler-check"
            className="absolute w-full h-full z-10 opacity-10"
          />
          <div className="transition-all w-4 border-primary border-solid border-2 h-full rounded-full bg-txt-base"></div>
        </div>
      </div>
      <ul className="grid grid-cols-3">
        <li
          onClick={() => {
            changeSection("topstories");
          }}
          className={`nav-tab  ${
            section === "topstories" ? "tab-active" : ""
          } `}
        >
          Top
        </li>
        <li
          onClick={() => {
            changeSection("newstories");
          }}
          className={`nav-tab  ${
            section === "newstories" ? "tab-active" : ""
          } `}
        >
          New
        </li>
        <li
          onClick={() => {
            changeSection("beststories");
          }}
          className={`nav-tab  ${
            section === "beststories" ? "tab-active" : ""
          } `}
        >
          Best
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
