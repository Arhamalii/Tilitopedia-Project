import emailjs from "@emailjs/browser";
import { TextField } from "@mui/material";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import vector from "../../Assets/Images/Highlight_04.png";
import contactimg from "../../Assets/Images/contact_png.png";
import Layout from "../Layout";
import "./style.css";

const ContactFrom = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_czyi989",
        "template_xp8lvi3",
        form.current,
        "Dnu34MKgmcWQvqEQn"
      )
      .then(
        (result) => {
          toast.success("Submit Succesfully");
        },
        (error) => {
          console.log(error.text);
          toast.success("Something went wrong");
        }
      );
  };

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
        <form className="contact_form" ref={form} onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          <div className="form_row">
            <TextField
              className="single_input"
              id="outlined-basic"
              type="text"
              label="Enter the First name"
              variant="outlined"
              name="First-Name"
            />{" "}
            <TextField
              className="single_input"
              type="text"
              id="outlined-basic"
              label="Enter the Last name"
              variant="outlined"
              name="Last-Name"
            />
          </div>
          <div className="form_row">
            <TextField
              className="single_input"
              type="email"
              id="outlined-basic"
              label="Enter the Email adress"
              variant="outlined"
              name="Email"
            />{" "}
            <TextField
              id="outlined-basic"
              className="single_input"
              label="Enter the Phone number"
              type="number"
              maxLength={3}
              variant="outlined"
              name="Phone-No"
            />
          </div>
          <div className="form_row">
            <TextField
              id="outlined-basic"
              type="text"
              label="Enter the Company Name"
              className="single_input"
              variant="outlined"
              name="Compnay_Name"
            />{" "}
            <TextField
              type="text"
              id="outlined-basic"
              label="Enter the Designation"
              variant="outlined"
              className="single_input"
              name="Designation"
            />
          </div>
          <div className="form_row">
            <TextField
              type="text"
              id="outlined-basic"
              label="Your Message"
              className="double_input"
              variant="outlined"
              name="Message"
            />
          </div>
          <Link>
            <button type="submit" className="global_btn" onClick={sendEmail}>
              Submit
            </button>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default ContactFrom;
