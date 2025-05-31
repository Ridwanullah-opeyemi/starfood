import product from "/public/data/products.json";
import "./component/product.css"; // Renamed CSS file
import { useEffect, useState } from "react";

const Allproducts = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    try {
      setAllRestaurant(product.splice(5, 9));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="all-products-section">
      <h2 className="all-products-section__title">All Restaurants</h2>
      <div className="all-products-section__container">
        {allRestaurant.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
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
      <div className="all-products-section__more">More</div>
    </div>
  );
};

export default Allproducts;