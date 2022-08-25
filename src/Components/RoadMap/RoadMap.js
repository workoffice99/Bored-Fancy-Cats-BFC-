import React from "react";
import "./RoadMap.css";

export default function RoadMap() {
  return (
    <div className="container ">
      <div className="row fs-1 text-white pt-3 text-center mb-5">
        <p>ROAD MAP</p>
      </div>

      <div className="row">
        <div className="road-map">
          <div className="col-12 col-sm-12 p-5 mt-5">
            <ul>
              <li className="">25% SOLD Early holders airdrop</li>
              <li className="pt-5  side-list">
                As a gesture of appreciation for your continued support we will
                airdrop 15 unique NFTs done by BFC as a thanks for your
                continued support.
              </li>
              <li className="pt-5">50% SOLD 100 signed prints giveaway</li>
              <li className="pt-5  side-list">
                100 Bored Fancy Cats holders will win high-quality print of
                their NFT.
              </li>
              <li className="pt-5">75% SOLD Bored Fancy Cats Initiative*</li>
              <li className="pt-5  side-list">
                We will implement the Bored Fancy Cats Initiative helping other
                Artist launch into the NFT space.
              </li>
              <li className="pt-5">
                100% SOLD Bored Fancy Cats Double Giveback
              </li>
              <li className="pt-5  side-list">
                We will start the full Bored Fancy Cats Double Giveback run
                using 30% of royalties to buy other NFTs with upcomin Artist
                focused presence to reward our holders!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
