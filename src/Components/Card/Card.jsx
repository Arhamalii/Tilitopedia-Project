import React from "react";
import "./Card.css";
const Card = ({ image, title, desc, btnText }) => {
  return (
    <div className="card">
      <img src={image} alt="icon" />
      <div className="frontcard_title">{title}</div>
      <div className="desc">{desc}</div>
      <button className="joinBtn">{btnText}</button>
    </div>
  );
};

export default Card;
