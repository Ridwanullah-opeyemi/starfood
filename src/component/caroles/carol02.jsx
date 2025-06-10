import { productContext } from "../../contexts/ProductContext";
import "./carol.css"; // Renamed CSS file
import { useContext, useEffect, useState } from "react";

const Carole02 = () => {
    const { product,addCart } = useContext(productContext)
  
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    try {
      setAllRestaurant(product.splice(6, 10));
    } catch (error) {
      console.log(error);
    }
  }, [product]);

  return (
    <div className="all-products-section">
      <h2 className="all-products-section__title">All Restaurants</h2>
      <div className="all-products-section__container">
        {allRestaurant.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card"  onClick={() => addCart(restaurant)}>
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

export default Carole02;