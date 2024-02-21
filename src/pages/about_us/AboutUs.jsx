import React from "react";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";

function AboutUs() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh">
      <div className="text-center">
        <GroupRoundedIcon style={{ fontSize: "200px", color: "#6f42c1" }} />
        <h1 style={{ color: "#fff" }}>About Us</h1>
        <h2>
          We aims to be able to help parents find private elementary schools
          easier by providing list of private elementary schools that's
          available and has been segmented by the schools province and regency.
        </h2>
      </div>
    </div>
  );
}

export default AboutUs;
