import React from 'react';
import { useState, useEffect } from 'react';

const ProductList = () => 
{
    const [groceryItem, setGroceryItem] = useState("");
    
    useEffect(() => {
        getGroceryItem();
    },[])

    const getGroceryItem = async () => {
        let result = await fetch('http://localhost:5000/grocery/getAll');
        result = await result.json();
        setGroceryItem(result);
    }
    // console.warn("groceryItem", groceryItem);
    console.log("groceryItem", groceryItem);

  return (
    <>
    <div> 
        <h1> ProductList</h1>
        <input type="text" placeholder = "Add Shopping Item" /><br />
        <ul> 
            <li> Grocery Item Name
            <button> Purchased </button>
            <button> x </button>
            </li>
        </ul>
        {
            /* static data
            groceryItem.map((item) => 
            <ul> 
            <li> Grocery Item Name
            <button> Purchased </button>
            <button> x </button>
            </li>
        </ul>
        )
        */

        // dynamic data
        groceryItem.map((item) => 
            <ul> 
            <li> {item.groceryItem}
            <button> {item.isPurchased} </button>
            {/* <button> {item.delete} </button> */}
            </li>
        </ul>
        )
        }
    </div>
    </>
  )
}

export default ProductList