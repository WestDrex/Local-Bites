import React, { useState } from "react";
import "../Components/places.css";
import placesData from "../placesdata";

const PlacesSection = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="places-container">
      <h1>Recipes and Places to Get you started</h1>
      <div className="places-cards">
        <div className="text-section">
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
              <div className="rating">
                {"★".repeat(place.rating)}
                {"☆".repeat(5 - place.rating)}
              </div>
              <button className="discover-button">Discover</button>
            </div>
            <button
              className="favorite-button"
              onClick={() => toggleFavorite(place.id)}
            >
              {favorites.includes(place.id) ? "❤️" : "🤍"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesSection;
