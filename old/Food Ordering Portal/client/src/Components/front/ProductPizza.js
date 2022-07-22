import React from 'react';
import "./Product.css";

const productPizza = ({pizzaItems, handleAddProduct}) => {
  return (
    <>
    {/* <div>product</div> */}
    <div className="product">
        {pizzaItems.map((pizzaItems) =>
            (
                <>
                <div className="card">
                    <div> 
                        <img 
                        className = "product-image"
                        src = {pizzaItems.image} 
                        alt = {pizzaItems.name} />
                    </div>
                    <div> 
                        <h3 className="product-name">
                            {pizzaItems.name} </h3>
                    </div>
                    <div> 
                        <h3 className="product-price">
                            ${pizzaItems.price} </h3>
                    </div>
                    <div> 
                        <h3 className="product-description">
                            {pizzaItems.description} </h3>
                    </div>
                    <div>
                        <button 
                        className="product-add-button" onClick = { () => handleAddProduct(pizzaItems)}> Add To Cart</button>
                    </div>
                </div>
                </>
            ))}
    </div>
    </>
  )
}

export default productPizza;