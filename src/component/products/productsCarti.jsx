import { useState, useEffect, useContext } from "react";
import produc from "/public/data/product.json";
import "./productStyle.css";
import { Link } from "react-router-dom";
import { Cartcontexts } from "../../contexts/cartContexts";
import { productContext } from "../../contexts/ProductContext";

const Products = () => {
  const { product } = useContext(productContext)

  const [counts, setCounts] = useState({});
  const [categorySamples, setCategorySamples] = useState([]);
  const { addCart } = useContext(Cartcontexts);

  const max = 25;

  // Get one product per category
  useEffect(() => {
    const seenCategories = new Set();
    const samples = [];

    for (const item of product) {
      if (!seenCategories.has(item.category)) {
        seenCategories.add(item.category);
        samples.push(item);
      }
    }

    setCategorySamples(samples);
  }, []);

  const increment = (id) => {
    setCounts(prev => {
      const newCount = (prev[id] || 0) + 1;
      if (newCount > max) {
        alert("Maximum reached");
        return prev;
      }
      return { ...prev, [id]: newCount };
    });
  };

  const decrement = (id) => {
    setCounts(prev => {
      const newCount = (prev[id] || 0) - 1;
      if (newCount < 0) {
        alert("Minimum reached");
        return prev;
      }
      return { ...prev, [id]: newCount };
    });
  };

  return (
    <>
      <div className="proconcarti">Product Samples by Category</div>
      <div className="productsCon">
        {categorySamples.map((products,i) => (
          <div key={i} className="product">
          <div>{products.category}</div>
          <img src={products.image} alt="" />
          <h3>{products.name}</h3>
          <h2>₦{products.price}</h2>
          <div className="prodis">{products.description}</div>
          <div className="btnc" onClick={() => addCart(products)}> {/* ✅ Pass product */}
              <button>Add to Cart</button>
          </div>
      </div>
        ))}
      </div>
      <Link to="/product" className="allproduct"><button className="allproductbtn">All Product</button></Link>
    </>
  );
};

export default Products;
