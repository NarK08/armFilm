/* eslint-disable no-lone-blocks */
import { createContext } from "react";
import React from "react";
import "./index.css";

import { Provider } from "react-redux";

import { Header } from "./componets/ArmFilm/UI/Header";
import { Main } from "./componets/ArmFilm/UI/Main";
import { Footer } from "./componets/ArmFilm/UI/Footer";


import { store } from "./componets/ArmFilm/store/store";


function App() {


 return (
 <div className="App">


   <Header /> 

  <Provider store={store}>
 <Main />
  </Provider>
    <Footer />    


   </div> 
  )
}

export default App;


