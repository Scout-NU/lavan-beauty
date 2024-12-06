/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./AboutUs.css";
import Greta from "../../assets/about-us/Greta.png";
import TopImage from "../../assets/about-us/TopImage.png";
import landing from "../../assets/about-us/landing.png";

function AboutUs() {
  const landingImages = [
    { src: landing, alt: "Landing 1" },
    { src: landing, alt: "Landing 2" },
    { src: landing, alt: "Landing 3" },
    { src: landing, alt: "Landing 4" },
    { src: landing, alt: "Landing 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarouselChange = (increment) => {
    setCurrentIndex((prev) => {
      const newIndex = prev + increment;
      if (newIndex < 0) return landingImages.length - 1;
      if (newIndex >= landingImages.length) return 0;
      return newIndex;
    });
  };

  return (
    /* Mission Statement Section */
    <div className="AboutUs-container">
      <div className="About-Us">
        {/* Hero section with image carousel */}
        <div className="landing">
          <div className="home-carousel">
            <button
              className="home-carousel-arrow prev"
              onClick={() => handleCarouselChange(-1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="42"
                viewBox="0 0 24 42"
                fill="none"
              >
                <path
                  d="M2.14636 20.5135L22 1.99998"
                  stroke="#FEFAEF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M2 20.6556L21.8286 39.9996"
                  stroke="#FEFAEF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            {landingImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="landing-image"
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                }}
              />
            ))}
            <button
              className="home-carousel-arrow next"
              onClick={() => handleCarouselChange(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="42"
                viewBox="0 0 24 42"
                fill="none"
              >
                <path
                  d="M21.8536 20.5135L2.00001 1.99998"
                  stroke="#FEFAEF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M22 20.6556L2.17141 39.9996"
                  stroke="#FEFAEF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <div className="home-carousel-dots">
              {landingImages.map((_, index) => (
                <button
                  key={index}
                  className={`home-carousel-dot ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <header className="About-Us-header">
          <p>Mission Statement</p>
        </header>

        <div className="MissionStatement-container">
          <img
            className="MissionStatementImage"
            src={TopImage}
            alt="Top Image"
          />
          <div className="MissionStatement-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco aboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <a href="/science" className="Learn-more">
              Learn More
            </a>
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
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco aboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              <img className="Founder-image" src={Greta} alt="Founder-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
