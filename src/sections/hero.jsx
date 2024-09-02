import React from "react";
import "./hero.css";
import Avatar from "/rei-avatar.png";

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="header-text ht1">DEVELOPER</h1>
      <img className="dev-img" src={Avatar} alt="dev profile image" />
      <h1 className="header-text ht2">PORTFOLIO</h1>
    </div>
  );
}

export default Hero;
