import React from "react";
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
    <section className="job_section" id="job-board">
      <div
        className="top_title"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <div className="top">Latest Job Opportunities</div>
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
