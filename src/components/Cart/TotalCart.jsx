import {useContext, useState} from 'react'
import { CartContext } from '../../context/cartContext';
import Cart from './Cart';
import FormCart from './FormCart';
import './TotalCart.css'
import Button from '@mui/material/Button';

const TotalCart = (item) => {
    const {cart, setCart,  counter, setCounter, increment, decrement} = useContext(CartContext);
    
    const limpiarCarrito = () => {
        setCart([]);
        console.log(cart)
    }

    const total = cart.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);
    console.log(total)

    
    
    return (
        <article className='artT'>
            <div className='divCt'>
                <h2 className='tCard'>Carrito</h2>
                <div className='cT'>
                <   Cart />
                    <p className='totalPagar'> Total: USD {total}</p>
                </div>
                <Button onClick={() => limpiarCarrito()} className='limpiarCart' variant="contained">Limpiar carrito</Button>
            </div>
            <div>
                <FormCart/>
            </div>
        </article>
    )
}

export default TotalCart;