import React from "react";
import "./FeaturesCard.css";

const FeaturesCard = ({ image, title, description }) => {
  return (
    <div className="features_card">
      <img className="card_image" src={image} alt="card_icon" />
      <div className="fetaure_heading">{title}</div>
      <div className="fetaure_detail">{description}</div>
    </div>
  );
};

export default FeaturesCard;
