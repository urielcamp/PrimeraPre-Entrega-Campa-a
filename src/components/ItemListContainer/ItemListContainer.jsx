import React, { useState, useEffect } from "react";
import { getProducts } from "../../../productos";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return(
        <div>
            <h1>productos</h1>
            <ItemList products={products}/>
        </div>
    )
};

export default ItemListContainer;