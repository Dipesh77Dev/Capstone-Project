import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from "react-router-dom"; // We will see n error export 'useHistory' (imported as 'useHistory') was not found in 'react-router-dom' (possible exports: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Navigate,etc when we do not put this;
import { useState, useEffect } from 'react';

import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Header } from './components/Header';
import FoodItems from './components/FoodItems';
import { FoodSubItems } from './components/CategoryItems';
import Cart from './components/Cart';

function App() {
  const [cartItems, updateCart] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  
  function fetchAllOrders() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/delivery/getAllOrders`)
      .then(function (response) {
        // handle success
        updateCart(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  useEffect(() => {
    fetchAllOrders();
  }, []);
  function handleAddToCart(item) {
    updateCart((cartItems) => [...cartItems, item]);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/delivery/add`, item)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function handleRemoveFromCart(itemToBeRemoved) {
    const updatedCartItems = cartItems.filter((item) => {
      return item.id !== itemToBeRemoved.id;
    });
    updateCart(updatedCartItems);
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/delivery/delete`, {
        data: {
          id: itemToBeRemoved.id,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function clearCart() {
    updateCart([]);
  }

  return (
    <>
    <h1> Hello World</h1>
    <div className="App">
      <Router>
      < Header cartItems = {cartItems} />
      <Route
        path = "http://localhost:5000/foodItem  "
        exact
        render = { (props) => (
          < FoodItems foodItems={foodItems} setFoodItems={setFoodItems} />
        )}
        />
        <Route
          path="/foodSubItem/:foodCategory"
          render={(props) => (
            <FoodSubItems
              handleAddToCart={handleAddToCart}
              locationProps={props}
              foodItems={foodItems}
            />
          )}
        />
        <Route
          exact
          path="/cart"
          render={(props) => (
            <Cart
              items={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
              clearCart={clearCart}
            />
          )}
        /> 
      </Router>
    </div>
    </>
  );
}

export default App;
