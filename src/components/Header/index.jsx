import React, { useState } from "react";
import styles from "../../styles/Header.css?";

function Header() {
  const [show, setShow] = useState("close");

  const handleShowNavigation = () => {
    show === "close" ? setShow("open") : setShow("close");
  };
  return (
    <>
      <header>
        <div>
          <span>
            <p>{"<"}</p>
            <h1>StivenDev</h1>
            <p>{"/>"}</p>
          </span>
          <button onClick={handleShowNavigation}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <line
                x1="4"
                y1="6"
                x2="20"
                y2="6"
              />
              <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
              />
              <line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
              />
            </svg>
          </button>
        </div>
        <nav className="container__Navigation">
          <ul className={`Container-Header-selected ${show}`}>
            <li>
              <a href="#AboutMe">About Me</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Footer">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export { Header };
