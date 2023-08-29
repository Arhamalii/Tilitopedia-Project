import React from "react";
import line3 from "../../Assets/Images/Line 3.png";
import facebook from "../../Assets/Images/facebook logo.png";
import google from "../../Assets/Images/google.png";
import line from "../../Assets/Images/line.png";
import pinterest from "../../Assets/Images/pinterest.png";
import twitch from "../../Assets/Images/twitch.png";
import youtube from "../../Assets/Images/youtube.png";
import "./ClientsSection.css";
const ClientsSection = () => {
  return (
    <section className="clients_section">
      <div className="top_title" style={{ marginTop: "8rem" }}>
        <img src={line3} alt="line" />
        <div className="top">Trusted Clients Logo</div>
        <img src={line} alt="line" />
      </div>
      <div className="clients_logos">
        <img src={google} alt="google" />
        <img src={facebook} alt="facebook" />
        <img src={youtube} alt="youtube" />
        <img src={pinterest} alt="pinterest" />
        <img src={twitch} alt="twitch" />
      </div>
    </section>
  );
};

export default ClientsSection;
