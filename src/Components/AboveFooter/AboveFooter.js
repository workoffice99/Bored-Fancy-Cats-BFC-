import React from "react";
import Logo from "./../../Assets/Logo-3.svg";
import Twitter from "./../../Assets/Twitter.png";
import Discord from "./../../Assets/discord.png";
import LinkedIn from "./../../Assets/LinkedIn.png";
import "./AboveFooter.css";

export default function AboveFooter() {
  return (
    <div className="container pb-3">
      <div className="row">
        <div class="d-flex justify-content-center mr-3">
          <img src={Logo} height="70px" />
        </div>
        <div className="text-center fs-7 text-white mt-2">
          <p>
            Bored Fancy Cat's is a digital creatives platform that empowers to
            Blockchain. Our goal is to create a safe environment for creatives
            and NFT investors to grow and advance their NFT careers in and
            beyond.
          </p>
        </div>
        <div className="text-center fs-7 text-white mt-4">
          <a
            href="https://polygonscan.com/address/0x14F0f1191d4D2a7D7c7fB4780EeFA3F3A91BF93E"
            className=""
          >
            0x14F0f1191d4D2a7D7c7fB4780EeFA3F3A91BF93E
          </a>
        </div>
        <div className="text-center d-flex justify-content-center gap-3 mt-4">
          <div>
            <img src={Twitter} />
          </div>
          <div>
            <img src={Discord} />
          </div>
          <div>
            <img src={LinkedIn} />
          </div>
        </div>
      </div>
      <hr class="horizontal-line mt-3" />
      <div className="row  text-white">
        <div className="col-12 col-md-6 d-flex  justify-content-center justify-content-md-start ">
          Copyright © 2022 Bored Fancy Cats| All Rights Reserved
        </div>
        <div class="col-12 col-md-6  d-flex  justify-content-center justify-content-md-end gap-3 mt-3 mt-md-0 mb-3 mb-md-0">
          <div className="">Privacy Policy</div>
          <div className="">Terms of Use</div>
          <div className="">Cookie Policy</div>
        </div>
      </div>
    </div>
  );
}
