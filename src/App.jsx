import { BrowserRouter, Routes, Route  } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/containers/ItemListContainer/ItemListContainer";
import SinginUser from "./components/SinginUser/SinginUser";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemDetailContainer from "./components/containers/ItemDetailContainer/ItemDetailContainer";
import BooksGenre from "./components/BooksGenre/BooksGenre";
import BooksState from "./components/BookState/BookState";
import CartProvider from "./context/cartContext";
import Errorpage from "./components/Errors/Errorpage";




const App = () => {

//console.log(import.meta.env.VITE_API_KEY)

  return(
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path="*" element={<Errorpage/>}/>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/SinginUser" element={<SinginUser/>}/>
          <Route path="/carrito" element={<CartWidget/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/genre/:genre" element={<BooksGenre/>}/>
          <Route path="/state/:state" element={<BooksState/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;

