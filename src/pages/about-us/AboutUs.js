
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./AboutUs.css";
import FounderImage from "../../assets/about-us/FounderImage.png";
import MissionStatementImage from "../../assets/AboutUs/MissionStatementImage.png";

function AboutUs() {

  return (
    <div className="About-Us">
        <header className="About-Us-header">
            <p>MISSION STATEMENT</p>
        </header>

      {/* Mission Statement Section */}
      <div className="MissionStatement-container">
        <img className="MissionStatementImage" src={MissionStatementImage} alt="Mission Statement Image" />
        <div className="MissionStatement-description">
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore "Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="Founder-container">
        <img className="FounderImage" src={FounderImage} alt="founder image" />
        <header className="Founder-header">
          <p>FOUNDER</p>
        </header>
        <div className="Founder-description">
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore "Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;