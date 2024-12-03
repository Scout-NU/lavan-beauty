
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./AboutUs.css";
import Greta from "../../assets/about-us/Greta.png"
import TopImage from "../../assets/about-us/TopImage.png";

function AboutUs() {

  return (
    /* Mission Statement Section */
    <div className="About-Us">
      <header className="About-Us-header">
            <p>Mission Statement</p>
      </header>
      
      <div className="MissionStatement-container">
        <img className="MissionStatementImage" src={TopImage} alt="Top Image" />
        <div className="MissionStatement-description">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.            </p>
          <button className="Learn-more">Learn More</button>
        </div>
      </div>
      

      {/* Founder Section */}
      <div className="second-half">
        <div className="Founder-container">
          <div className="Founder-items">
            <div className="Founder-left">
              <div className="Founder-description">
                <header className="Founder-header">
                  <p>Founder</p>
                </header>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <img className="Founder-image" src={Greta} alt="Founder-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;