import React from "react";
import Specials from "./specials";
import Chicago from "./chicago";
import CustomersSay from "./customersSay";
import CallToAction from "./CallToAction";
import About from "./About/About";

function Homepage() {

     return (
      <>
         <Chicago></Chicago>
         <Specials></Specials>
         <CustomersSay></CustomersSay>
         <About></About>
      </>
   )
}

export default Homepage;
