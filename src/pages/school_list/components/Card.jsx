import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`/school-list/${props.id}`}>
      <div className="col">
        <div className="card shadow-sm glow-card">
          <img
            src={props.photo_url1}
            alt="thumbnail"
            width="100%"
            height="225"
          />
          <div className="card-body">
            <h2 style={{ color: "#6f42c1" }}>{props.name}</h2>
            <p className="card-text truncate-two-lines"> {props.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
