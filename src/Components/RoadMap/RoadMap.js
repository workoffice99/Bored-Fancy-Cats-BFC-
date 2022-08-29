import React from "react";
import "./RoadMap.css";
import Tic from "./../../Assets/tic.png";

export default function RoadMap() {
  return (
    <div className="container ">
      <div className="row fs-1 text-white pt-3 text-center mb-5">
        <p>ROAD MAP</p>
      </div>

      <div className="row">
        <div className="road-map">
          <div className="col-12  p-5 ">
            <ul>
              <li className=" d-flex gap-3 tw-bold ">
                <div>
                  <img src={Tic} />
                </div>
                <div>
                  <span className="fs-4">25% SOLD</span> Early holders airdrop
                </div>
              </li>
              <li className="pt-5  side-list d-flex gap-3 ">
                <div>
                  <img src={Tic} />
                </div>
                <div>
                  As a gesture of appreciation for your continued support we
                  will airdrop 15 unique NFTs done by BFC as a thanks for your
                  continued support.
                </div>
              </li>
              <li className="pt-5 d-flex gap-3 tw-bold ">
                <div>
                  <img src={Tic} />
                </div>
                <div>
                  <span className="fs-4">50% SOLD</span> 100 signed prints
                  giveaway
                </div>
              </li>
              <li className="pt-5  side-list d-flex gap-3 ">
                <div>
                  <img src={Tic} />
                </div>
                <div>
                  100 Bored Fancy Cats holders will win high-quality print of
                  their NFT.
                </div>
              </li>
              <li className="pt-5 d-flex gap-3 tw-bold">
                <div>
                  <img src={Tic} />
                </div>
                <div>
                  <span className="fs-4">75% SOLD</span> Bored Fancy Cats
                  Initiative
                </div>
              </li>
              <li className="pt-5  side-list d-flex gap-3 ">
                <div>
                  <img src={Tic} />
                </div>
                <div>
                  We will implement the Bored Fancy Cats Initiative helping
                  other Artist launch into the NFT space.
                </div>
              </li>
              <li className="pt-5 d-flex gap-3  tw-bold">
                <div>
                  <img src={Tic} />
                </div>
                <div>
                  <span className="fs-4">100% SOLD</span> Bored Fancy Cats
                  Double Giveback{" "}
                </div>
              </li>
              <li className="pt-5  side-list d-flex gap-3 ">
                <div>
                  <img src={Tic} />
                </div>
                <div>
                  We will start the full Bored Fancy Cats Double Giveback run
                  using 30% of royalties to buy other NFTs with upcomin Artist
                  focused presence to reward our holders!
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
