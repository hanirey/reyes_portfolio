import React from "react";
import "./projects.css";
import Card from "../components/card.jsx";

const proj1Url = "/proj1.png";
const proj2Url = "/proj2.png";
const proj3Url = "/proj3.png";
const proj4Url = "/proj4.png";

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
