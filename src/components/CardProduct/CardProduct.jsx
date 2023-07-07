import React from 'react'
import './CardProduct.css'
import {Link} from "react-router-dom";


const CardProduct = ({book}) => {
  return (
    <figure className='card'>
      <img className='cardImg' src={book.img} alt="img libros" />
      <figcaption className='cardBody'>
        <div>
          <h2 className='cardName'>{book.name}</h2>
          <p className='cardAutor'>{book.author}</p>
        </div>
        <Link to={`/detail/${book.id}`}><button className='botonComprar'>Ver Detalle</button></Link>
      </figcaption>
    </figure>
  );
}

export default CardProduct;