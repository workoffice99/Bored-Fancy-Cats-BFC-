import React from "react";
import Logo from "./../../Assets/Logo.svg";
import Twitter from "./../../Assets/Twitter.png";
import Discord from "./../../Assets/discord.png";
import LinkedIn from "./../../Assets/LinkedIn.png";
import "./AboveFooter.css";

export default function AboveFooter() {
  return (
    <div className="container">
      <div className="row">
        <div class="d-flex justify-content-center">
          <img src={Logo} />
        </div>
        <div className="text-center fs-7 text-white mt-4">
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
      <div className="row">
        <hr class="horizontal-line mt-3" />
        <div className="col-12 d-flex justify-content-between text-white mb-2 mt-2">
          <div className="  col-12 col-md-6 ">
            <div className="">
              Copyright © 2022 Goofy Giraffes | All Rights Reserved
            </div>
          </div>
          <div class="col-12 col-md-6  ">
            <div className="d-flex justify-content-end gap-3">
              <div className="column has-text-right has-text-centered-mobile is-hidden-mobile is-hidden-mobile-tablet-only link is-hidden-tablet-only ">
                Privacy Policy
              </div>
              <div className="column has-text-right has-text-centered-mobile is-hidden-mobile is-hidden-tablet-only link footer-nav-below">
                Terms of Use
              </div>
              <div className="column has-text-right has-text-centered-mobile is-hidden-mobile is-hidden-tablet-only link footer-nav-below">
                Cookie Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
