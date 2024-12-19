import { useState } from "react";
import { cartContext } from "./cartContext";

export default function CartProvider ({children}) {
    const [cart, setCart] = useState ([])
    
    const addToCart = product => {
        setCart([...cart, product])
        console.log(cart)
    }

     const getQty = () => {
        const onlyQty = cart.map (prod => prod.quantity)   
        const totalQty = onlyQty.reduce((accumulator, currentValue) => accumulator + currentValue ,0)
        return totalQty
    }

    return(  
    <cartContext.Provider value={{cart , addToCart, getQty}}>
        {children}
    </cartContext.Provider>
    )
}