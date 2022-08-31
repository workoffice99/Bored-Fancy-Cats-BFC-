import React from "react";
import Button from "./Button";
import Nav from "./Components/Nav/NavMain";
import Banner from "./Components/Banner/Banner";
import Partners from "./Components/Partner/Partner";
import AboutNft from "./Components/AboutNft/AboutNft";
import Rarity from "./Components/Rarity/Rarity";
import RoadMap from "./Components/RoadMap/RoadMap";
import Faq from "./Components/Faq/Faq";
import Team from "./Components/Team/Team";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboveFooter from "./Components/AboveFooter/AboveFooter";
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

      <div id="about" class="mt-5 ">
        <AboutNft />
      </div>

      <div class="mt-5 ">
        <Rarity />
      </div>
      <div id="road" class="mt-5 ">
        <RoadMap />
      </div>
      <div class="mt-5 ">
        <Team />
      </div>
      <div id="faq" class="mt-5 ">
        <Faq />
      </div>
      <div class="mt-5 ">
        <ContactUs />
      </div>
      <div class="mt-5 ">
        <AboveFooter />
      </div>
    </div>
  );
}
