import React from "react";
import web from "../src/assets/img/img2.svg";
import { NavLink } from "react-router-dom";

const Commom = (props) => {
  return (
    <>
      <section id="header" className="d-flex mt-5  align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 mt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column ">
                  <h2 className="">
                    {props.name}
                    <br />
                    <strong className="brand-name text-info ">
                      Dummy Company
                    </strong>
                  </h2>
                  <h5 className="my-3">
                    We are the team of talented developer making websites
                  </h5>
                  <div className="mt-3 align-self-start ">
                    <NavLink to={props.visit} className="btn btn-outline-info">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div
                  className="col-lg-6 order-1 order-lg-2 header-img
"
                >
                  <img
                    src={props.imgSrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commom;
