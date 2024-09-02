import React from "react";
import "./card.css";

export const Card = ({ imgSrc, imgAlt = "Image", title, tech }) => {
  return (
    <div className="card-container" data-aos="fade-up">
      {imgSrc && <img src={imgSrc} alt={imgAlt} className="card-image" />}
      {title && <h4 className="card-title">{title}</h4>}
      {tech && <div className="tech">{tech}</div>}
    </div>
  );
};

export default Card;
