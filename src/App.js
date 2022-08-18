import React from "react";
import Button from "./Button";
import Nav from "./Components/Nav/NavMain";
import Banner from "./Components/Banner/Banner";
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
    </div>
  );
}
