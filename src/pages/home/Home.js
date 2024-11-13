import './Home.css';
import left_landing from '../../assets/home/left_landing.png';
import right_landing from '../../assets/home/right_landing.png';
import product_image from '../../assets/home/product_image.png';
import pharmacist from '../../assets/home/pharmacist.png';
import bottom_image from '../../assets/home/bottom_image.png';
import placeholder from '../../assets/placeholder.jpg';

function Home() {
  return (
    <div className="home">
      <div className="landing">
        <div className="landing-day-cream">
          <img src={left_landing} alt="Day Cream" />
        </div>
        <div className="landing-night-cream">
          <img src={right_landing} alt="Night Cream" />
        </div>
      </div>
      <div className="landing-text">
        Where luxurious skincare meets nature’s finest ingredients
      </div>
      <div className="product">
        <img src={product_image} alt="Day and Night Cream Set" />
        <div className="product-info">
          <h1>Day & Night Set Name</h1>
          <div className="product-price">
            $36
          </div>
          <div className="product-description">
            Experience the ultimate skincare transformation with our Day & Night Cream Duo, designed to nourish and revitalize your skin around the clock.
          </div>
          <div className="view-product">
            <a className="view-product" href="/">View Product</a>
          </div>
        </div>
      </div>
      <div className="pharmacist">
        <div className="pharmacist-text">
          <h1>Made by a pharmacist</h1>
          Crafted by a skilled pharmacist, our Day & Night Cream Duo combines expert knowledge with high-quality ingredients to deliver effective, trustworthy skincare.
        </div>
        <img src={pharmacist} alt="Pharmacist" />
      </div>
      <div className="bottom-image">
        <img src={bottom_image} alt="" />
      </div>
    </div>
  );
}

export default Home;
