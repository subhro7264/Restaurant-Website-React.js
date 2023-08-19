import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {


  const [cartItemShown, setCartItemShown]=useState(false)
  
  const showCartHandler=()=>{
    setCartItemShown(true);
  }
  
  const hideCartHandler=()=>{
    setCartItemShown(false);
  }
  
  return (
    <Fragment>
     {cartItemShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
