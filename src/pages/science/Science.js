import "./Science.css";
import topleft from "../../assets/science/Rectangle.png";

function Science() {
  return (
    <div className="Science">
      <header className="Science-header">
        <p>SCIENCE PAGE</p>
      </header>

      {/* Top section with image and description */}
      <div className="Top-container">
        <img className="topLeftImg" src={topleft} alt="top left" />
        <div className="Top-description">
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore "Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque
          </p>
        </div>
      </div>

      {/* Middle section with description and image */}
      <div className="Middle-container">
        <div className="Middle-description">
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore "Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque
          </p>
        </div>
        <img className="bottomRightImg" src={topleft} alt="middle right" />
      </div>

      {/* Bottom description only */}
      <div className="Bottom-description">
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore "Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque
        </p>
      </div>
    </div>
  );
}

export default Science;
