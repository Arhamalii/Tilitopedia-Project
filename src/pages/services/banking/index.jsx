import image from "../../../Assets/Images/banking.png";
import ServiceSkelton from "../serviceSkelton/skeltoin";
const Banking = () => {
  const points = [
    {
      text: "Customer Relationship",
    },
    {
      text: "Sales Managers",
    },
    {
      text: "Financial Analyst",
    },
    {
      text: "Project Manager",
    },
    {
      text: "Front & Back office ",
    },

    {
      text: "Finance manager",
    },
    {
      text: "Customer Service Agents",
    },

    {
      text: "Compliance manager",
    },
    {
      text: "Credit Controller",
    },
    {
      text: "Compliance officer",
    },
  ];

  const content = {
    headerTitle: "Recruitment & Workforce Solutions for Banking & Finance",
    desc: "Our banking and financial recruitment provide you with the right hiring solutions. We specialize in recruiting for mid to senior level roles in Banking such as risk,  banking, investment and financial services.",
    image: image,
    title: "Banking & Finacnce",
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

export default Banking;
