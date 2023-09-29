import React from 'react';
import Products from './products';
import Signup from './signup';
import { Routes, Route } from 'react-router-dom';
import Cart from './cart';

const Routess = ({ProductItems, cartItems, handleAddProduct})  => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products ProductItems={ProductItems} handleAddProduct={handleAddProduct}/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct}/>}/>
      </Routes>
    </div>
  );
}

export default Routess;
