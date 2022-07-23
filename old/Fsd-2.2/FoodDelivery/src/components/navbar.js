import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
function Navbar() {
  const history=useNavigate();
  const myState=useSelector((state)=> state.cart);
  console.log(myState)
    return (
        <>
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
  <div className="container-fluid">
    <a className="navbar-brand" onClick={()=>{history('/')}}>Food Ordering Portal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        
        <a className="nav-link"  onClick={()=>{history('/cart')}} ><FaShoppingCart/><span className='mx-2 fs-6'>{myState.cartItems.length}</span></a>
        
      </div>
    </div>
  </div>
</nav>
        </>
        
    )
}

export default Navbar
