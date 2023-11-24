import React from "react";
import image from "../../../Assets/Images/oliandgas.png";
import ServiceSkelton from "../serviceSkelton/skeltoin";
const OilAndGas = () => {
  const points = [
    {
      text: "Health, Safety, Environment & Quality",
    },
    {
      text: "Cloud and Infrastructure",
    },
    {
      text: "Project Controls & Services",
    },
    {
      text: "Subsea & Subsurface",
    },
    {
      text: "Project Management",
    },

    {
      text: "Plant Turnaround",
    },
    {
      text: "Construction & Commissioning",
    },

    {
      text: "Engineering & Design",
    },
    {
      text: "Drilling",
    },
  ];
  const content = {
    headerTitle: "Oil & Gas Recruitment & Workforce Solutions",
    desc: "We recruit for onshore, offshore, natural gas, upstream, midstream and downstream clients in the energy sector, providing engineering and technical personnel for some of the most important energy projects.",
    image: image,
    title: "Oil & Gas",
  };

  return (
    <ServiceSkelton
      points={points}
      headerTitle={content.headerTitle}
      description={content.desc}
      serviceImaage={content.image}
      title={content.title}
    />
  );
};

export default OilAndGas;
