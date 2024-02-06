import React from "react";
import { useParams } from "react-router-dom";

function SchoolList() {
  const { province, regency } = useParams();

  return (
    <div>
      <h1>Data from Form Submission</h1>
      <p>Province: {province}</p>
      <p>Regency: {regency}</p>
    </div>
  );
}

export default SchoolList;
