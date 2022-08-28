import React from "react";
import Pic from "./../../Assets/aboutnft.png";

export default function AboutNft() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 text-white">
          <div>
            <p className="fs-4 ">About Our Project</p>
          </div>
          <div className="fs-1 mt-2 " Style="color:#ADEFD1;">
            <p>Bored Fancy Cats</p>
          </div>
          <div className="fs-6 mt-3 pr-4 pb-4 pt-4">
            <p>
              Bored Fancy Cat's is an NFT limited edition collection of 4417
              Cat's characters created from Pop elements in the mix with unique
              Holographic background with Pop style and stored as ERC-721 tokens
              on the Polygon blockchain....
              <br />
              <br /> Through the Bored Fancy Cat's initiative, we hope to help
              other artists bring their art to the world through the blockchain
              path.Part of the funds collected from the sale of the first
              collection will be allocated to sponsoring upcoming new artists
              who stand out with their talent but can't afford to launch a
              collection due to the costs involved.The artists will be
              pre-selected with the help from the Bored Fancy Cat's NFT holders
              and the Bored Fancy Cat's team.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6  d-flex justify-content-center">
          <img src={Pic} height="400px" width="auto" />
        </div>
      </div>
    </div>
  );
}
