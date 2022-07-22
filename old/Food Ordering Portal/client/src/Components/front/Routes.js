import React from 'react';
import Category from "./Category";
import Pizza from "./ProductPizza";
import Burger from "./ProductBurger";
import Cart from "./Cart";
import { Route, Switch } from 'react-router-dom';

const Routes = ({productItems, pizzaItems, burgerItems, cartItems, handleAddProduct}) => {
  return (
    <>
    {/* <div>Routes</div> */}
    <Switch>
      <Route path = "/category" exact> 
        <Category productItems = {productItems}/>
      </Route>
      <Route path = "/product1" exact> 
        <Pizza pizzaItems = {pizzaItems} handleAddProduct={handleAddProduct}/>
      </Route>
      <Route path = "/product2" exact> 
        <Burger burgerItems = {burgerItems}/>
      </Route>
      <Route path = "/cart" exact> 
        <Cart cartItems = {cartItems} handleAddProduct={handleAddProduct}/>
      </Route>
    </Switch>
    </>
  )
}

export default Routes;

// Switch has not been found in react-router-dom.
// In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

// import { Switch, Route } from "react-router-dom";
// to

// import { Routes ,Route } from 'react-router-dom';

// if we want to use switch do this steps : 1)npm uninstall react-router-dom; 2) npm install react-router-dom@5.2.0
