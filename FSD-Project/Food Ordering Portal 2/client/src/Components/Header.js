import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

const Header = ({cartItems}) => {
  return (
    // <div>Header</div>
    <>
      <header className="header">
            <div>
                <h1 className="logo"> 
                    Food Ordering Portal
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                    <Link to = "/product"> 
                    Product
                    </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                    <Link to = "/cart" className="cart"> 
                   {/* Cart */}
                   <i class = "fas fa-shopping-cart" />
                   <span className="cart-length">
                    {cartItems.length === 0 ? "" : cartItems.length}
                   </span>
                    </Link>
                    </li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header;