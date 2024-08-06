import React, { useState } from "react";
import "../Components/places.css";
import placesData from "../placesdata";
import heart from "../../public/assets/Images/heart.png";
import unheart from "../../public/assets/Images/unheart.png";

const PlacesSection = () => {
  const [isFavorites, setIsFavorites] = useState(false);

  const toggleFavorite = (id) => {
    setIsFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <div className="places-container">
      <h1>Recipes and Places to Get you started</h1>
      <div className="places-cards">
        <div className="places-text-section">
          <h2>Destination guides</h2>
          <h3>Get Inspired</h3>
          <p>
            Explore the best regional dishes and drinks to get deeper into a
            culture. Where will you eat next?
          </p>
        </div>
        {placesData.map((place) => (
          <div className="placescard" key={place.id}>
            <img src={place.image} alt={place.name} className="place-image" />
            <div className="places-card-content">
              <h4>{place.name}</h4>
              <div className="places-rating">
                {"★".repeat(place.rating)}
                {"☆".repeat(5 - place.rating)}
              </div>
              <button className="places-discover-button">Discover</button>
            </div>
            <img
              src={isFavorites[place.id] ? heart : unheart}
              alt="fav-icon"
              className="favourite-icon"
              onClick={() => toggleFavorite(place.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesSection;
