import './Home.css';
import placeholder from '../../assets/placeholder.jpg';

function Home() {
  return (
    <div className="home">
      <div className="landing">
        <div className="landing-day-cream">
          <img src={placeholder} alt="Day Cream" />
          <h1>Day Cream Name</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
        </div>
        <div className="landing-night-cream">
          <img src={placeholder} alt="Night Cream" />
          <h1>Night Cream Name</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
        </div>
      </div>
      <div className="landing-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div className="product">
        <img src={placeholder} alt="Day and Night Cream Set" />
        <div className="product-info">
          <h1>Day & Night Set Name</h1>
          <div className="product-details">
            <span className="price">
              $XX
            </span>
            <span className="sizes">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <circle cx="10.5" cy="10.5" r="9.5" fill="#D9D9D9" stroke="black" stroke-width="2" />
              </svg> XXml
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <circle cx="10.5" cy="10.5" r="9.5" fill="#D9D9D9" stroke="#D9D9D9" stroke-width="2" />
              </svg> XXml
            </span>
          </div>
          <div className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="add-to-bag">
            <a className="add-to-bag" href="/">Add to bag</a>
          </div>
        </div>
      </div>
      <div className="pharmacist">
        <div className="pharmacist-text">
          <h1>Made by a pharmacist</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <img src={placeholder} alt="Pharmacist" />
      </div>
      <div className="bottom-image">
        <img src={placeholder} alt="" />
      </div>
      <div className="logo">
        <h1>Lavan Beauty Logo</h1>
      </div>
    </div>
  );
}

export default Home;
