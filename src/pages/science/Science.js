import React from "react";
import "./Science.css";
import image1 from "../../assets/science/image1.jpg";
import image2 from "../../assets/science/image2.jpg";

function Science() {
  return (
    <div className="Science">
      <header className="Science-header">
        <p>SCIENCE PAGE</p>
      </header>

      {/* Top section with image and description */}
      <div className="Top-container">
        <img className="topLeftImg" src={image1} alt="top left" />
        <div className="Top-description">
          <p>
            Saffron, often regarded as the "red gold," is one of the world's
            most precious and highly sought-after spices. Known for its vibrant
            crimson threads, this exotic spice has been used for centuries for
            its unparalleled medicinal and therapeutic properties. Saffron is
            rich in antioxidants, such as crocin, safranal, and picrocrocin,
            which provide it with remarkable anti-inflammatory, mood-enhancing,
            and skin-benefiting qualities. In skincare, saffron is lauded for
            its ability to brighten the complexion, reduce pigmentation, and
            protect against environmental stressors, making it an exceptional
            ingredient in luxury formulations. Its high value and scarcity,
            combined with its extensive health benefits, make saffron not only a
            symbol of opulence but also a powerful tool for overall wellness.
          </p>
        </div>
      </div>

      {/* Middle section with description and image */}
      <div className="Middle-container">
        <div className="Middle-description">
          <p>
            Ayurveda, an ancient system of medicine originating in India over
            5,000 years ago, emphasizes a holistic approach to health and
            well-being. Derived from the Sanskrit words "ayur" (life) and "veda"
            (science or knowledge), Ayurveda seeks to balance the body, mind,
            and spirit through personalized regimens, natural remedies, and
            lifestyle practices. It is rooted in the concept of doshas—Vata,
            Pitta, and Kapha—which represent unique energy types and influence
            an individual's physical and emotional well-being. By harmonizing
            these energies, Ayurvedic treatments aim to promote optimal health,
            prevent disease, and encourage self-healing. Saffron holds a revered
            place in Ayurvedic medicine due to its numerous therapeutic
            properties, such as enhancing complexion, boosting immunity, and
            balancing doshas, reflecting the deep synergy between this ancient
            science and the healing power of nature.
          </p>
        </div>
        <img className="bottomRightImg" src={image2} alt="middle right" />
      </div>
    </div>
  );
}

export default Science;
