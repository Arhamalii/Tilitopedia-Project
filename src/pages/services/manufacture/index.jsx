import image from "../../../Assets/Images/manufacturing.png";
import ServiceSkelton from "../serviceSkelton/skeltoin";
const Manufacture = () => {
  const points = [
    {
      text: "Automation",
    },
    {
      text: "Industrial Machinery",
    },
    { text: "Continuous Improvement text" },
    {
      text: "Engineering",
    },
    {
      text: "Health & Safety",
    },

    {
      text: "Human Resources",
    },
    {
      text: "Maintenance",
    },

    {
      text: "Plant Management",
    },
    {
      text: "Quality Management",
    },
    {
      text: "Project Management",
    },
    {
      text: "Research & Development",
    },
    {
      text: " Business Development",
    },
  ];

  const content = {
    headerTitle: "Manufacturing Recruitment & Workforce Solutions",
    desc: "Our manufacturing recruiters will help you to build an effective talent acquisition and pipeline strategy.",
    image: image,
    title: "Manufacturing",
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

export default Manufacture;
