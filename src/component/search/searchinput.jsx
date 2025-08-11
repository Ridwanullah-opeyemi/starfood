import { useContext, useEffect, useState } from "react"
import "./hooks/search.css"
import { productContext } from "../../contexts/ProductContext"
import Handpick from "../products/handpick/handpickproducts"
import { Link } from "react-router-dom"
import Restorance from "../products/restorance/restorance"
import Discount from "../products/discount/discount"
import Allproduct from "../products/allproducts/allproduct"


const GeneralSearch = () => {

    const { filterProduct } = useContext(productContext)
    return (
        <>
            <Handpick />
            <Restorance />
            <Discount />
            <Allproduct />

            <div className="searchproducts">

                <div className="all-products-section__title">This is your Search results</div>
                <div className="all-products-section__container gidcon" >
                    {filterProduct.map((restaurant) => (
                        <div className="itemcon" key={restaurant.id}>
                            <Link to={`/product/${restaurant.id}`}>
                                <div className="__image_container">
                                    <img
                                        src={restaurant.image}
                                        alt={restaurant.name}
                                        className="__image"
                                    />
                                </div>
                                <div className="__info">
                                    <div className="__name_rating">
                                        <div className="__name">{restaurant.name}</div>
                                        <div className="__rating">
                                            ⭐{restaurant.rating}
                                        </div>
                                    </div>
                                    <div className="__delivery_time">
                                        🕒{restaurant.delivery_time}
                                    </div>
                                    <div className="__tags">
                                        {restaurant.tags && restaurant.tags.join(", ")}
                                    </div>
                                    <div className="__category">
                                        {restaurant.category}{" "}
                                        <span className="__location">
                                            {restaurant.location}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default GeneralSearch