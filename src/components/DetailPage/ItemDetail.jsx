import React, { useContext, useState } from 'react'
import './ItemDetail.css'

import Button from '@mui/material/Button';
import { CartContext } from '../../context/cartContext';



const ItemDetail = ({book, id, price, img, name}) => {
    const {cart, setCart,  counter, setCounter, increment, decrement } = useContext(CartContext);


    const handleClick = (item) => {
       // setCart([...cart, book]);
    setCart((bookAgregado) => {
        const bookElegido = bookAgregado.find((item) => item.id === book.id);
        if (bookElegido) {
            return bookAgregado.map((prod) => {
                if (item.id === book.id) {
                    return {... item, quantity: item.quantity + 1};
                }else{
                    return item;
                }
            });
        }else{
            return [...bookAgregado, {...book, quantity: 1  }];
        }
    });
    };


    return ( 
        <article className='cardDetail'>
            <div className='divImgDetail'>
                <img className='imgDetail' src={book.img} alt="book"/>
            </div>
            <div className='contDetail'>
                <h2 className='nameDetail'>{book.name}</h2>
                <p className='descDetail'>{book.description}</p>
                <h4 className='priceDetail'>Precio: USD {book.price}</h4>
                <Button onClick={() => handleClick()} className='comprarDetail' variant="contained">Añadir al carrito</Button>
            </div>
        </article>
    );
    }


export default ItemDetail;

// setCart((currItems) => {
//    const prodItems = currItems.find((item) => item.id === id);
 //   if(prodItems) {
  //      return currItems.map((item) => {
   //         if(item.id === id){
     //           return { ...item, quantity : item.quantity + counter };
       //     }else{
         //       return item;
        //    }
     //   });
   // }else{
   //     return [...currItems, {quantity: counter, id, name, price, img} ];
  //  }
// });