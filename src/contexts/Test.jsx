import { createContext, useEffect, useState } from "react";


export const productContext = createContext()

const ProductProvider = ({ children }) => {
  const [product, setproduct] = useState([]);
  const [searchQuary, setsearchQuary] = useState('');
  const [cart, setcart] = useState([]);
  const [gencart, setgencart] = useState([]); // ✅ always an array

  const genitemclick = (productcart) => {
    setgencart([productcart]); // ✅ set clicked product as array
  };

  const addCart = (productcart) => {
    setcart((pre) => {
      const exProduct = pre.find((p) => p.id === productcart.id);
      if (exProduct) {
        return pre.map((item) =>
          item.id === productcart.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...pre, { ...productcart, quantity: 1 }];
    });
  };

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const res = await fetch("/data/products.json");
        const data = await res.json();
        setproduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchproduct();
  }, []);

  const filterProduct = product.filter((item) => {
    const pName = item.name.toLowerCase();
    const pCarti = item.category.toLowerCase();
    return (
      pName.includes(searchQuary.toLowerCase()) ||
      pCarti.includes(searchQuary.toLowerCase())
    );
  });

  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const value = {
    filterProduct,
    getTotalQuantity,
    product,
    searchQuary,
    setsearchQuary,
    addCart,
    cart,
    gencart,
    genitemclick,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};



export default ProductProvider