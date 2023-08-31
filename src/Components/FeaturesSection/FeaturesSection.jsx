import React from "react";
import line2 from "../../Assets/Images/Line 2.png";
import line4 from "../../Assets/Images/Line 4.png";
import icon1 from "../../Assets/Images/fcon1.png";
import icon2 from "../../Assets/Images/fcon2.png";
import icon3 from "../../Assets/Images/fcon3.png";
import icon4 from "../../Assets/Images/fcon4.png";
import icon5 from "../../Assets/Images/fcon5.png";
import icon6 from "../../Assets/Images/fcon6.png";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const content = [
    {
      image: icon1,
      title: "Data Driven Hiring",
      desc: "Customised database of prescreened, assessed, and verified talent pools based on scientifically validated skills assessment and matching technology.",
    },

    {
      image: icon3,
      title: "Accelerate Hiring",
      desc: "No more time wasted on screening and pre-qualifying interviews. Our domain  quickly source and screen candidates to cut the time to hire by 50%.",
    },
    {
      image: icon4,
      title: " Candidate Experience",
      desc: "Our platform is designed to keep candidates engaged while guiding them through every step in the recruiting process, resulting in 85% offer acceptance.",
    },
    {
      image: icon5,
      title: "Role & Cultural Match",
      desc: "To land and keep top performers, a good cultural fit is required. We ensure a strong culture match  detailed profile analytics and culture  scoring to reduce turnover by 50%.",
    },
    {
      image: icon6,
      title: "Streamlines the process",
      desc: "Our team handles the entire hiring process through our powerful digital platform, which streamlines the process and gives our clients a better experience.",
    },
    {
      image: icon2,
      title: "Hire The Best",
      desc: "Our network of industrial domain experts screens, ranks, and delivers detailed candidate analytics reports. As a result, our clients are three times more likely to make  hiring decisions.",
    },
  ];
  return (
    <section className="feature_section" id="navigate">
      <div className="top_title">
        <img src={line4} alt="line" />
        <div className="top_heading">What Makes Tillitopedia Different ?</div>
        <img src={line2} alt="line" />
      </div>
      <div className="feature_cards">
        {content.map((card, i) => (
          <FeaturesCard
            image={card.image}
            key={i}
            title={card.title}
            description={card.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
