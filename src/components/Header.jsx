import React from "react";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import NavButton from "./NavButton";

function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <SchoolRoundedIcon fontSize="large" style={{ color: "#6f42c1" }} />
          <span className="ms-2 fs-4">Elementary Seeker</span>
        </a>

        <ul className="nav nav-pills">
          <NavButton name="Home" />
          <NavButton name="About Us" />
        </ul>
      </header>
    </div>
  );
}

export default Header;
