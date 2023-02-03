import React from "react";
import styles from "../../styles/Skill.css?"
const Skillss = [
  { name: "HTML", img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "JavaScript", img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
  { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Next Js", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "Git", img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
  { name: "Node", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
];
function Skills() {
  return (
    <section id="Skills" className="Skills">
        <h2>My Skills</h2>
      <div className="container__Skills">
        {Skillss?.map((skill) => (
          <div className="Skill" key={skill.name}>
            <h2>{skill.name}</h2>
            <img src={skill.img} alt={skill.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export { Skills };
