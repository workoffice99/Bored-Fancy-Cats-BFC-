import React from "react";
import Twitter from "./../../Assets/Twitter.png";
import Discord from "./../../Assets/discord.png";
import LinkedIn from "./../../Assets/LinkedIn.png";
import Tiktok from "./../../Assets/TikTok.png";
import FB from "./../../Assets/FB.png";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="container ContactUs p-5">
      <div className="row">
        <div className="col-12 col-md-6 text-white">
          <div className="fs-4">
            <p>Do You have something for us?</p>
          </div>
          <div className="fs-1 mt-3" Style="color:#ADEFD1;">
            <p>Contact us</p>
          </div>
          <div className="fs-5 mt-4">
            <p>
              join the conversation on discord ,email,twitter to up do date with
              community news
            </p>
          </div>
          <div className="d-flex  justify-content-start mt-5 gap-5">
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
        <div className="col-12 col-md-5 ">
          <div class="input-group  d-flex justify-content-center my-5">
            <input
              type="text"
              class="form-control rounded-right"
              placeholder="Enter your email"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
            <button
              class="btn btn-outline-secondary rounded-left text-white"
              type="button"
              id="button-addon1"
              Style="background-color:#001F3D"
            >
              Subsribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
