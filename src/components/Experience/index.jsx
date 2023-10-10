import React from "react";
import "../../styles/Experience.css";

const experienceList = [
  {
    company: "LootVoid",
    position: "FrontEnd Developer",
    Date: "August 2023 / Current",
  },
  {
    company: "PeakU",
    position: "Developer Full Stack",
    Date: "August 2023 / September 2023",
  },
];

function Experience() {
  return (
    <section id="Experience" className="experience--Container">
      <h2 className="experience--Title">Experience</h2>
      <div className="experience--Content">
        {experienceList.map((experience) => (
          <div className="experience--Item">
            <h3 className="experience--ItemTitle">{experience.company}</h3>
            <p className="experience--ItemDescription">{experience.position}</p>
            <p>{experience.Date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Experience };
