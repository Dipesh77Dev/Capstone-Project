import React from 'react';
import { useEffect } from 'react';

const AddProduct = () => {
    const [groceryItem, setGroceryItem] = React.useState("");
    const [isPurchased, setIsPurchased] = React.useState("");

    const addProduct = async() => {
        // console.log(groceryItem, isPurchased);
        console.log(groceryItem);
        let result = await fetch("http://localhost:5000/grocery/add", { 
            method: "post",
            // body: { groceryItem }
            // body: JSON.stringify({ groceryItem, isPurchased }),
            body: JSON.stringify({ groceryItem }),
            headers: { 'Content-Type': 'application/json'}
        });

        result = await result.json();
        console.log(result);
    }

    // useEffect(() => {
    //     addProduct();
    // },[]) 
    
    return(
        <>
        <div> 
            <h1> Add Product </h1>
            <input type="text" placeholder = "Add Shopping Item" value = {groceryItem} onChange = {(e) => {setGroceryItem(e.target.value)}}/>
            {/* <input type="text" placeholder = "Add Purchased Value" value = {isPurchased} onChange = {(e) => {setIsPurchased(e.target.value)}}/><br /> */}
            <button onClick= {addProduct} > + </button>
        </div>
        </>
    )   
}

export default AddProduct;

// export default AddProduct();