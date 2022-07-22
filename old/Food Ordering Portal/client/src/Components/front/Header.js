import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
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
                    <Link to = "/category"> 
                    Category
                    </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                    <Link to = "/product1"> 
                    Pizza Product
                    </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                    <Link to = "/product2"> 
                    Burger Product
                    </Link>
                    </li>
                </ul>
                {/* <ul>
                    <li>
                    <Link to = "/about"> 
                    About Us
                    </Link>
                    </li>
                </ul> */}
                <ul>
                    <li>
                    <Link to = "/cart" className="cart"> 
                   {/* Cart */}
                   <i class = "fas fa-shopping-cart" />
                    </Link>
                    </li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header