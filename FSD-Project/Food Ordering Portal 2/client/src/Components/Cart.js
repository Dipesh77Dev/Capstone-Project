import React from 'react';

const Cart = ({cartItems, handleRemoveProduct, handleCartClearance}) => {
  return (
    <>
    {/* <div>Cart Data</div> */}
        <div className="cart-items">
            <div className="cart-items-header"> Cart Items</div>
            <div className = "clear-cart">
                {cartItems.length >=1 && (
                    <button className="clear-cart-button" onClick = {handleCartClearance}> Clear Cart </button>
                )}
            </div>

            {cartItems.length === 0 && (
                <div className="cart-items-empty"> No items are added in Cart. Please add some Items... 
                </div>
            )} 

            <div>
                {cartItems.map((item) =>(
                    <>
                    <div 
                    key={item.id} className="cart-item-list">
                    <img className="cart-items-image" src={item.image} 
                    alt={item.name} />
                    </div>
                    <div
                    className = "cart-item-name">
                        {item.name}
                    </div>
                    <div className = "cart-item-price">
                        ${item.price}
                    </div>
                    <div className = "cart-item-description">
                        {/* (item.description) */}
                        {/* { item.descriptions} */}
                        {item.description}
                    </div>
                    <button
                    className = "cart-item-remove" onClick = {() => handleRemoveProduct(item)}>
                        Remove
                    </button>

                    </>
                ))}
            </div>
        </div>

        <div>

        </div>
    </>
  )
}

export default Cart;