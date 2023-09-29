import Data from './Components/Data';
import Header from './Components/Header';
import { BrowserRouter as Router } from "react-router-dom"
import Routess from './Components/routes';
import { useState } from 'react';
import Products from './Components/products';

const App = () => {
  const { ProductItems } = Data;
  
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Router>
        <Header />
        <Routess
          ProductItems={ProductItems} 
          cartItems={cartItems}
          handleAddProduct={handleAddProduct} 
        />
      </Router>
    </div>
  );
};

export default App;
