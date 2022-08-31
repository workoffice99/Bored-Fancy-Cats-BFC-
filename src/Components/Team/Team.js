import React from "react";
import "./Team.css";
import TeamOne from "./../../Assets/Rarity01.png";
import TeamTwo from "./../../Assets/Rarity02.png";
import Discord from "./../../Assets/discord.png";
import LinkedIn from "./../../Assets/LinkedIn.png";
import Twitter from "./../../Assets/Twitter.png";

export default function Team() {
  return (
    <div className="container">
      <div className="row text-white">
        <div className="col-12 d-flex justify-content-center">
          <p class="fs-6">
            WE ARE GROWING FAST IF YOU SHARE THE SAME VISON AND VLAUES WE SHOULD
            LOVE TO HEAR FROM YOU
          </p>
        </div>
        <div
          className="col-12  d-flex justify-content-center mt-2"
          Style="color:#ADEFD1;"
        >
          <p class="fs-1">TEAM</p>
        </div>
      </div>
      <div className="row d-flex  justify-content-center">
        <div className="col-12 col-md-6 team-card pt-5 m-4">
          <div class="d-flex justify-content-center">
            <img src={TeamOne} width="220px" height="auto" />
          </div>
          <div class="d-flex justify-content-center fs-6 fw-bold">
            <p>CEO</p>
          </div>
          <div class="d-flex justify-content-center fs-2">
            <p>LUNA</p>
          </div>
          <div class="d-flex justify-content-around p-5">
            <div>
              {" "}
              <img src={Discord} width="25px" height="auto" />
            </div>
            <div>
              {" "}
              <img src={LinkedIn} width="25px" height="auto" />
            </div>
            <div>
              {" "}
              <img src={Twitter} width="25px" height="auto" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 team-card pt-5 m-4 ">
          <div class="d-flex justify-content-center">
            <img src={TeamTwo} width="220px" height="auto" />
          </div>
          <div class="d-flex justify-content-center fs-6 fw-bold">
            <p>CEO</p>
          </div>
          <div class="d-flex justify-content-center fs-2">
            <p>LUNA</p>
          </div>
          <div class="d-flex justify-content-around p-5">
            <div>
              {" "}
              <img src={Discord} width="25px" height="auto" />
            </div>
            <div>
              {" "}
              <img src={LinkedIn} width="25px" height="auto" />
            </div>
            <div>
              {" "}
              <img src={Twitter} width="25px" height="auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
