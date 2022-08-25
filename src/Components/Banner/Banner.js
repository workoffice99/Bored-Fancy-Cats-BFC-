import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerPic from "../../Assets/banner-pic.png";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import Play from "../../Assets/play.png";

import NftButton from "../../Button";
import "./Banner.css";

export default function Banner() {
  const data = useSelector((state) => state.data);
  console.log(data, "data");
  return (
    <div className="container">
      <div className="row">
        <Fade left>
          <div className="col-sm-12 col-lg-7 mt-5 text-light p-5">
            <div className="">
              <p className=" fs-5 fw-bold ">WELCOME TO THE FANCY KITTEIES!</p>

              <p className="fs-1 mt-5" Style="color:#adefd1">
                Fancy Kitties the Kingdoms
              </p>
              <p className="fs-5 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                pretium venenatis fringilla. Donec quis lectus auctor.
              </p>
            </div>
            <div className="fs-1 text-center  mt-5" Style="color:#adefd1">
              {" "}
              {data.totalSupply}/4177
            </div>
            <div className="d-flex justify-content-center mt-5 ml-2">
              <NftButton />
              {/* <button
                class="btn btn-outline-light text-light"
                type="button"
                Style="width:48%;background-color:transparent;"
              >
                <div class="d-flex justify-content-center">
                  <div class="mt-1">Play</div>

                  <div className="mt-1 " Style="margin-left:10px;">
                    <img src={Play} width="auto" height="auto" />
                  </div>
                </div>
              </button> */}
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-5 d-flex justify-content-center ">
            <div>
              <img
                className="banner-pic"
                src={BannerPic}
                height="auto"
                width="469px"
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
