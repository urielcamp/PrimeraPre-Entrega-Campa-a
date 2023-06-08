import { BrowserRouter, Routes, Route  } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/CartWidget/CartWidget";
import Contact from "./components/Contact/Contact";
import DetailPage from "./components/DetailPage/DetailPage";


const App = () => {
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/user" element={<Contact/>}/>
        <Route path="/card" element={<CartWidget/>}/> 
        <Route path="/detail/:id" element={<DetailPage/>}/> 
        <Route path="*" element={<h1>error</h1>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
