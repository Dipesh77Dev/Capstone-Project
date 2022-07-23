import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {UpdateDelete} from '../components/UpdateDelete';

export const Whole = () => {
    // months    
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    // let month = d.getMonth(); - for getting in no
    let cmonth = month[d.getMonth()]; 

    // starting code 
    const [groceryItem, setGroceryItem] = React.useState("");
    const [isPurchased, setIsPurchased] = useState("");

    // add product
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

    // product list
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
        <Navbar bg = "dark" variant = "dark"><Navbar.Text>Monthly Grocery Planning App</Navbar.Text></Navbar>
        <div className="row " style={{ height: '100vh', overflow: 'hidden' }}>
            <div className="col-sm-12 d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">Plan for the month of {cmonth}</h5>
              <div className='d-flex '>
                <input type="email" className="form-control"
                  value={groceryItem} placeholder="items" onChange={getGroceryItem} />
                <button className='btn-warning mx-2 rounded' onClick={addProduct}>+</button>
              </div>
              <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
                {groceryItem.map((itemValue, index) => {
                  return <UpdateDelete key={index}
                    data={itemValue}
                    text={itemValue.GroceryItem}
                    onSelect={deleteProduct}
                    onUpdate={updatePurchaseStatus}
                  />
                })}

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
