import React from "react";
import "./Partner.css";
import LogoOne from "./../../Assets/logo-1.png";

import LogoTwo from "./../../Assets/logo-2.png";

import LogoThree from "./../../Assets/logo-3.png";

export default function Partner() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-light d-flex justify-content-center">
          <h4>WE ARE A TEAM</h4>
        </div>
        <div
          className="text-light fs-1 d-flex justify-content-center"
          Style="color: #adefd1"
        >
          <h1>See Our Partners</h1>
        </div>
        <div className="row justify-content-around pt-5">
          <div className="icon-cards col-4 d-flex justify-content-center">
            <img src={LogoOne} height="auto" width="auto" />
          </div>
          <div className="icon-cards col-4 d-flex justify-content-center">
            <img src={LogoTwo} height="auto" width="200px" />
          </div>
          <div className="icon-cards col-4 d-flex justify-content-center">
            <img src={LogoThree} height="auto" width="200px" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
