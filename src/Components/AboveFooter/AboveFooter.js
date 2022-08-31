import React from "react";
import Logo from "./../../Assets/Logo-3.svg";
import Twitter from "./../../Assets/Twitter.png";
import Discord from "./../../Assets/discord.png";
import Tiktok from "./../../Assets/TikTok.png";
import FB from "./../../Assets/FB.png";
import LinkedIn from "./../../Assets/LinkedIn.png";
import "./AboveFooter.css";

export default function AboveFooter() {
  return (
    <div className="container pb-3">
      <div className="row">
        <div class="d-flex justify-content-center mr-3">
          <img src={Logo} height="auto" width="100%" />
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
          <div className="col-12 col-md-6 text-white">
            <div className="fs-4">
              <p>Do You have something for us?</p>
            </div>
            <div className="fs-1 mt-3" Style="color:#ADEFD1;">
              <p>Contact us</p>
            </div>
            <div className="fs-5 mt-4">
              <p>
                join the conversation on discord ,email,twitter to up do date
                with community news
              </p>
            </div>
            <div className="d-flex  justify-content-center mt-5 gap-5">
              <div className="circle d-flex justify-content-center align-items-center">
                <a href="https://discord.gg/aEeXz42H" target="_blank">
                  <img src={Discord} width="24px" height="24px" />
                </a>
              </div>
              <div className="circle d-flex justify-content-center align-items-center">
                <a href="https://twitter.com/boredfancycats" target="_blank">
                  <img src={Twitter} />
                </a>
              </div>
              <div className="circle d-flex justify-content-center align-items-center">
                <a
                  href=" https://www.instagram.com/boredfancycats/"
                  target="_blank"
                >
                  <img src={LinkedIn} />
                </a>
              </div>
              <div className="circle d-flex justify-content-center align-items-center">
                {" "}
                <a
                  href="https://www.tiktok.com/@boredfancycats?lang=en"
                  target="_blank"
                >
                  <img src={Tiktok} />
                </a>
              </div>
              <div className="circle d-flex justify-content-center align-items-center">
                <a
                  href="https://www.facebook.com/Bored-fancy-cats-106926228794697"
                  target="_blank"
                >
                  <img src={FB} />
                </a>
              </div>
            </div>
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
