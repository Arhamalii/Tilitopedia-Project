import React from "react";
import "./style.css";

const BlogCards = ({ blogTitle, blogDate, blogDesc, blogImage }) => {
  return (
    <section className="blog_cards">
      <div className="cards_div">
        <img src={blogImage} alt="blogs_imageee" />
        <div className="content">
          <h4>{blogTitle}</h4>
          <p>{blogDesc}</p>
          <div className="extra_action">
            <h6>{blogDate}</h6>
            <h6>Read more &#129133;</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
