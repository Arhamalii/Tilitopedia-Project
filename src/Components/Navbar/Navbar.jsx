import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menu from "../../Assets/Images/bars-solid.svg";
import linkedin from "../../Assets/Images/linkedin.png";
import logo from "../../Assets/Images/logo.png";
import cross from "../../Assets/Images/xmark-solid.svg";
import "./style.css";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", () => {
    setActive(false);
  });

  return (
    <nav className="d-flex">
      <div className="nav-logo">
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="tilitopedia" />
        </Link>
      </div>
      <img
        id="menu-icon"
        src={!active ? menu : cross}
        alt="menu_icon"
        onClick={() => (!active ? setActive(true) : setActive(false))}
      />
      <div className="seperator" id={active ? "active-menu" : ""}>
        <div className="nav-links">
          <Link>Why us</Link>
          <Link>Sector</Link>
          <Link>Job Board</Link>
          {location.pathname !== "/" ? (
            <Link to={"/contact"}>Contact Us</Link>
          ) : (
            ""
          )}
        </div>
        <div className="nav-btn">
          <Link className="login-btn">Login</Link>
          <Link to={"google.com"} className="linkedin-btn">
            <img src={linkedin} alt="linkedin" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
