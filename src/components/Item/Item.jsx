import React from "react";
import { Link  } from "react-router-dom";


const Item = ({id, name, color, price, img, descripcion }) => {
    return (
        <section className="CardItem">
            <header className="Header">
                <h2 className="subHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="imgCard" />
            </picture>
            <article>
                <p>precio: ${price}</p>
                <p>descripcion: {descripcion} </p>
                <p> color: {color}</p>
                <Link to={`/detail/${id}`}><button>detalle del producto</button></Link>
            </article>
        </section>
    )
}

export default Item;