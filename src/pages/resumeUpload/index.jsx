import React from "react";
import { Link } from "react-router-dom";
import resume from "../../Assets/Images/Profile data-bro 1.png";
import Layout from "../Layout";
import "./style.css";

const ResumeUpload = () => {
  return (
    <Layout title={"Upload Your Resume"}>
      <div className="resume_parent">
        <div className="resumeContent">
          <h1>Upload Resume </h1>
          <img src={resume} alt="resume_upload" />
          <h6>
            Employers get hundreds of applications, and most get filtered out
            before they ever see them. Upload your resume to get through the
            filters.{" "}
          </h6>
          <p>
            We'll distribute your resume to matched recruiters on our platform
            in just a few clicks.
          </p>
          <Link>
            <button>Upload File </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ResumeUpload;
