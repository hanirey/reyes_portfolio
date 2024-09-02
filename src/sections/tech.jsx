import React from "react";
import "./tech.css";

function Tech() {
  return (
    <div className="tech-container">
      <div className="tech-section">
        <h3 className="tech-title">Tech Stack</h3>
        <ul className="tech-info">
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>MySQL</li>
          <li>PHP</li>
        </ul>
      </div>
      <div className="tech-section">
        <h3 className="tech-title">Currently Learning</h3>
        <ul className="tech-info">
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}

export default Tech;
