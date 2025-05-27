import { createContext } from "react"
import { useState } from "react"


export const Cartcontexts  = createContext()

export const CartProvider = ({children})=> {
    const [cart, setcart] = useState([])
    // const [totalquantity, settotalquantity] = useState(0)

    const addCart = (product)=>{
            setcart((pre) => {
                const exProduct = pre.find((p) => p.id === product.id)
                if (exProduct) {
                    // settotalquantity((pre) => pre + 1)
                    return pre.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1,} : item)
                }
                // settotalquantity((pre) => pre + 1)
                return [...pre, {...product ,quantity: 1}]
            })
            console.log(cart);
    }

    const getTotalQuantity = ()=>{
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    let values = {
        addCart,
        cart,
        getTotalQuantity
    }

    return(
        <Cartcontexts.Provider value={values}>
            {children}
        </Cartcontexts.Provider>
    )
}

// export default {Cartcontexts, CartProvider}
