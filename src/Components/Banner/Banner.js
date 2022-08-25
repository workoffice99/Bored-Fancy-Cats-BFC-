import React from "react";
import BannerPic from "../../Assets/banner-pic.png";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import Play from "../../Assets/play.png";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="container">
      <div className="row">
        <Fade left>
          <div className="col-7 mt-5 text-light p-5">
            <div className="">
              <p className=" fs-5 fw-bold ">WELCOME TO THE Bored Fancy Cats!</p>

              <p className="fs-1 mt-5" Style="color:#adefd1">
                Fancy Cats the Kingdoms
              </p>
              <p className="fs-5 mt-5">
              Bored Fancy Cat's is an NFT limited edition collection of 4417 Cat's characters created from Pop elements in the mix with unique Holographic background with Pop style and stored as ERC-721 tokens on the Polygon blockchain.
              </p>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <button
                class="btn btn-primary"
                type="button"
                Style="width:50%;background-color:#adefd1;color:black;"
              >
                Get Started
              </button>
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
