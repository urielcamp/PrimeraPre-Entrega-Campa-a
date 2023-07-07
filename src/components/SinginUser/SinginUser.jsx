import { useState } from 'react';

import React  from "react";
import './Contact.css'

import {db} from "../../firebase/firebaseConfig";

import { collection, addDoc } from "firebase/firestore"; 

const initialState = {
    name:"",
    mail:"",
    age:"",
};


const SinginUser = () => {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        const {value, name} = e.target;
        setValues({ ...values, [name]:value});
    }

    const onSubmit = async (e)  => {
        e.preventDefault();

        // Add a new document with a generated id.
const docRef = await addDoc(collection(db, "users"), {
    values,
    });
    console.log("Document written with ID: ", docRef.id);

        setValues(initialState);
    }

    return(
        <form className="logg" onSubmit={onSubmit}>
            <div className="divNn">
                <h2 className="nameLogg"> Iniciar Sesion</h2>
            </div>
            <img src="https://th.bing.com/th/id/R.7b528d6309ee84dc0d8fbffef7cc9347?rik=8wk4MSW3GZq%2f7g&riu=http%3a%2f%2fwww.psdgraphics.com%2ffile%2fuser-icon.jpg&ehk=4QSu%2bJSvX%2bN2ZID%2fIjxhYSQSPXnkuSk%2bZ0gxqdIQWSU%3d&risl=&pid=ImgRaw&r=0" alt="img" />
                <div className="inputNamee">
                    <input name="name" className="input" type="text" value={values.name} onChange={handleChange} />
                    <label  className="textCc" htmlFor="username">Nombre Completo</label>
                </div>
                <div className="inputMaill">
                    <input name="mail" className="input" type="text" value={values.mail} onChange={handleChange} />
                    <label className="textC" htmlFor="Mail">Correo elecronico</label>
                </div>
                <div className="inputAgee">
                    <input name="age" className="input" type="text" value={values.age} onChange={handleChange} />
                    <label className="textC" htmlFor="age">Edad</label>
                </div>
                <input id="iniciar" className="subm" type="submit" value="Iniciar"/>
        </form>
    )
}


export default SinginUser;