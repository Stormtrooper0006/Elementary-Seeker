import React from "react";

function Footer() {
  const date = new Date();
  let currentYear = date.getFullYear();

  return (
    <div className="container">
      <footer className="pt-3 mt-4">
        <hr className="pb-3 mb-3" />
        <p className="text-center text-body-secondary">© {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
