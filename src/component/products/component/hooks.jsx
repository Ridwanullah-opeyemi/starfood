import { useState } from "react";
import produc from "/public/data/products.json";

const ProductHooks = () => {
    const [product, setProduct] = useState(produc);
    return { product };
}


// const ProductHooks = () => {
//     const [product, setproduct] = useState(produc)
//     const [cart, setcart] = useState([])
//     const [totalquantity, settotalquantity] = useState(0)
//     let cc = []
    
//     const addCart = (id)=>{
//         const products = product.find((p) => p.id === id)
//         if (products) {
//             setcart((pre) => {
//                 const exProduct = pre.find((p) => p.id === id)
//                 if (exProduct) {
//                     settotalquantity((pre) => pre + 1)
//                     return pre.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item)
//                 }
//                 settotalquantity((pre) => pre + 1)
//                 return [...pre, {...products,quantity: 1}]
//             })
//             console.log(cart);
//             console.log(totalquantity);
            
//         }
//         else{
//             console.log("no");
            
//         }
        
//     }
    
//     return{
//         product,
//         addCart,
//         totalquantity,
//         cart
//     }
// }

export default ProductHooks