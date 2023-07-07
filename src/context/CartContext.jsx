import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext ();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


    useEffect(() => {
        
    });

    return(
        <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>
    )
}

export default CartProvider;