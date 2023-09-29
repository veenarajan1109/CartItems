import React from 'react';

const Cart = ({ cartItems }) => {
  console.log("cartItems:", cartItems);

  return (
    <div className='cartitems'>
      <div className='cartitems-header'>
        Items Added To Cart:
      </div>
      {cartItems && cartItems.length === 0 ? (
        <div className='cartitem-empty'>No Items added to cart</div>
      ) : (
        <div>
        {cartItems && cartItems.length > 0 && cartItems.map((item, index) => (
            <div key={item.id} className='cartitem-list'>
              <img
                className='cartitems-image'
                src={item.Image}
                alt={item.Name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
