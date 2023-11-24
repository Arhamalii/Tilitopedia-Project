import React from "react";
import { Link } from "react-router-dom";
import icon7 from "../../Assets/Images/extra_icon.png";
import icon2 from "../../Assets/Images/gaib.png";
import icon3 from "../../Assets/Images/icon3.png";
import icon4 from "../../Assets/Images/icon4.png";
import icon5 from "../../Assets/Images/icon5.png";
import icon6 from "../../Assets/Images/icon6.png";
import "./ServicesSection.css";

const ServicesSection = () => {
  const content = [
    {
      title: "Oil & Gas",
      img: icon6,
      path: "/service/oil",
    },
    {
      title: "Renewable Energy",
      img: icon5,
      path: "/service/energy",
    },
    {
      title: "Manufacturing",
      img: icon4,
      path: "/service/manufacture",
    },
    {
      title: "Information Technology",
      img: icon3,
      path: "/service/it",
    },
    {
      title: "Banking & Finance",
      img: icon2,
      path: "/service/banking",
    },
    {
      title: "FMCG",
      img: icon7,
      path: "/service/fmcg",
    },
  ];
  return (
    <section className="services_section" id="sector">
      <div className="top_title" style={{ marginBottom: "2rem" }}>
        <div className="top">Sectors We Cater</div>
      </div>
      <div
        className="div2_service
      "
      >
        {content.map((card, i) => (
          <Link className="services" key={i} to={card.path}>
            <div>
              <img className="service_image" src={card.img} alt="icon" />
              <div className="tag">{card.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
