import React from "react";
import icon1 from "../../Assets/Images/icon1.png";
import icon2 from "../../Assets/Images/icon2.png";
import icon3 from "../../Assets/Images/icon3m.png";
import Card from "../Card/Card";
import "./CardSection.css";

const content = [
  {
    img: icon1,
    title: "Recruiters",
    desc: "  Are you an expert in your domain? Get paid to recruit for the most exciting startups on your terms.",
    btnText: "Join Now",
  },
  {
    img: icon2,
    title: "Client",
    desc: " Let us show you how our domain experts offer you the right recruitment solutions.",
    btnText: "Contact Us",
  },
  {
    img: icon3,
    title: "Candidates",
    desc: "  9 out of 10 resumes never get seen. Give your job search a boost! Distribute your resume.",
    btnText: "Share Resume",
  },
];
const CardSection = () => {
  return (
    <section className="card_section">
      {content.map((card, i) => (
        <Card
          key={i}
          image={card.img}
          desc={card.desc}
          title={card.title}
          btnText={card.btnText}
        />
      ))}
    </section>
  );
};

export default CardSection;
