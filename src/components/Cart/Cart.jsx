import {useContext, useState} from 'react'
import { CartContext} from '../../context/cartContext'
import './Cart.css'





const Cart = ({item}) => {
  const {cart, setCart} = useContext(CartContext);

  console.log(cart)


  const increment = (id) =>{
      const pushCart = cart.map((item)=> {
        if (item.id === id){
          return { ...item, quantity: item.quantity + 1}
        };
        return item;
      })
      setCart(pushCart)
  }
  
  const decrement = (id) =>{
    const pushCart = cart.map((item) => {
      if (item.id === id){
        if (item.quantity > 1) {
          return {...item, quantity: item.quantity - 1}
        };
      }
      return item;
    });
    setCart(pushCart);
  };


  return cart.map((item) => {
    return( 
      <article key={item.id} className='artCarrito'>
        <div>
          <li  className='liCard'>
            <div className='divCard'>
              <div className='divCardImg'>
                <img className='imgCard' src={item.img} alt="img libro" />
              </div>
              <h4 className='name'>{item.name}</h4>
            </div>
            <p className="price"> USD {item.price * item.quantity} </p>
            <div className='divCount'>
                    <button onClick={() => decrement(item.id)}>-</button>
                    <p className='count'>{item.quantity}</p>
                    <button onClick={() =>  increment(item.id)}>+</button>
            </div>
          </li>
        </div>
      </article>
      
    )
  })
}

export default Cart;