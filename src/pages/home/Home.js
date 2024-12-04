import { useState, useEffect } from "react";
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

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % landingImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero section with image carousel */}
      <div className="landing">
        <div className="carousel">
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
          <div className="carousel-dots">
            {landingImages.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
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
      <div className="product">
        <img src={product_image} alt="Day and Night Cream Set" />
        <div className="product-info">
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
