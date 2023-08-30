import React from "react";
import line2 from "../../Assets/Images/Line 3.png";
import icon7 from "../../Assets/Images/extra_icon.png";
import icon2 from "../../Assets/Images/gaib.png";
import icon3 from "../../Assets/Images/icon3.png";
import icon4 from "../../Assets/Images/icon4.png";
import icon5 from "../../Assets/Images/icon5.png";
import icon6 from "../../Assets/Images/icon6.png";
import line from "../../Assets/Images/line.png";
import "./ServicesSection.css";

const ServicesSection = () => {
  const content = [
    {
      title: "Oil & Gas",
      img: icon6,
    },
    {
      title: "Renewable Energy",
      img: icon5,
    },
    {
      title: "Manufacturing",
      img: icon4,
    },
    {
      title: "Information Technology",
      img: icon3,
    },
    {
      title: "Banking & Finance",
      img: icon2,
    },
    {
      title: "FMCG",
      img: icon7,
    },
  ];
  return (
    <section className="services_section">
      <div className="top_title">
        <img src={line2} alt="line" />
        <div className="top">Sectors We Cater</div>
        <img src={line} alt="line" />
      </div>
      <div
        className="div2_service
      "
      >
        {content.map((card, i) => (
          <div className="services" key={i}>
            <div>
              <img className="service_image" src={card.img} alt="icon" />
              <div className="tag">{card.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
