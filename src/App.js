import React from "react";
import Button from "./Button";
import Nav from "./Components/Nav/NavMain";
import Banner from "./Components/Banner/Banner";
import Partners from "./Components/Partner/Partner";
import AboutNft from "./Components/AboutNft/AboutNft";
import Rarity from "./Components/Rarity/Rarity";
import RoadMap from "./Components/RoadMap/RoadMap";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div>
        <Nav />
      </div>
      <div class="mt-5">
        <Banner />
      </div>
      <div class="mt-5">
        <Button />
      </div>
      <div class="mt-5 ">
        <AboutNft />
      </div>
      <div class="mt-5 ">
        <Rarity />
      </div>
      <div class="mt-5 ">
        <RoadMap />
      </div>
    </div>
  );
}
