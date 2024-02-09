import React from "react";
import { useLocation } from "react-router-dom";

function SchoolList() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const province = params.get("province");
  const regency = params.get("regency");

  return (
    <div>
      <h1>Data from Form Submission</h1>
      <p>Province: {province}</p>
      <p>Regency: {regency}</p>
      <img
        src="images/jakarta/jakarta_utara/SD_JU_1.jpg"
        width="200px"
        height="200px"
        alt="img"
      />
    </div>
  );
}

export default SchoolList;
