/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Learn.css";
import middleImage from "../../assets/learn/middle_image.png";
import ingredient from "../../assets/learn/ingredient.png";

function Learn() {
  const [selectedItem, setSelectedItem] = useState(null);
  const glossaryItems = [
    {
      name: "chloride",
      image: ingredient,
      foundIn: "Night Cream",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    },
    {
      name: "isopropyl",
      image: ingredient,
      foundIn: "Night Cream",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    },
    {
      name: "fatty accid",
      image: ingredient,
      foundIn: "Night Cream",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    },
    {
      name: "petrolatum",
      image: ingredient,
      foundIn: "Night Cream",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    },
    {
      name: "Oil",
      image: ingredient,
      foundIn: "Night Cream",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    },
    {
      name: "Aloe Vera",
      image: ingredient,
      foundIn: "Night Cream",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    },
    {
      name: "Glycerin",
      image: ingredient,
      foundIn: "Night Cream",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    },
    {
      name: "Water",
      image: ingredient,
      foundIn: "Night Cream",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    },
    {
      name: "Silicate",
      image: ingredient,
      foundIn: "Night Cream",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="Learn">
      <header className="Learn-header">
        <p>INGREDIENTS</p>
      </header>

      {/* Glossary Section */}
      <div className="Glossary-container">
        <div className="Glossary-content">
          <ul className="Glossary-list">
            {glossaryItems.map((item) => (
              <li
                key={item.name}
                className={`Glossary-item ${
                  selectedItem?.name === item.name
                    ? "Glossary-item-selected"
                    : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          {selectedItem && (
            <div className="Glossary-image-container">
              <img src={selectedItem.image} className="Glossary-image" />
              <div className="Glossary-text-container">
                <h3 className="Glossary-name">{selectedItem.name}</h3>
                <p className="Glossary-description">
                  {selectedItem.description}
                </p>
                <p className="Glossary-foundIn">
                  Found in Lavan's {selectedItem.foundIn}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Science Section */}
      <div className="Science-container">
        <img className="Middle-image" src={middleImage} alt="middle" />
        <header className="Science-header">
          <p>SCIENCE</p>
        </header>
        <div className="Science-description">
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore "Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque
          </p>
        </div>
        <button className="Learn-button">Learn More</button>
      </div>
    </div>
  );
}

export default Learn;