import image from "../../../Assets/Images/energy.png";
import ServiceSkelton from "../serviceSkelton/skeltoin";
const Energy = () => {
  const points = [
    {
      text: "Leadership team",
    },
    {
      text: "Finance",
    },
    {
      text: "Manufacturing",
    },
    {
      text: "Project Management",
    },
    {
      text: "Logistics",
    },

    {
      text: "Construction",
    },
    { text: "Operation & Maintenance text" },

    {
      text: "Asset Management",
    },
  ];

  const content = {
    headerTitle:
      "Recruitment & Workforce Solutions for the Renewable Sources of Energy",
    desc: "Workforce solutions experts that provide staffing solutions to the renewable energy sector. We recruit right talent for your project from development to commissioning to operations & maintenance.",
    image: image,
    title: "Energy",
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

export default Energy;
