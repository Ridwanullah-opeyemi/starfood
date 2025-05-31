import { createContext, useEffect, useState } from "react";


export const productContext = createContext()

const ProductProvider = ({children})=>{
    
    const [product,setproduct] = useState([])
    const [searchQuary,setsearchQuary] = useState('')
    
    useEffect(()=>{
        const fecthproduct = async () => {
            
            try {
                // const baseurl = "http://localhost:3001/products"
                // const res = await fetch(baseurl)
                // const data = await res.json()
                // let product = data.products
                // setproduct(product)
                console.log(product);
                const res = await fetch("/data/products.json")
                const data = await res.json()
                setproduct(data)
            } catch (error) {
                console.log(error);
            }
            
        }
        fecthproduct()
    },[])

    const filterProduct = product.filter((item)=>{
        const pName = item.name.toLowerCase();
        const pCarti = item.category.toLowerCase();
        return pName.includes(searchQuary.toLowerCase()) || pCarti.includes(searchQuary.toLowerCase())
    })

    const value = {
        filterProduct,
        product,
        searchQuary,
        setsearchQuary
    }

    
    return(
        <productContext.Provider value={value}>{children}</productContext.Provider>
    )
        
}


export default ProductProvider