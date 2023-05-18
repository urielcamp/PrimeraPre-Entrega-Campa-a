import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
  return(
    <div>
      <Navbar/>
      <ItemListContainer greeting="Saludos tutor, ojala este bien la tarea"/>
    </div>
  );
};

export default App;
