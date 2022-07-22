import React, { useState } from 'react';
import Data  from "./Components/Data.js";
import Header from "./Components/Header.js";
// import Routes from "./Components/Routes.js";
import Product from "./Components/Products";
import Cart from "./Components/Cart.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {

  const { productItems } = Data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist, quantity: ProductExist.quantity + 1} : item)
      );
    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else{
      setCartItems(
        cartItems.map((item) => 
        item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity - 1} : item
      )
      );
    }
  }

  const handleCartClearance = () => {
    setCartItems([]);
  }

  return (
    <>
    {/* <div>App</div> */}
    <Router>
      <Header cartItems = {cartItems}/>
      {/* <Routes 
        productItems = {productItems} 
        cartItems = {cartItems}
        /> */}
        <Routes>
          <Route exact path="/product" element={<Product 
          productItems = {productItems} 
          handleAddProduct = {handleAddProduct}/>} />
          <Route exact path="/cart" element={<Cart 
          cartItems = {cartItems}
          handleRemoveProduct = {handleRemoveProduct}
          handleCartClearance = {handleCartClearance}/>} />
        </Routes>
    </Router>
    </>
  );

};

export default App;

// Switch @5.2.0