import { createContext, useState } from "react";
import produc from "../assets/data/product.json"
export const product = createContext()

const Product = ({childern})=>{
    
    const [categories,setcategories] = useState({})
    console.log(produc);
    

    return(
        <product.Provider value={value}>{childern}</product.Provider>
    )
        
}


export default Product