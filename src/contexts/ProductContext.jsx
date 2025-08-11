import { createContext, useEffect, useState } from "react";


export const productContext = createContext()

const ProductProvider = ({ children }) => {

    const [product, setproduct] = useState([])
    const [searchQuary, setsearchQuary] = useState('')
    const [cart, setcart] = useState([])
    const [gencart, setgencart] = useState([])


    const genitemclick = (productcart) => {
        setgencart((pre) => {
            const clickProduct = pre.find((p) => p.id === productcart.id)
            if (clickProduct) {
                const pName = clickProduct.name.toLowerCase();
                const pCarti = clickProduct.category.toLowerCase();
                return pName.includes(product.toLowerCase()) || pCarti.includes(product.toLowerCase())
            }
        })
        console.log(gencart);
    }

    const addCart = (productcart) => {
        setcart((pre) => {
            const exProduct = pre.find((p) => p.id === productcart.id)
            if (exProduct) {
                // settotalquantity((pre) => pre + 1)
                return pre.map((item) => item.id === productcart.id ? { ...item, quantity: item.quantity + 1, } : item)
            }
            // settotalquantity((pre) => pre + 1)
            return [...pre, { ...productcart, quantity: 1 }]
        })
        console.log(cart);
    }


    useEffect(() => {
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
    }, [])

    const filterProduct = product.filter((item) => {
        const pName = item.name.toLowerCase();
        const pCarti = item.category.toLowerCase();
        return pName.includes(searchQuary.toLowerCase()) || pCarti.includes(searchQuary.toLowerCase())
    })

    const getTotalQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }


    const value = {
        filterProduct,
        getTotalQuantity,
        product,
        searchQuary,
        setsearchQuary,
        addCart,
        cart,
        gencart,
        genitemclick
    }


    return (
        <productContext.Provider value={value}>{children}</productContext.Provider>
    )

}


export default ProductProvider