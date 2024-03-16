import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";

function Home() {
  return (
    <div className="home_container">
      <div className="container  ">
        <div className="home_content">
          <Social />
          <div className="home_img"></div>
          <Data />
        </div>
      </div>
    </div>
  );
}

export default Home;
