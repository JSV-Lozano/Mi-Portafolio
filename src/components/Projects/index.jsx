import React from "react";
import Img1 from "../../assets/Img/ApiGit.jpg";
import Img2 from "../../assets/Img/Dashboard.png";
import Img3 from "../../assets/Img/SinglePage.jpg";
import Img4 from "../../assets/Img/Chat.png";
import Web from "../../assets/Img/Web.png";
import styles from "../../styles/Projects.css?";

const Project = [
  {
    name: " Search GitHub Users",
    frameword: "HTML, CSS, React, Axios",
    img: Img1,
    repo: "https://github.com/JSV-Lozano/Search-Users-GitHub",
    linkWeb: "https://search-users-git-hub-jhoan1153.vercel.app/",
    iconRepo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    iconWeb: Web,
  },
  {
    name: "Dashboard",
    frameword: "HTML, CSS, React, Next js, tailwind, Axios",
    img: Img2,
    repo: "https://github.com/JSV-Lozano/Next.JS-Dashboard",
    linkWeb: "",
    iconRepo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
  {
    name: "Single Page",
    frameword: "HTML, CSS, JavaScript",
    img: Img3,
    repo: "https://github.com/JSV-Lozano/Dise-o-web-Figma",
    linkWeb: "",
    iconRepo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
  {
    name: "Chat React",
    frameword: "HTML, CSS, React, Express, Socket.io",
    img: Img4,
    repo: "https://github.com/JSV-Lozano/Reach-chat-Express-Socket.io",
    linkWeb: "",
    iconRepo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
];

function Projects() {
  return (
    <section
      id="Projects"
      className="My__Projects"
    >
      <h2>Projects</h2>
      <div className="Projects">
        {Project.map((project) => (
          <div
            className="Project"
            key={project.name}
          >
            <img
              src={project.img}
              alt=""
            />
            <section>
              <h2>{project.name}</h2>
              <p>
                {project.frameword}
                <hr />
              </p>
              <div>
                <a
                  href={project.repo}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                {project.linkWeb === "" ? null : (
                  <a href={project.linkWeb}>
                    <img
                      src={project.iconWeb}
                      alt=""
                    />
                  </a>
                )}
              </div>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Projects };
