import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout";
import "./style.css";
const ServiceSkelton = ({
  serviceImaage,
  headerTitle,
  description,
  points,
  title,
}) => {
  return (
    <Layout title={`Services - ${title}`}>
      <div className="service_parent">
        <div className="service_content">
          <div className="mytextdiv">
            <div className="divider"></div>
            <div className="mytexttitle">Our Services</div>
          </div>

          <h1>{headerTitle}</h1>
          <p className="desc" style={{ color: "#000" }}>
            {description}
          </p>
          <div className="rec_points mod_points">
            {points?.map((point, i) => (
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
          <Link to={"/contact"}></Link>
        </div>
        <div className="services_image">
          <img src={serviceImaage} alt="it" />
        </div>
      </div>
    </Layout>
  );
};

export default ServiceSkelton;
