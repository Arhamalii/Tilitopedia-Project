import React from "react";
import { Link } from "react-router-dom";
import vector from "../../Assets/Images/Highlight_04.png";
import heroimg from "../../Assets/Images/hero.png";
import "./style.css";

const Hero = () => {
  return (
    <div className="hero-sec">
      <div className="hero-text">
        <span className="hero-vector">
          <img src={vector} alt="hero" />
        </span>
        <h1>Helping Business Create Value Through Talent Acquisition</h1>
        <p>
          Our excellence is in providing quality staffing solutions through our
          network of domain experts to maximize client business potential.
        </p>

        <Link className="get-btn">Get Started</Link>
        <Link className="get-btn get2-btn" to={"/contact"}>
          {" "}
          Contact Us
        </Link>
      </div>
      <div className="hero-img">
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
