import React from "react";
import './CartWidget.css'
import ErrorCart from "../Errors/errorCart";
import {useContext} from 'react'
import { CartContext} from '../../context/cartContext'
import TotalCart from "../Cart/TotalCart";



const CartWidget = () => {
    const {cart, setCart,  counter, setCounter, increment, decrement} = useContext(CartContext);



    const mostrarCart = () => {
        if (cart.length == 0){
            return  <ErrorCart/> 
        } else{
            return <TotalCart/>}  
        }
    



    return  mostrarCart();
    
    


}


export default CartWidget;