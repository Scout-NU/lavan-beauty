import { useState } from 'react';
import './DayCream.css';
import placeholder from '../../assets/placeholder.jpg';

const StarRating = ({ rating }) => {
  return (
    <div className="review-stars">
      {[...Array(rating)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
        >
          <path
            d="M9.31594 0L11.4075 6.43716H18.1759L12.7002 10.4155L14.7917 16.8527L9.31594 12.8743L3.84017 16.8527L5.93173 10.4155L0.455955 6.43716H7.22438L9.31594 0Z"
            fill="#838383"
          />
        </svg>
      ))}
    </div>
  );
};

function DayCream() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    { src: placeholder, alt: "Day Cream 1" },
    { src: placeholder, alt: "Day Cream 2" },
    { src: placeholder, alt: "Day Cream 3" },
    { src: placeholder, alt: "Day Cream 4" },
    { src: placeholder, alt: "Day Cream 5" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const ingredients = [
    { name: 'Oil', link: '/' },
    { name: 'Aloe', link: '/' },
    { name: 'Ceramides', link: '/' }
  ];

  const reviews = [
    {
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
      author: "Person Name"
    },
    {
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
      author: "Person Name"
    }
  ];

  return (
    <div className="day-cream">
      <div className="back-button">
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="42" viewBox="0 0 24 42" fill="none">
            <path d="M2.14648 20.5137L22.0001 2.0001" stroke="black" stroke-width="3" stroke-linecap="round" />
            <path d="M2 20.6558L21.8286 39.9997" stroke="black" stroke-width="3" stroke-linecap="round" />
          </svg>
        </a>
      </div>
      <div className="product">
        <div className="product-images">
          <div className="image-carousel">
            <button className="carousel-button prev" onClick={previousImage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="42" viewBox="0 0 24 42" fill="none">
                <path d="M2.14648 20.5135L22.0001 1.99998" stroke="#FEFAEF" stroke-width="3" stroke-linecap="round" />
                <path d="M2 20.6556L21.8286 39.9996" stroke="#FEFAEF" stroke-width="3" stroke-linecap="round" />
              </svg>
            </button>
            <div className="carousel-container">
              <img
                src={productImages[currentImageIndex].src}
                alt={productImages[currentImageIndex].alt}
              />
              <div className="carousel-indicators">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
            <button className="carousel-button next" onClick={nextImage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="42" viewBox="0 0 24 42" fill="none">
                <path d="M21.8535 20.5135L1.9999 1.99998" stroke="#FEFAEF" stroke-width="3" stroke-linecap="round" />
                <path d="M22 20.6556L2.1714 39.9996" stroke="#FEFAEF" stroke-width="3" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <div className="thumbnail-strip">
            {productImages.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={image.src} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="product-details">
          <div className="product-info">
            <div className="title-and-price">
              <span className="subheading">Day Cream</span>
              <span className="price">$55</span>
            </div>
            <div className="product-details-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</div>
            <div className='product-ingredients'>
              Ingredients:&nbsp;
              {ingredients.map((ingredient, index) => (
                <span key={index}>
                  <a href={ingredient.link}>{ingredient.name}</a>
                  {index < ingredients.length - 1 ? ',\u00A0' : ''}
                </span>
              ))}
            </div>
          </div>
          <div className="product-sizes">
            <span className="size">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.73391 18.541C14.387 18.541 18.1298 14.7007 18.1298 9.99999C18.1298 5.29925 14.387 1.45901 9.73391 1.45901C5.08084 1.45901 1.33804 5.29925 1.33804 9.99999C1.33804 14.7007 5.08084 18.541 9.73391 18.541Z" fill="#382E26" stroke="#382E26" stroke-width="1.79657" />
              </svg> 30 ml
            </span>
            <span className="size">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10.0335 18.541C14.7537 18.541 18.5816 14.7178 18.5816 9.99999C18.5816 5.28215 14.7537 1.45901 10.0335 1.45901C5.31337 1.45901 1.4855 5.28215 1.4855 9.99999C1.4855 14.7178 5.31337 18.541 10.0335 18.541Z" fill="#FEFAEF" stroke="#382E26" stroke-width="1.79657" />
              </svg> 60 ml
            </span>
          </div>
          <a href="/" className="learn-more-button">Learn More</a>
        </div>
      </div>
      <div className="product-reviews">
            <span className="subheading">Reviews</span>
            {reviews.map((review, index) => (
              <div className="review" key={index}>
                <StarRating rating={review.rating} />
                <div className="review-text">
                  "{review.text}"
                </div>
                <div className="review-author">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                      <circle cx="25" cy="25.6318" r="25" fill="#838383" />
                    </svg>
                  </span>
                  <span>{review.author}</span>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
}

export default DayCream;