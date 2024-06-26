import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/img1.png";

const Card = (props) => {
  return (
    <>
    <div className="col-md-4 col-10  mx-auto ">
      <div className="card">
        <img src={props.imgsrc} className="card-img-top card-img" alt="img" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to="/about" className="btn btn-outline-primary">
            Details
          </NavLink>
        </div>
        </div>
    </div>
    </>
  );
};

export default Card;
