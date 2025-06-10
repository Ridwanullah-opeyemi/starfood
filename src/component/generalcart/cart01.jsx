import "./cart01.css"; // Renamed CSS file
import { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContext";

const GenCart = () => {
    const { cart } = useContext(productContext)
  


  return (
    <div className="all-products-section">
      <div className="all_products" style={{overflowY: "scroll"}}>
        {cart.map((restaurant,i) => (
          <div key={i} className="restaurant-cards">
            <div className="restaurant-card__image-container">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="restaurant-card__image"
              />
            </div>
            <div className="restaurant-card__info">
              <div className="restaurant-card__name-rating">
                <div className="restaurant-card__name">{restaurant.name}</div>
                <div className="restaurant-card__rating">⭐{restaurant.rating}</div>
              </div>
              <div className="restaurant-card__delivery-time">
                🕒{restaurant.delivery_time}
              </div>
              <div className="restaurant-card__tags">
                {restaurant.tags && restaurant.tags.join(", ")}
              </div>
              <div className="restaurant-card__category">{restaurant.category} <span className="restaurant-card__location">{restaurant.location}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenCart;