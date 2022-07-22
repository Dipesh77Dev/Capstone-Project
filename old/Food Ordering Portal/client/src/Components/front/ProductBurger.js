import React from 'react';
import "./Product.css";

const productBurger = ({burgerItems}) => {
  return (
    <>
    {/* <div>product</div> */}
    <div className="product">
        {burgerItems.map((burgerItems) =>
            (
                <>
                <div className="card">
                    <div> 
                        <img 
                        className = "product-image"
                        src = {burgerItems.image} 
                        alt = {burgerItems.name} />
                    </div>
                    <div> 
                        <h3 className="product-name">
                            {burgerItems.name} </h3>
                    </div>
                    <div> 
                        <h3 className="product-price">
                            ${burgerItems.price} </h3>
                    </div>
                    <div> 
                        <h3 className="product-description">
                            {burgerItems.description} </h3>
                    </div>
                    <div>
                        <button className="product-add-button"> Add To Cart</button>
                    </div>
                </div>
                </>
            ))}
    </div>
    </>
  )
}

export default productBurger;