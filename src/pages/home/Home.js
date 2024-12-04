import React, { useState } from "react";
import "./Home.css";
import landing from "../../assets/home/landing.png";
import landing2 from "../../assets/home/landing2.png";
import product_image from "../../assets/home/product_image.png";
import pharmacist from "../../assets/home/pharmacist.png";
import bottom_image from "../../assets/home/bottom_image.png";

function Home() {
  const landingImages = [
    { src: landing, alt: "Landing 1" },
    { src: landing2, alt: "Landing 2" },
    { src: landing, alt: "Landing 3" },
    { src: landing2, alt: "Landing 4" },
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
    <div className="home">
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
                className={`home-carousel-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="landing-text">
        Where luxurious skincare meets nature’s finest ingredients
      </div>

      {/* Product showcase section */}
      <div className="home-product">
        <img src={product_image} alt="Day and Night Cream Set" />
        <div className="product-information">
          <h1>Day & Night Set Name</h1>
          <p className="product-price">$36</p>
          <p className="product-description">
            Experience the ultimate skincare transformation with our Day & Night
            Cream Duo, designed to nourish and revitalize your skin around the
            clock.
          </p>
          <button
            className="view-product"
            onClick={() => (window.location.href = "/")}
          >
            View Product
          </button>
        </div>
      </div>

      {/* Pharmacist section */}
      <div className="pharmacist">
        <div className="pharmacist-text">
          <h1>Made by a pharmacist</h1>
          The intersection of pharmacy and skincare blends science, health, and
          beauty. Pharmacists' expertise in biochemistry, dermatology, and
          therapeutic formulations enables them to develop effective skincare
          products. By understanding active ingredients, dosage forms, and
          dermal absorption, they create formulations that address conditions
          like acne, hyperpigmentation, aging, and inflammation at a cellular
          level. This scientific approach ensures products are both luxurious
          and highly effective, rooted in pharmaceutical rigor.
        </div>
        <img src={pharmacist} alt="Pharmacist" />
      </div>

      {/* Decorative footer image */}
      <div className="bottom-image">
        <img src={bottom_image} alt="Decorative image" />
      </div>
    </div>
  );
}

export default Home;
