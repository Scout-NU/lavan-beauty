
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./AboutUs.css";
import FounderImage from "../../assets/about-us/FounderImage.png"
import MissionStatementImage from "../../assets/about-us/MissionStatementImage.png";

function AboutUs() {

  return (
    /* Mission Statement Section */
    <div className="About-Us">
      <div className="about-us-container">
        <header className="About-Us-header">
            <p>MISSION STATEMENT</p>
        </header>
      </div>
        <div className="MissionStatement-container">
          <img className="MissionStatementImage" src={MissionStatementImage} alt="Mission Statement Image" />
          <div className="MissionStatement-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      

      {/* Founder Section */}
      <div className="Founder-container">
        <header className="Founder-header">
          <p>FOUNDER</p>
        </header>
        <img className="FounderImage" src={FounderImage} alt="founder image" />
        <div className="Founder-description">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;