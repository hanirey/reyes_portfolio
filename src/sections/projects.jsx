import React from "react";
import "./projects.css";
import Card from "../components/card.jsx";

import proj1Url from "../../public/proj1.png";
import proj2Url from "../../public/proj2.png";
import proj3Url from "../../public/proj3.png";
import proj4Url from "../../public/proj4.png";

function Projects() {
  return (
    <>
      <div className="sect-title">PROJECTS</div>
      <div className="projects-container">
        <div className="projects-grid">
          <Card
            imgSrc={proj1Url}
            imgAlt="Project 1"
            title="Student Portal"
            tech="HTML &nbsp; CSS &nbsp; BOOTSTRAP &nbsp; PHP &nbsp; MYSQL &nbsp; JAVASCRIPT"
          />
          <Card
            imgSrc={proj3Url}
            imgAlt="Project 3"
            title="Directory Web App"
            tech="HTML &nbsp; CSS &nbsp; BOOTSTRAP &nbsp; PHP &nbsp; MYSQL &nbsp; JAVASCRIPT"
          />
          <Card
            imgSrc={proj4Url}
            imgAlt="Project 4"
            title="ams web app"
            tech="HTML &nbsp; CSS &nbsp; BOOTSTRAP &nbsp; PHP &nbsp; MYSQL &nbsp; JAVASCRIPT"
          />
          <Card
            imgSrc={proj2Url}
            imgAlt="Project 2"
            title="kpop tribute page"
            tech="HTML &nbsp; CSS &nbsp; BOOTSTRAP &nbsp; PHP &nbsp; MYSQL &nbsp; JAVASCRIPT"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
