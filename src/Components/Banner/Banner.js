import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerPic from "../../Assets/banner-pic2.gif";
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
      <div
        className="row flex-column-reverse flex-md-row
 "
      >
        <Fade left>
          <div className="col-sm-12 col-lg-7  text-light ">
            <div className="">
              <p className=" fs-5 fw-bold ">WELCOME TO THE Bored Fancy Cats!</p>

              <p className="fs-1 mt-5" Style="color:#adefd1">
                Fancy Cats the Kingdoms
              </p>
              <p className="fs-5 mt-5">
                Bored Fancy Cat's is an NFT limited edition collection of 4417
                Cat's characters created from Pop elements in the mix with
                unique Holographic background with Pop style and stored as
                ERC-721 tokens on the Polygon blockchain.
              </p>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-around ">
              <div
                className="fs-1 d-flex justify-content-center justify-content-md-end align-items-center  mt-5"
                Style="color:#adefd1"
              >
                {data.totalSupply}/4417
              </div>
              <div className="d-flex justify-content-center mt-5 ml-2">
                <NftButton />
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-12 col-md-5 d-flex justify-content-md-center mb-3 mb-md-0  rounded">
            <div>
              <img
                className="banner-pic rounded"
                src={BannerPic}
                height="auto"
                width="100%"
                border-radius="10px"
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
