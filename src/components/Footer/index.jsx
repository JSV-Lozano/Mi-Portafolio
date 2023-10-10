import React from "react";
import styles from "../../styles/Footer.css?";

function Footer() {
  return (
    <footer id="Footer">
      <div>
        <div>
          <span>
            <p>{"<"}</p>
            <h1>StivenDev</h1>
            <p>{"/>"}</p>
          </span>
          <p className="TextFooter">
            If you liked my work and you need me, I'm ready to talk to you.
          </p>
        </div>
        <div className="container__Contacts">
          <h2>Contacts</h2>
          <div className="contacts">
            <a
              href="mailto:kjsvlozano17104@gmail.com"
              target="_blank"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/mail-ios.svg"
                alt="Mail Icon"
              />
            </a>
            <a
              href="https://www.facebook.com/JhoanStivenV.L/"
              target="_blank"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg"
                alt="Facebook Icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jhoan-stiven-v%C3%A1squez-lozano-3212941b3/"
              target="_blank"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                alt="Linkedin Icon"
              />
            </a>
            <a
              href="http://www.github.com/JSV-Lozano"
              target="_blank"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
                alt="GitHub Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
