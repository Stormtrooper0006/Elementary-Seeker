import React from "react";

function NavigationButton(props) {
  return (
    <li className="nav-item">
      <a href="/" className="nav-link" aria-current="page">
        {props.name}
      </a>
    </li>
  );
}

export default NavigationButton;
