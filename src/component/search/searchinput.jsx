import { useContext, useEffect, useState } from "react"
import Carousel from "../carousel/carousel"
import Handpick from "../products/handpick"
import "./hooks/search.css"
import { productContext } from "../../contexts/ProductContext"


const GeneralSearch = () => {

    const { filterProduct } = useContext(productContext)
    return (
        <>
            <Handpick />
            <div className="searchproducts">

                <div className="all-products-section__title">This is your Search results</div>
                <div className="all-products-section__container" >
                    {filterProduct.map((restaurant) => (
                        <div key={restaurant._id} className="restaurant-card">
                            <div className="restaurant-card__image-container">
                                <img
                                    src={restaurant.image}
                                    alt={restaurant.name}
                                    width={100}
                                    height={100}
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
        </>
    )
}

export default GeneralSearch