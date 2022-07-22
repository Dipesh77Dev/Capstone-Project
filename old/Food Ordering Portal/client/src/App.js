import React , { useState }from 'react'
import data from "./Components/back/Data";
import pizza from "./Components/back/Pizza";
import burger from "./Components/back/Burger";
import Header from "./Components/front/Header";
import Routes from "./Components/front/Routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {

  const { productItems } = data;
  const { pizzaItems } = pizza;
  const { burgerItems } = burger;

  const [cartItems, setCartItems] = useState([pizza, burger]);

  // const handleAddProduct = (product) => {
  //   const ProductExist = cartItems.find((item) => item.id === product.id);
  //   if(ProductExist){
  //     setCartItems(cartItems.map((item) => item.id === product.id ? 
  //     {...ProductExist, quantity: ProductExist.quantity + 1} : item)
  //     );
  //   }
  //   else{
  //     setCartItems([...cartItems, {...product, quantity: 1}]);
  //   }
  // }

  const handleAddProduct = (pizza, burger) => {
    const ProductExist = cartItems.find((item) => item.id === pizza.id || burger.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === pizza.id || burger.id ? 
      {...ProductExist, quantity: ProductExist.quantity + 1} : item)
      );
    }
    else{
      setCartItems([...cartItems, {...pizza, ...burger, quantity: 1}]);
    }
  }

  return (
    <>
    <Router>
      < Header />
      < Routes productItems = {productItems} pizzaItems = {pizzaItems} burgerItems = {burgerItems} cartItems = {cartItems} handleAddProduct= {handleAddProduct} />
    </Router>
    </>
  )
}

export default App;