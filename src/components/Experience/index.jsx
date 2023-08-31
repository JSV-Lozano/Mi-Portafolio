import React from "react";
import "../../styles/Experience.css";

const experienceList = [
  { company: "LootVoid", position: "FrontEnd Developer" },
  { company: "LootVoid", position: "FrontEnd Developer" },
];

function Experience() {
  return (
    <section className="experience--Container">
      <h2 className="experience--Title">Experience</h2>
      {experienceList.map((experience) => (
        <div className="experience--Content">
          <div className="experience--Item">
            <h3 className="experience--ItemTitle">{experience.company}</h3>
            <p className="experience--ItemDescription">{experience.position}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export { Experience };
