import React from 'react';
import './products.css';


const Products = ({ ProductItems,handleAddProduct}) => {
   return (
    <div className='products'>
    {ProductItems.map((productItem) => (
      <div className='product' key={productItem.id}>
        <div>
          <img
            className='product-image'
            src={productItem.image}
            alt={productItem.name}
          />
          
        </div>
        <div className='product-details'>
          <h2>{productItem.name}</h2>
          <span>{productItem.Price}</span>
        </div>
        
        <div className='addToCart'>
        <button className='add-cart-items'
        onClick={()=>handleAddProduct(productItem.id)}>Add To Cart</button>
        
      </div>
  </div>
      
      ))}

      
</div>
);
}
export default Products;

   
   
   
   
    













</>
  );
}

export default Products;
