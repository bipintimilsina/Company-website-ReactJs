import React from "react";
import web from "../src/assets/img/img2.svg"
import { NavLink } from "react-router-dom";
import Commom from "./Commom";
import Footer from "./Footer";
const About = () => {
  return (
    <>

<Commom name="Welcome to About Page" imgSrc={web} visit="/contact" btname="Contact Now"></Commom>

{/* <Footer></Footer> */}
    </>
    );
};

export default About;
