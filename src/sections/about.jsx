import React from "react";
import devImg from "/devimg2.jpg";
import Resume from "/resume.pdf";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <div className="title">ABOUT</div>
      <div className="info">
        <h2 className="intro" data-aos="fade-right">
          Hello World! I'm <span>Hannah</span>
        </h2>
        <img src={devImg} alt="developer image" data-aos="fade-left" />
        <p data-aos="fade-right">
          "Code with heart, craft with skill". A Web Developer who is fascinated
          by codes and its possibilities. Eager when it comes to exploration and
          is dedicated to continuous improvement.
        </p>
        <a href={Resume} download>
          resume
        </a>
      </div>
    </div>
  );
}

export default About;
