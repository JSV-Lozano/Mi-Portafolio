import React from "react";
import PDF from "../../assets/Document/CV-Jhoan.pdf";
import styles from "../../styles/Greetings.css?";

function Greetings() {
  return (
    <>
      <section
        id="AboutMe"
        className="Greetings"
      >
        <div className="container_Greetings">
          <h1>Jhoan Vásquez</h1>
          <p className="p_One">Frontend Developer</p>
          <p className="p_Two">
            Frontend developer looking for ideas and projects for himself and
            others
          </p>
          <div className="buutons_Contacts">
            <a
              href={PDF}
              target="_blank"
            >
              CV
            </a>
            <a href="#Footer">Contacts</a>
          </div>
        </div>
      </section>
    </>
  );
}

export { Greetings };
