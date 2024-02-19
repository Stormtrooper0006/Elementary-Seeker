import React from "react";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
function NotAvailable() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh">
      <div className="text-center">
        <SettingsRoundedIcon style={{ fontSize: "200px", color: "#6f42c1" }} />
        <h1 style={{ color: "#fff" }}>
          Sorry, the data for this region is not yet available.
        </h1>
      </div>
    </div>
  );
}

export default NotAvailable;
