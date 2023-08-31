import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import vector from "../../Assets/Images/Highlight_04.png";
import contactimg from "../../Assets/Images/contact_png.png";
import Layout from "../Layout";
import "./style.css";
const ContactFrom = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="contact_parent">
        <div className="contact_content">
          <img src={vector} alt="vector" className="vector_image" />
          <h1>
            Let us show you how our domain experts offer you the right
            recruitment solutions.
          </h1>
          <img src={contactimg} alt="contact_us" />
        </div>
        <div className="contact_form">
          <h1>Contact Us</h1>
          <div className="form_row">
            <TextField
              className="single_input"
              id="outlined-basic"
              type="text"
              label="Enter the First name"
              variant="outlined"
            />{" "}
            <TextField
              className="single_input"
              type="text"
              id="outlined-basic"
              label="Enter the Last name"
              variant="outlined"
            />
          </div>
          <div className="form_row">
            <TextField
              className="single_input"
              type="email"
              id="outlined-basic"
              label="Enter the Email adress"
              variant="outlined"
            />{" "}
            <TextField
              id="outlined-basic"
              className="single_input"
              label="Enter the Phone number"
              type="number"
              maxLength={3}
              variant="outlined"
            />
          </div>
          <div className="form_row">
            <TextField
              id="outlined-basic"
              type="text"
              label="Enter the Company Name"
              className="single_input"
              variant="outlined"
            />{" "}
            <TextField
              type="text"
              id="outlined-basic"
              label="Enter the Designation"
              variant="outlined"
              className="single_input"
            />
          </div>
          <div className="form_row">
            <TextField
              type="text"
              id="outlined-basic"
              label="Your Message"
              className="double_input"
              variant="outlined"
            />
          </div>
          <Link>
            <button className="global_btn">Submit</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ContactFrom;
