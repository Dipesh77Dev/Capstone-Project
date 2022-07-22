import React from 'react';
import Products from "./Products.js";
import Cart from "./Cart.js";
import { Route, Switch } from "react-router-dom";

export const Routes = ({productItems}) => {
  return (
    <>
    {/* <div>Routes</div> */}
    <Switch>
        <Route path = "/product" exact>
            <Products productItems= {productItems}/>
        </Route>
        <Route path = "/cart" exact>
            {/* <Cart cartItems = {cartItems}/> */}
        </Route>
    </Switch>
    </>
  )
}

export default Routes;

// using Switch v5.2.0