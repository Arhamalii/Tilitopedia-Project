import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import vector from "../../Assets/Images/Highlight_04.png";
import uploadericon from "../../Assets/Images/upload_icon.png";
import Layout from "../Layout";
import "../contactFrom/style.css";
import "./style.css";

const RecruiterForm = () => {
  const points = [
    {
      text: "Sign up for a free recruiter account",
    },
    {
      text: "Search the job board and look for current openings",
    },
    {
      text: "Refer shortlisted candidate for a selected job.",
    },
    {
      text: "If your referal is hired you receive 50% of bounty.",
    },
    {
      text: "We gives you all the the tools and resources you need to become the best recruiter.",
    },
  ];

  return (
    <Layout title={"Join Us"}>
      <div className="contact_parent mod-parent">
        <div className="contact_content  mod_content">
          <img src={vector} alt="vector" className="vector_image mod_vector" />
          <h1 className="req_heading">Are you an expert in your domain?</h1>
          <p className="req_para">
            Join our network for freelance recruiter projects. Get paid to
            recruit for the most exciting startups.
          </p>

          <div className="rec_points">
            {points.map((point, i) => (
              <div className="inner_point" key={i}>
                <span> &#10003;</span>
                <p>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="contact_form">
          <h1>Recruiters</h1>
          <div className="form_row">
            <TextField
              className="single_input"
              id="outlined-basic"
              type="text"
              label="Enter First  Name"
              variant="outlined"
            />
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
              label="Enter the Linkedin URL"
              className="single_input"
              variant="outlined"
            />{" "}
            <TextField
              type="text"
              id="outlined-basic"
              label="Enter the Area"
              variant="outlined"
              className="single_input"
            />
          </div>
          <div className="form_row">
            <label className="double_input" id="uploader">
              Upload Resume
              <input type="file" hidden />
              <img src={uploadericon} alt="upload" />
              <p className="u_para">
                Drag & Drop <span>choose file</span> to upload
              </p>
            </label>
          </div>
          <Link>
            <button className="global_btn" type="submit">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default RecruiterForm;
