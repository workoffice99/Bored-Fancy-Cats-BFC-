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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            pretium venenatis fringilla. Donec quis lectus auctor, posuere eros
            sit amet, tincidunt nibh. Donec consectetur condimentum dui sed
            consequat. Proin sit amet nulla diam. Sed tortor magna, finibus
            tincidunt lectus et, imperdiet sodales nunc. Vestibulum non velit
            orci. Nunc vestibulum m
          </p>
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
