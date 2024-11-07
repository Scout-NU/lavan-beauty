import './DayCream.css';
import placeholder from '../../assets/placeholder.jpg';
function DayCream() {
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
          <img src={placeholder} alt="Day Cream 1" />
          <img src={placeholder} alt="Day Cream 2" />
          <img src={placeholder} alt="Day Cream 3" />
        </div>
        <div className="product-details">
          <div className="product-info">
            <h2>Day Cream</h2>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
            <div className='product-ingredients'>
              Ingredients:&nbsp;
              <a href="/">Oil</a>,&nbsp;
              <a href="/">Aloe</a>,&nbsp;
              <a href="/">Ceramides</a>
            </div>
            <a href="/" className="shop-button">Shop Now</a>
          </div>
          <div className="product-reviews">
            <h2>Reviews</h2>
            <div className="review">
              <div className="review-stars">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M9.31594 0L11.4075 6.43716H18.1759L12.7002 10.4155L14.7917 16.8527L9.31594 12.8743L3.84017 16.8527L5.93173 10.4155L0.455955 6.43716H7.22438L9.31594 0Z" fill="#838383" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M9.31594 0L11.4075 6.43716H18.1759L12.7002 10.4155L14.7917 16.8527L9.31594 12.8743L3.84017 16.8527L5.93173 10.4155L0.455955 6.43716H7.22438L9.31594 0Z" fill="#838383" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M9.31594 0L11.4075 6.43716H18.1759L12.7002 10.4155L14.7917 16.8527L9.31594 12.8743L3.84017 16.8527L5.93173 10.4155L0.455955 6.43716H7.22438L9.31594 0Z" fill="#838383" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M9.31594 0L11.4075 6.43716H18.1759L12.7002 10.4155L14.7917 16.8527L9.31594 12.8743L3.84017 16.8527L5.93173 10.4155L0.455955 6.43716H7.22438L9.31594 0Z" fill="#838383" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M9.31594 0L11.4075 6.43716H18.1759L12.7002 10.4155L14.7917 16.8527L9.31594 12.8743L3.84017 16.8527L5.93173 10.4155L0.455955 6.43716H7.22438L9.31594 0Z" fill="#838383" />
                </svg>
              </div>
              <div className="review-text">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore”
              </div>
              <div className="review-author">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                    <circle cx="25" cy="25.6318" r="25" fill="#838383" />
                  </svg>
                </span>
                <span>Person Name</span>
              </div>
            </div>
            <div className="review">
              <div className="review-stars">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M9.31594 0L11.4075 6.43716H18.1759L12.7002 10.4155L14.7917 16.8527L9.31594 12.8743L3.84017 16.8527L5.93173 10.4155L0.455955 6.43716H7.22438L9.31594 0Z" fill="#838383" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M9.31594 0L11.4075 6.43716H18.1759L12.7002 10.4155L14.7917 16.8527L9.31594 12.8743L3.84017 16.8527L5.93173 10.4155L0.455955 6.43716H7.22438L9.31594 0Z" fill="#838383" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M9.31594 0L11.4075 6.43716H18.1759L12.7002 10.4155L14.7917 16.8527L9.31594 12.8743L3.84017 16.8527L5.93173 10.4155L0.455955 6.43716H7.22438L9.31594 0Z" fill="#838383" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M9.31594 0L11.4075 6.43716H18.1759L12.7002 10.4155L14.7917 16.8527L9.31594 12.8743L3.84017 16.8527L5.93173 10.4155L0.455955 6.43716H7.22438L9.31594 0Z" fill="#838383" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                  <path d="M9.31594 0L11.4075 6.43716H18.1759L12.7002 10.4155L14.7917 16.8527L9.31594 12.8743L3.84017 16.8527L5.93173 10.4155L0.455955 6.43716H7.22438L9.31594 0Z" fill="#838383" />
                </svg>
              </div>
              <div className="review-text">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore”
              </div>
              <div className="review-author">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                    <circle cx="25" cy="25.6318" r="25" fill="#838383" />
                  </svg>
                </span>
                Person Name
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayCream;
