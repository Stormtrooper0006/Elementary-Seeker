import React from "react";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import NavigationButton from "./NavigationButton";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/home"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <SchoolRoundedIcon fontSize="large" style={{ color: "#6f42c1" }} />
          <span className="ms-2 fs-4 nav-customized">Elementary Seeker</span>
        </Link>
        <ul className="nav nav-pills">
          <NavigationButton name="Home" path="/home" />
          <NavigationButton name="About Us" path="/about-us" />
        </ul>
      </header>
    </div>
  );
}

export default Header;
