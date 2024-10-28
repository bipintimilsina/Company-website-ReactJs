import React from "react";



import web from "../src/assets/img/s1.jpg"
import { NavLink } from "react-router-dom";
  import Sdata from "./Sdata"


const Card = (props) => {
  return (
    <>
    
                <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={props.imgsrc}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold">{props.title}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                      <NavLink to="/contact" className="btn btn-primary">
                        Learn more
                      </NavLink>
                    </div>
                  </div>
                </div>
                  </>
  );
};

export default Card;
