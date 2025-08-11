import { useContext } from "react"
import { productContext } from "../../../contexts/ProductContext"
import "./allproduct.css"
import { Link } from "react-router-dom"

const Allproduct = () => {
    const { product } = useContext(productContext)
    const last20product = product.slice(-12)

    const getrandomProduct = (product, count = 12) => {
        const shuffled = [...product].sort(() => 0.12 - Math.random())
        return shuffled.slice(0, count)
    }
    const allproducts = getrandomProduct(product)

    return (
        <div className="allpro_container">
            <h1>All Restaurants</h1>


            <div className="gidcon">
                {
                    allproducts.map((products) => (
                        <div className="itemcon" key={products.id}>
                            <Link to={`/product/${products.id}`}>
                                <div className="__image_container">
                                    <img
                                        src={products.image}
                                        alt={products.name}
                                        className="__image"
                                    />
                                </div>
                                <div className="__info">
                                    <div className="__name_rating">
                                        <div className="__name">{products.name}</div>
                                        <div className="__rating">
                                            ⭐{products.rating}
                                        </div>
                                    </div>
                                    <div className="__delivery_time">
                                        🕒{products.delivery_time}
                                    </div>
                                    <div className="__tags">
                                        {products.tags && products.tags.join(", ")}
                                    </div>
                                    <div className="__category">
                                        {products.category}{" "}
                                        <span className="__location">
                                            {products.location}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Allproduct