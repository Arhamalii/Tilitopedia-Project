import image from "../../../Assets/Images/fmcg.png";
import ServiceSkelton from "../serviceSkelton/skeltoin";
const FMCG = () => {
  const points = [
    {
      text: "Design & Engineering",
    },
    {
      text: "Facilities Management",
    },
    {
      text: "Health, Environment & Quality",
    },
    {
      text: "Land Management",
    },
    {
      text: "Resource Management",
    },
    {
      text: "Project Management",
    },

    {
      text: "Procurement",
    },
    {
      text: "Logistics, Sales & Marketing",
    },
  ];

  const content = {
    headerTitle: "Recruitment & Workforce Solutions for the FMCG Sector",
    desc: "Our talented recruitment team will work alongside you to create an effective talent acquisition and pipeline strategy to ensure you’ll always have access to the best employees available",
    image: image,
    title: "FMCG",
  };
  return (
    <ServiceSkelton
      headerTitle={content.headerTitle}
      description={content.desc}
      serviceImaage={content.image}
      points={points}
      title={content.title}
    />
  );
};

export default FMCG;
