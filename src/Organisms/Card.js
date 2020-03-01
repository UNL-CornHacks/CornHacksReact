import React from "react";
import "./Styles/Card.css";

const Card = ({ image, link, children }) => {
  image = image ? (
    <div
      className="ch-card-image"
      style={{ backgroundImage: `url(${image})` }}
      alt="Test"
    />
  ) : (
    false
  );
  return (
    <a className="ch-card" href={link}>
      {image}
      {children}
    </a>
  );
};

export default Card;
