import product from "/public/data/products.json";
import "./handpick.css";
import { useEffect, useState } from "react";

const Handpick = () => {
    const [handpickedProducts, setHandpickedProducts] = useState([]);

    useEffect(() => {
        try {
            const initialHandpicked = product.slice(0, 10);
            setHandpickedProducts(initialHandpicked);
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <div>
                <h2 className="topicsh">Handpicked for you ❤️</h2>
                <div className="carogeneralcon gg">
                        {/* <div className="dd lsc" >⇚</div>
                        <div className="dd rsc">⇛</div> */}
                    <div className="handpicked-container">
                        {handpickedProducts.map((item) => (
                            <div key={item.id} className="handpicked-item">
                                <div className="pimgs">
                                    <img src={item.image} alt={item.name} width={"100%"} height={220} />
                                </div>
                                <div className="nameratescon">
                                    <div>{item.name}</div>
                                    <div className="handpicked-item-rating">⭐{item.rating}</div>
                                </div>
                                <div>{item.delivery_time}</div>
                                <div className="handpicked-item-tags">{item.tags && item.tags.join(', ')}</div>
                                <div>{item.category}</div>
                                <div className="">{item.location}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Handpick;