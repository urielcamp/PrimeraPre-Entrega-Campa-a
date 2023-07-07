import { useState, useContext } from 'react';

import React  from "react";
import './TotalCart.css'

import {db} from "../../firebase/firebaseConfig";

import { collection, addDoc } from "firebase/firestore"; 

import { CartContext} from '../../context/cartContext'

import Button from '@mui/material/Button';
import MensajeCompra from '../Mensajes/MensajeCompra';


const initialState = {
    name:"",
    mail:"",
    age:"",
};


const FormCart = () => {
    const [values, setValues] = useState(initialState);

    const [purchaseId, setPurchaseId] = useState("")

    const {cart, setCart,  counter, setCounter, increment, decrement} = useContext(CartContext);




    const handleChange = (e) => {
        const {value, name} = e.target;
        setValues({ ...values, [name]:value});
    }

    const onSubmit = async (e)  => {
        e.preventDefault();

        // Add a new document with a generated id.
const docRef = await addDoc(collection(db, "compras"), {
    values,
    });
    console.log("Document written with ID: ", docRef.id);
        setPurchaseId(docRef.id);
        setValues(initialState);
    }

    return(
        <div>
        <form className="log" onSubmit={onSubmit}>
            <div className="divN">
                <h2 className="nameLog"> Formulario de compra</h2>
            </div>
                <div className="inputName">
                    <input name="name" className="input" type="text" value={values.name} onChange={handleChange} />
                    <label  className="textC" htmlFor="username">Nombre Completo</label>
                </div>
                <div className="inputMail">
                    <input name="mail" className="input" type="email" value={values.mail} onChange={handleChange} />
                    <label className="textC" htmlFor="Mail">Correo elecronico</label>
                </div>
                <div className="inputAge">
                    <input name="age" className="input" type="text" value={values.age} onChange={handleChange} />
                    <label className="textC" htmlFor="age">Direccion de entrega</label>
                </div>
                <Button  type='submit' className='comprarDetail' variant="contained">Confirmar Compra</Button>
        </form>
        {purchaseId && <MensajeCompra purchaseId={purchaseId}/>}
        </div>
    );
};


export default FormCart;

// <input id="iniciar" className="subm" type="submit" value="Iniciar" onClick={() => cleanCart()}/>

//<Button className='comprarDetail' variant="contained">Confirmar Compra</Button>