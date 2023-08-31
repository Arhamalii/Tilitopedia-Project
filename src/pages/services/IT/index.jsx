import React from "react";
import { Link } from "react-router-dom";
import s1 from "../../../Assets/Images/s1.png";
import Layout from "../../Layout";
import "./style.css";
const InformationT = () => {
  const points = [
    {
      text: "Artificial Intelligence",
    },
    {
      text: "Cloud and Infrastructure ",
    },
    {
      text: "Data and Analytics.",
    },
    {
      text: "Digital Transformation",
    },
    {
      text: "Fintech o Internet of Things (IOT)",
    },

    {
      text: "MedTech ",
    },
    {
      text: "Robotic Process Automation ",
    },

    {
      text: "Semiconductors ",
    },
    {
      text: "Software Engineering",
    },
  ];
  return (
    <Layout title={"Services - IT"}>
      <div className="service_parent">
        <div className="service_content">
          <h1>Information Technology Recruitment & Workforce Solutions </h1>
          <p className="desc" style={{ color: "#000" }}>
            Our headhunters take a consultative approach and work from a deeper
            talent pool of skilled IT professionals. We take a
            research-orientated approach to uncover and align highly competent
            professionals.
          </p>
          <div className="rec_points mod_points">
            {points.map((point, i) => (
              <React.Fragment key={i}>
                {i <= 4 ? (
                  <div className="inner_point mod_inner1 " key={i}>
                    <span> &#10003;</span>
                    <p>{point.text}</p>
                  </div>
                ) : (
                  <div className="inner_point mod_inner2" key={i}>
                    <span> &#10003;</span>
                    <p>{point.text}</p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <Link to={"/contact"}>
            <button type="button" className="service_btn">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="services_image">
          <img src={s1} alt="it" />
        </div>
      </div>
    </Layout>
  );
};

export default InformationT;
