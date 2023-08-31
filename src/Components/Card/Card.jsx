import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ image, title, desc, btnText, path }) => {
  return (
    <div className="card">
      <img src={image} alt="icon" />
      <div className="frontcard_title">{title}</div>
      <div className="desc">{desc}</div>
      <Link to={path}>
        <button className="joinBtn">{btnText}</button>
      </Link>
    </div>
  );
};

export default Card;
