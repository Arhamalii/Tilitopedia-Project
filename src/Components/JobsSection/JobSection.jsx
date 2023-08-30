import React from "react";
import line3 from "../../Assets/Images/Line 3.png";
import line from "../../Assets/Images/line.png";
import JobCard from "../JobCard/JobCard";
import "./JobSection.css";
// ------------ Importing Swiperjs--------
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
const JobSection = () => {
  const content = [
    {
      title: "Ui UX Designer",
      desc: "Lorem ipsum dolor sit amet consectetur. Id donec ante eleifend sed purus. Enim enim augue augue fringilla blandit",
    },
    {
      title: "Ui UX Designer",
      desc: "Lorem ipsum dolor sit amet consectetur. Id donec ante eleifend sed purus. Enim enim augue augue fringilla blandit",
    },
    {
      title: "Ui UX Designer",
      desc: "Lorem ipsum dolor sit amet consectetur. Id donec ante eleifend sed purus. Enim enim augue augue fringilla blandit",
    },
    {
      title: "Ui UX Designer",
      desc: "Lorem ipsum dolor sit amet consectetur. Id donec ante eleifend sed purus. Enim enim augue augue fringilla blandit",
    },
    {
      title: "Ui UX Designer",
      desc: "Lorem ipsum dolor sit amet consectetur. Id donec ante eleifend sed purus. Enim enim augue augue fringilla blandit",
    },
    {
      title: "Ui UX Designer",
      desc: "Lorem ipsum dolor sit amet consectetur. Id donec ante eleifend sed purus. Enim enim augue augue fringilla blandit",
    },
    {
      title: "Ui UX Designer",
      desc: "Lorem ipsum dolor sit amet consectetur. Id donec ante eleifend sed purus. Enim enim augue augue fringilla blandit",
    },
    {
      title: "Ui UX Designer",
      desc: "Lorem ipsum dolor sit amet consectetur. Id donec ante eleifend sed purus. Enim enim augue augue fringilla blandit",
    },
    {
      title: "Ui UX Designer",
      desc: "Lorem ipsum dolor sit amet consectetur. Id donec ante eleifend sed purus. Enim enim augue augue fringilla blandit",
    },
  ];
  return (
    <section className="job_section">
      <div className="top_title" style={{ marginTop: "2rem" }}>
        <img src={line3} alt="line" />
        <div className="top">Latest Job Opportunities</div>
        <img src={line} alt="line" />
      </div>
      <div className="cards">
        <Swiper
          slidesPerView={"auto"}
          slidesPerGroup={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {content.map((card, i) => (
            <SwiperSlide key={i} className="swiper_card">
              <JobCard desc={card.desc} title={card.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <button className="explore_btn">Explore more</button>
      </div>
    </section>
  );
};

export default JobSection;
