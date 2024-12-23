import React, { useState } from "react";
import "./Shop.css";
import set from "../../assets/shop/set.png";
import star from "../../assets/shop/star.png";
import Sun from "../../assets/shop/Sun.png";
import moon from "../../assets/shop/moon.png";
import day from "../../assets/shop/day.png";
import night from "../../assets/shop/night.png";
import landing1 from "../../assets/shop/landing1.png";
import landing2 from "../../assets/shop/landing2.png";
import image from "../../assets/shop/image.png";

function Carousel() {
  const landingImages = [
    { src: landing2, alt: "Landing 1" },
    { src: image, alt: "Landing 2" },
    { src: landing1, alt: "Landing 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? landingImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === landingImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      {/* Carousel Images */}
      <div className="carousel-images">
        {landingImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`carousel-image ${
              index === currentIndex ? "active" : "inactive"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow prev" onClick={goToPrevious}>
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
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M2 20.6556L21.8286 39.9996"
            stroke="#FEFAEF"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button className="carousel-arrow next" onClick={goToNext}>
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
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M22 20.6556L2.17141 39.9996"
            stroke="#FEFAEF"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="carousel-dots">
        {landingImages.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function Shop() {
  const [selectedSizeSet, setSelectedSizeSet] = useState("30ml");
  const [selectedSizeDay, setSelectedSizeDay] = useState("30ml");
  const [selectedSizeNight, setSelectedSizeNight] = useState("30ml");

  const SizeButton = ({ isSelected }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.0335 18.541C14.7537 18.541 18.5816 14.7178 18.5816 9.99999C18.5816 5.28215 14.7537 1.45901 10.0335 1.45901C5.31337 1.45901 1.4855 5.28215 1.4855 9.99999C1.4855 14.7178 5.31337 18.541 10.0335 18.541Z"
        fill={isSelected ? "#382E26" : "#FEFAEF"}
        stroke="#382E26"
        strokeWidth="1.79657"
      />
    </svg>
  );

  function Stars() {
    return (
      <div className="stars-container">
        <img className="star-image" src={star} alt="star" />
        <img className="star-image" src={star} alt="star" />
        <img className="star-image" src={star} alt="star" />
        <img className="star-image" src={star} alt="star" />
        <img className="star-image" src={star} alt="star" />
      </div>
    );
  }

  function Buttons({ selectedSize, setSelectedSize }) {
    const sizes = ["30ml", "60ml"];
    return (
      <div className="indiv-size-buttons-container">
        {sizes.map((size) => (
          <span className="button-ml" key={size}>
            <button onClick={() => setSelectedSize(size)}>
              <SizeButton isSelected={selectedSize === size} />
            </button>
            {size}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="shop-container">
      {/* Hero section with image carousel */}
      <div className="landing-container">
        <Carousel />
      </div>

      {/* signature collection section*/}
      <div className="signature-container">
        <div className="signature-first-container">
          <div className="signature-header-container">
            <header className="signature-header">
              <p>Signature Collection</p>
            </header>
            <div className="signature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
          </div>
          <a href="/science" className="learn-more-button">
            Learn More
          </a>
        </div>
        <div className="signature-second-container">
          <img className="sun-image" src={Sun} alt="sun" />
          <img className="moon-image" src={moon} alt="moon" />
        </div>
      </div>

      <div className="products-container">
        {/* set section*/}
        <div className="set-container">
          <img className="set-image" src={set} alt="set image" />
          <div className="set-second-half">
            <div className="set-header-container">
              <header className="set-header">
                <p>Day & Night Cream Set</p>
              </header>
              <div className="set-price-container">
                <p>$55</p>
              </div>
            </div>
            <div className="set-description">
              <div className="set-description-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="set-reviews-container">
                <Stars />
                <div className="set-reviews">
                  <p>50 Reviews</p>
                </div>
              </div>
            </div>
            <Buttons
              selectedSize={selectedSizeSet}
              setSelectedSize={setSelectedSizeSet}
            />
            <a href="/" className="set-view-product-button">
              View Product
            </a>
          </div>
        </div>

        {/* individual product section*/}
        <div className="individual-container">
          <div className="individual-cream-container">
            <img
              className="individual-cream-image"
              src={day}
              alt="day cream image"
            />

            <div className="individual-header-container">
              <header className="individual-header">
                <p>Day Cream</p>
              </header>
              <div className="individual-price-container">
                <p>$55</p>
              </div>
            </div>
            <div className="individual-description">
              <div className="individual-description-text">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
              <div className="individual-reviews-container">
                <Stars />
                <div className="reviews">
                  <p>50 Reviews</p>
                </div>
              </div>
            </div>

            <Buttons
              selectedSize={selectedSizeDay}
              setSelectedSize={setSelectedSizeDay}
            />
            <a href="/daycream" className="view-product-button">
              View Product
            </a>
          </div>

          <div className="individual-cream-container">
            <img
              className="individual-cream-image"
              src={night}
              alt="night cream image"
            />
            <div className="indiv-text-container">
              <div className="individual-header-container">
                <header className="individual-header">
                  <p>Night Cream</p>
                </header>
                <div className="individual-price-container">
                  <p>$55</p>
                </div>
              </div>
              <div className="individual-description">
                <div className="individual-description-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="individual-reviews-container">
                  <Stars />
                  <div className="reviews">
                    <p>50 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <Buttons
              selectedSize={selectedSizeNight}
              setSelectedSize={setSelectedSizeNight}
            />
            <a href="/nightcream" className="view-product-button">
              View Product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
