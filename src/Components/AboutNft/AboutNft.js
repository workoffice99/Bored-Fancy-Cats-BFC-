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
          <div className="fs-1 mt-2">
            <p>KITTEIES VERSE</p>
          </div>
          <div className="fs-6 mt-3">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
              <br />
              <br /> It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6  d-flex justify-content-end">
          <img src={Pic} height="auto" width="450px" />
        </div>
      </div>
    </div>
  );
}
