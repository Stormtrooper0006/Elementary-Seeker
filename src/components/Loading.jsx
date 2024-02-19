import React from "react";

function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh"
      style={{ minHeight: "69vh" }}
    >
      <div className="text-center">
        <h1 style={{ color: "#fff" }}>Loading...</h1>
      </div>
    </div>
  );
}

export default Loading;
