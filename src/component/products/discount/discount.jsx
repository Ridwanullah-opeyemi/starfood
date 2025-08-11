import { useContext } from "react";
import { productContext } from "../../../contexts/ProductContext";
import { Link } from "react-router-dom";

const Discount = () => {
    const { product } = useContext(productContext);
    const getrandomProduct = (product, count = 6) => {
        const shuffled = [...product].sort(() => 0.6 - Math.random())
        return shuffled.slice(0, count)
    }
    const handpick = getrandomProduct(product)
    return (
        <div className="containerg">
            <h1>Discounts</h1>
            <div className="left_scroll">←</div>
            <div className="right_scroll">⇾</div>
            <div className="mcon">
                <div className="rcon">
                    {
                        handpick.map((product) => (
                            <div className="product_card" key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <div className="__image_container">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="__image"
                                        />
                                    </div>
                                    <div className="__info">
                                        <div className="__name_rating">
                                            <div className="__name">{product.name}</div>
                                            <div className="__rating">
                                                {product.rating}⭐
                                            </div>
                                        </div>
                                        <div className="__delivery_time">
                                            🕒{product.delivery_time}
                                        </div>
                                        <div className="__tags">
                                            {product.tags && product.tags.join(", ")}
                                        </div>
                                        {/* <div className="__category">
                                                {product.category}{" "}
                                                <span className="__location">
                                                    {product.location}
                                                </span>
                                            </div> */}
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Discount