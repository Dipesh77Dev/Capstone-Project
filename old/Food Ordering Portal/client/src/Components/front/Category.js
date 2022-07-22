import React from 'react';
import "./Category.css";

const category = ({productItems}) => {
  return (
    <>
    {/* <div>product</div> */}
    <div className="category">
        {productItems.map((productItems) =>
            (
                <div className="card">
                    <div> 
                        <img 
                        className = "category-image"
                        src = {productItems.image} 
                        alt = {productItems.name} />
                    </div>
                    <div> 
                        <h3 className="category-name">
                            {productItems.name} </h3>
                    </div>
                </div>
            ))}
    </div>
    </>
  )
}

export default category;