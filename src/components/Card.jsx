import React from "react";

function Card(props) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={props.photo_url1} alt="thumbnail" width="100%" height="225" />
        <div className="card-body">
          <h2 style={{ color: "#6f42c1" }}>{props.name}</h2>
          <p className="card-text truncate-two-lines"> {props.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
