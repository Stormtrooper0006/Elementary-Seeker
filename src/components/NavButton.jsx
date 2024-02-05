import React from "react";

function NavButton(props) {
  return (
    <li className="nav-item">
      <a href="/" className="link-color nav-link" aria-current="page">
        {props.name}
      </a>
    </li>
  );
}

export default NavButton;
