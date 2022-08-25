import React from "react";
import Twitter from "./../../Assets/Twitter.png";
import Discord from "./../../Assets/discord.png";
import LinkedIn from "./../../Assets/LinkedIn.png";
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
              {" "}
              <img src={Discord} width="24px" height="24px" />
            </div>
            <div className="circle d-flex justify-content-center align-items-center">
              {" "}
              <img src={Twitter} />
            </div>
            <div className="circle d-flex justify-content-center align-items-center">
              {" "}
              <img src={LinkedIn} />
            </div>
            <div className="circle d-flex justify-content-center align-items-center">
              {" "}
              <img src={Twitter} />
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
