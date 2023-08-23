
import React from 'react'
import Header from './components/Layout/Header';
import Med from './components/Medicine/Med';
import CartProvider from './components/store/CartProvider'
import './App.css';

function App() {
  return (
    <CartProvider>
    <Header/>
    <Med/>
    </CartProvider>
  );
}

export default App;
