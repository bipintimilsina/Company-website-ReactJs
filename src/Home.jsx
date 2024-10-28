import React from "react";
import web from "../src/assets/img/img2.svg"
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
<Commom name="Grow your business with" 
imgSrc={web}
visit="/service"
btname="Get started"

></Commom>    
{/* <footer></footer> */}
    </>
  );
};

export default Home;
