import React, { useState } from 'react';
import './products.css';
import Item1 from '../Components/Images/img1.jfif'
import Item2 from '../Components/Images/img2.jfif'
import Item3 from '../Components/Images/img3.jfif'
import Item4 from '../Components/Images/img4.jfif'

const Products = ({ ProductItems,handleAddProduct}) => {
   return (
    <>
    <div className='row'>
      <div className='col-md-3'>
        <div class="card">
  <img src={Item1} alt='cake1'/>
  <div class="card-body">
    <h5 class="card-title">Choco Fillers</h5>
    <p class="card-text">Starts from Rs.1050</p>
    <label>Quantity:</label>
    <input type='number' id='size' placeholder='-1+ Kg'></input>
   <br/>
   
   <button className='product-add' onClick={()=>handleAddProduct(ProductItems)}>Add To Cart</button>

    </div>
</div>
</div>

<div className='col-md-3'>
<div class="card">
  <img src={Item2} alt='cake1'/>
  <div class="card-body">
    <h5 class="card-title">Choco Fillers</h5>
    <p class="card-text">Starts from Rs.1050</p>
    <label>Quantity:</label>
    <input type='number' id='size' placeholder='-1+ Kg'></input>
   <br/>
   
   <button className='product-add' onClick={()=>handleAddProduct(ProductItems)}>Add To Cart</button>
   
</div>
</div>
</div>

<div className='col-md-3'>
<div class="card">
  <img src={Item3} alt='cake1'/>
  <div class="card-body">
    <h5 class="card-title">Choco Fillers</h5>
    <p class="card-text">Starts from Rs.1050</p>
    <label>Quantity:</label>
    <input type='number' id='size' placeholder='-1+ Kg'></input>
   <br/>
   
   <button className='product-add' onClick={()=>handleAddProduct(ProductItems)}>Add To Cart</button>

    </div>
</div>
</div>

<div className='col-md-3'>
<div class="card">
  <img src={Item4} alt='cake1'/>
  <div class="card-body">
    <h5 class="card-title">Choco Fillers</h5>
    <p class="card-text">Starts from Rs.1050</p>
    <label>Quantity:</label>
    <input type='number' id='size' placeholder='-1+ Kg'></input>
   <br/>
   
   <button className='product-add' onClick={()=>handleAddProduct(ProductItems)}>Add To Cart</button>

    </div>
</div>
 </div> 
 
  
 </div>













</>
  );
}

export default Products;
