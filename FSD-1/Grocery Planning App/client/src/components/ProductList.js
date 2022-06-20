import React from 'react';
import { useState, useEffect } from 'react';

const ProductList = () => 
{
    const [groceryItem, setGroceryItem] = useState([]);
    
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

    // deleting product
    const deleteProduct = async (id) => {
        console.log(id);
        let result2 = await fetch(`http://localhost:5000/grocery/deleteGroceryItem`,{
            method: 'Delete',
        });
        result2 = await result2.json();
        if(result2){
           alert(`record is deleted`);
            getGroceryItem();
        }
    }

  return (
    <>
    <div> 
        <h1> ProductList</h1>
        <input type="text" placeholder = "Add Shopping Item" /><br />
        {
        // dynamic data 
        groceryItem.map((item) => 
            <ul key = {item._id}> 
            <li> {item.groceryItem}
            <button> Purchased </button>
            <button onClick = {() => deleteProduct(item._id)}> x </button>
            </li>
        </ul>
        )
        }
    </div>
    </>
  ) 
}
 
export default ProductList 

/* static data
    groceryItem.map((item) => 
    <ul> 
    <li> Grocery Item Name
    <button> Purchased </button>
    <button> x </button></li>
    </ul>
    )
*/