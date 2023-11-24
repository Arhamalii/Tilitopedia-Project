import image from "../../../Assets/Images/s1.png";
import ServiceSkelton from "../serviceSkelton/skeltoin";
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

  const content = {
    headerTitle: "Information Technology Recruitment & Workforce Solutions",
    desc: "Our headhunters take a consultative approach and work from a deeper talent pool of skilled professionals. We take are search-orientated approach to uncover and align highly competent professionals.",
    image: image,
    title: "IT",
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

export default InformationT;
