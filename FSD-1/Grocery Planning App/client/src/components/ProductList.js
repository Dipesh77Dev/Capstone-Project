import React from 'react';
import { useState, useEffect } from 'react';

const ProductList = () => 
{
    const [groceryItem, setGroceryItem] = useState([]);
    const [isPurchased, setIsPurchased] = useState([]);

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
        let result2 = await fetch(`http://localhost:5000/grocery/deleteGroceryItem/${id}`,{
            method: 'delete',
        });
        result2 = await result2.json();
        if(result2){
           alert(`record is deleted`);
            getGroceryItem();
        }
    }

    // updatePurchaseStatus
    const updatePurchaseStatus = async (id) => {
        console.log(id);
        let result3 = await fetch(`http://localhost:5000/grocery/updatePurchaseStatus/${id}`,{
            method : 'put',
            body: JSON.stringify({isPurchased}),
            headers: { 'Content-Type': 'application/json'}
        });
        result3 = await result3.json();
        console.log(result3);
        // setGroceryItem(result3);
        // console.log("groceryItem", groceryItem);
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
            <button onClick = {() => updatePurchaseStatus(item._id)}> Purchased </button>
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