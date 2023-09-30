import React from 'react';

const Cart = ({ cartItems }) => {
  

  return (
    <div className='cartitems'>
      <div className='cartitems-header'>
        Items Added To Cart:
      </div>
      {cartItems.length === 0 &&(
        <div className='cartitems-empty'>No Items are Added.</div>
      )}

      <div>
        {cartItems.map((item)=>(
          <div key={item.id} className='cartitem-list'>
            <img
            className='cartitems-image'
            src={item.image}
            alt={item.name}
            />
            <div className='cartitems-name'>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Cart;

        
