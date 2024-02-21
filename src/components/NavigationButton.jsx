import React from "react";
import { Link } from "react-router-dom";

function NavigationButton(props) {
  return (
    <li className="nav-item">
      <Link to={props.path} className="nav-link">
        {props.name}
      </Link>
    </li>
  );
}

export default NavigationButton;
