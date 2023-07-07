import React from 'react'
import './NavBar.css'
import { Link  } from "react-router-dom";

const Navbar = () => {
    return (
        <article className='articleNav' >
            <div className='divImg'>
            <Link to="/">
            <img className='imgNav'  src="https://th.bing.com/th/id/OIP.CNF_ZcoZbAc_m1b0aqtlTQHaHB?pid=ImgDet&rs=1" alt="logo tiendita" />
            </Link>
            </div>
            <ul className='ulNav'>
                <li className='liNav'>
                    <Link className='linkNav' to="/SinginUser">Usuario</Link>
                </li>
                <div>
                    <li className='liNav'>
                    <Link className='linkNav' to="/carrito">Carrito</Link>
                    </li>
                </div>
            </ul>
        </article>
    )
}

export default Navbar;