import React from "react";
import line3 from "../../Assets/Images/Line 3.png";
import line from "../../Assets/Images/line.png";
import pic1 from "../../Assets/Images/pic1.png";
import pic2 from "../../Assets/Images/pic2.png";
import pic3 from "../../Assets/Images/pic3.png";
import BlogCards from "../BlogCards/blog";
import "./blog.css";

const BlogSection = () => {
  const content = [
    {
      blogPhoto: pic1,
      blogTitle:
        "How to stay organized and productive as a freelancer placerat",
      blogDesc:
        "Porta mauris at sem placerat vulputate porttitor arcu suspendisse dui mi duis non tristique.",
      blogDate: "Jan 13, 2023",
    },
    {
      blogPhoto: pic2,
      blogTitle:
        "How to stay organized and productive as a freelancer placerat",
      blogDesc:
        "Porta mauris at sem placerat vulputate porttitor arcu suspendisse dui mi duis non tristique.",
      blogDate: "Jan 13, 2023",
    },
    {
      blogPhoto: pic3,
      blogTitle:
        "How to stay organized and productive as a freelancer placerat",
      blogDesc:
        "Porta mauris at sem placerat vulputate porttitor arcu suspendisse dui mi duis non tristique.",
      blogDate: "Jan 13, 2023",
    },
  ];
  return (
    <>
      <div className="top_title" style={{ marginTop: "6.8rem" }}>
        <img src={line3} alt="line" />
        <div className="top">Blogs</div>
        <img src={line} alt="line" />
      </div>
      <section className="blogSection">
        {content.map((card, i) => (
          <BlogCards
            blogTitle={card.blogTitle}
            blogDesc={card.blogDesc}
            blogDate={card.blogDate}
            blogImage={card.blogPhoto}
            key={i}
          />
        ))}
      </section>
    </>
  );
};

export default BlogSection;