import React, {useState, useEffect} from "react";
import { useParams  } from "react-router-dom";
import { getProductsById } from "../../../productos";
import ItemList from "../ItemList/ItemList";
import Item from "../Item/Item";


const DetailPage = () => {
            let {id} = useParams();
            const [product, setProduct] = useState({})
            
            useEffect(() => {
                getProductsById(id)
                    .then(response => {
                        setProduct(response)
                    })
                    .catch(error => {
                        console.error(error);
                    })
            }, [id])
            return(
                <div>
                    <Item {...product} />
                </div>
            )
        };

export default DetailPage;