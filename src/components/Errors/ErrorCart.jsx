import React from 'react';
import "./Error.css";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

const ErrorCart = () => {
  return (
    <article className='artError'>
        <h2 className='tituloh'>Al parecer el carrito esta vacio</h2>
        <p className='pError'>Agrega nuevos productos!!</p>
        <Link to={"/"}>
          <Button className='comprarDetail' variant="contained">Volver al inicio</Button>
        </Link>
    </article>
  )
}

export default ErrorCart
