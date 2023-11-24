import React from "react";
import { Link } from "react-router-dom";
import faceBookIcon from "../../Assets/Images/facebook.png";
import githubIcon from "../../Assets/Images/github.png";
import instaIcon from "../../Assets/Images/insta.png";
import linkedinIcon from "../../Assets/Images/linkedin.png";
import logo from "../../Assets/Images/logo.png";
import twitterIcon from "../../Assets/Images/twitter.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer_row">
        <div className="col-4">
          <img src={logo} alt="logo" />
          <p>
            Our excellence is to provide quality staffing solutions through our
            network of domain experts.
          </p>

          <div className="icons">
            <img src={faceBookIcon} alt="facebook" />
            <img src={instaIcon} alt="insta" />
            <img src={twitterIcon} alt="twitter" />
            <img src={githubIcon} alt="github" />
            <img src={linkedinIcon} className="link_gray" alt="linkedin" />
          </div>
        </div>
        <div className="col-4">
          <h2>Solutions</h2>
          <Link>Login </Link>
          <Link>Signup</Link>
          <Link>Pricing </Link>
          <Link>Features </Link>
        </div>
        <div className="col-4">
          <h2>Support</h2>
          <Link>Login </Link>
          <Link>Signup</Link>
          <Link>Pricing </Link>
          <Link>Features </Link>
        </div>
        <div className="col-4">
          <h2>Company</h2>
          <Link>Legal Noise </Link>
          <Link>Terms of Use</Link>
          <Link>Privacy Policy </Link>
        </div>
        <div className="col-4">
          <h2>Contact Us</h2>
          <Link>Feedback</Link>
          <Link>Legal Noise </Link>
          <Link>Privacy Policy </Link>
        </div>
      </div>
      <div className="closing_foot">
        <hr />
        <p>&copy; 2023 Tilitopedia, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
