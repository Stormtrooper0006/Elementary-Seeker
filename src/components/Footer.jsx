import React from "react";

function Footer() {
  const date = new Date();
  let currentYear = date.getFullYear();

  return (
    <div className="container">
      <footer className="py-3 my-4">
        <div className="border-bottom pb-3 mb-3" />
        <p className="text-center text-body-secondary">© {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
