import { useState, useCallback } from "react";
import "./NightCream.css";
import placeholder from "../../assets/placeholder.jpg";
import productPhoto from "../../assets/nightcream/productPhoto.png";
import productPhoto2 from "../../assets/nightcream/productPhoto2.png";
import productPhoto3 from "../../assets/nightcream/productPhoto3.png";
import productPhoto4 from "../../assets/nightcream/productPhoto4.png";

// Reusable Components
/**
 * Renders pagination dots for carousels
 */
const CarouselDots = ({
  carouselName,
  carouselDotName,
  total,
  current,
  onSelect,
}) => (
  <div className={carouselName}>
    {Array(total)
      .fill()
      .map((_, index) => (
        <button
          key={index}
          className={`${carouselDotName} ${index === current ? "active" : ""}`}
          onClick={() => onSelect(index)}
        />
      ))}
  </div>
);

/**
 * Renders a circular button for size selection
 */
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

/**
 * Carousel component for product reviews
 * Shows 2 reviews at a time with navigation controls
 */
function ReviewCarousel({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleReviewChange = useCallback((increment) => {
    setCurrentIndex((current) =>
      cycleIndex(current, reviews.length, increment),
    );
  }, []);

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 2);

  return (
    <div className="product-reviews">
      <h2>Reviews</h2>
      <div className="review-carousel">
        <button
          className="carousel-arrow prev"
          onClick={() => handleReviewChange(-1)}
          disabled={currentIndex === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="42"
            viewBox="0 0 24 42"
            fill="none"
          >
            <path
              d="M2.14636 20.5137L22 2.0001"
              stroke="#382E26"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M2 20.6558L21.8286 39.9997"
              stroke="#382E26"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <div className="review-slide">
          {visibleReviews.map((review, index) => (
            <div className="review" key={currentIndex + index}>
              <div className="review-header">
                <div className="review-author">
                  <span className="author-avatar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <circle cx="25" cy="25" r="25" fill="#382E26" />
                    </svg>
                  </span>
                  <span className="author-name">{review.author}</span>
                </div>
                <StarRating rating={review.rating} />
              </div>

              <div className="review-images">
                <img src={placeholder} alt="Review" />
                <img src={placeholder} alt="Review" />
                <img src={placeholder} alt="Review" />
                <img src={placeholder} alt="Review" />
              </div>

              <div className="review-text">"{review.text}"</div>
            </div>
          ))}
        </div>

        <button
          className="carousel-arrow next"
          onClick={() => handleReviewChange(1)}
          disabled={currentIndex >= reviews.length - 2}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="42"
            viewBox="0 0 24 42"
            fill="none"
          >
            <path
              d="M21.8536 20.5137L1.99999 2.0001"
              stroke="#382E26"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M22 20.6558L2.17143 39.9997"
              stroke="#382E26"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      <CarouselDots
        carouselName="review-indicators"
        carouselDotName="review-dot"
        total={reviews.length - 1}
        current={currentIndex}
        onSelect={setCurrentIndex}
      />
    </div>
  );
}

/**
 * Displays star rating
 */
const StarRating = ({ rating }) => {
  return (
    <div className="review-stars">
      {[...Array(rating)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
        >
          <path
            d="M13.6841 0.315918L16.7563 9.77137H26.6984L18.6551 15.6152L21.7273 25.0706L13.6841 19.2268L5.64077 25.0706L8.71303 15.6152L0.669745 9.77137H10.6118L13.6841 0.315918Z"
            fill="#382E26"
          />
        </svg>
      ))}
    </div>
  );
};

/**
 * Calculates next index for carousel navigation
 * Handles wraparound at start/end of list
 */
const cycleIndex = (current, total, increment) => {
  const next = current + increment;
  if (next < 0) return total - 1;
  if (next >= total) return 0;
  return next;
};

function NightCream() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("30ml");

  const productImages = [
    { src: productPhoto, alt: "Night Cream 1" },
    { src: productPhoto2, alt: "Night Cream 2" },
    { src: productPhoto3, alt: "Night Cream 3" },
    { src: productPhoto4, alt: "Night Cream 4" },
    { src: productPhoto, alt: "Night Cream 5" },
  ];

  const ingredients = [
    { name: "Oil", link: "/" },
    { name: "Aloe", link: "/" },
    { name: "Ceramides", link: "/" },
  ];

  const reviews = [
    {
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
      author: "Person Name1",
    },
    {
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
      author: "Person Name2",
    },
    {
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
      author: "Person Name3",
    },
    {
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
      author: "Person Name4",
    },
  ];

  const handleImageChange = useCallback((increment) => {
    setCurrentImageIndex((current) =>
      cycleIndex(current, productImages.length, increment),
    );
  }, []);

  return (
    <div className="night-cream">
      {/* Breadcrumb navigation */}
      <div className="breadcrumb">
        <ol>
          <li>
            <a href="/">Products</a>
          </li>
          <li>Night Cream</li>
        </ol>
      </div>

      <div className="product">
        {/* Product image carousel */}
        <div className="product-images">
          <div className="image-carousel">
            <button
              className="carousel-button prev"
              onClick={() => handleImageChange(-1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="42"
                viewBox="0 0 24 42"
                fill="none"
              >
                <path
                  d="M2.14648 20.5135L22.0001 1.99998"
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
            <div className="carousel-container">
              <img {...productImages[currentImageIndex]} alt="Product" />
              <CarouselDots
                carouselName="carousel-indicators"
                carouselDotName="carousel-dot"
                total={productImages.length}
                current={currentImageIndex}
                onSelect={setCurrentImageIndex}
              />
            </div>
            <button
              className="carousel-button next"
              onClick={() => handleImageChange(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="42"
                viewBox="0 0 24 42"
                fill="none"
              >
                <path
                  d="M21.8535 20.5135L1.9999 1.99998"
                  stroke="#FEFAEF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M22 20.6556L2.1714 39.9996"
                  stroke="#FEFAEF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          {/* Thumbnail strip for quick navigation between images */}
          <div className="thumbnail-strip">
            {productImages.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img {...image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product information section */}
        <div className="product-details">
          <div className="product-info">
            <div className="title-and-price">
              <h2>Night Cream</h2>
              <span className="price">$55</span>
            </div>
            <div className="product-details-text">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore
            </div>
            <div className="product-ingredients">
              Ingredients:&nbsp;
              {ingredients.map((ingredient, index) => (
                <span key={index}>
                  <a href={ingredient.link}>{ingredient.name}</a>
                  {index < ingredients.length - 1 ? ",\u00A0" : ""}
                </span>
              ))}
            </div>
          </div>
          <div className="product-sizes">
            <span className="size">
              <button onClick={() => setSelectedSize("30ml")}>
                <SizeButton isSelected={selectedSize === "30ml"} />
              </button>
              30 ml
            </span>
            <span className="size">
              <button onClick={() => setSelectedSize("60ml")}>
                <SizeButton isSelected={selectedSize === "60ml"} />
              </button>
              60 ml
            </span>
          </div>
          <a href="/" className="learn-more-button">
            Learn More
          </a>
        </div>
      </div>

      {/* Reviews section */}
      <ReviewCarousel reviews={reviews} />
    </div>
  );
}

export default NightCream;