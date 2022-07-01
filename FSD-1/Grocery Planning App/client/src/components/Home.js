import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react';
import UpdateDelete from '../components/UpdateDelete';

function Home() 
{
    // header
    // for month 
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    // let month = d.getMonth(); - for getting in no
    let cmonth = month[d.getMonth()]; 

    // Add product
    const AddProduct = () => {
        const [groceryItem, setGroceryItem] = React.useState("");
        const [isPurchased, setIsPurchased] = useState("");
    
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

        // ProductList
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

    return(
        <>
        <div>
            {/* header */}
            <p> Monthly Grocery Planning App </p>
            <h3> Plan for the month of {cmonth} </h3>

            {/* Add Product */}
            <div> 
            <h1> Add Product </h1>
            <input type="text" placeholder = "Add Shopping Item" value = {groceryItem} onChange = {(e) => {setGroceryItem(e.target.value)}}/>
            {/* <input type="text" placeholder = "Add Purchased Value" value = {isPurchased} onChange = {(e) => {setIsPurchased(e.target.value)}}/><br /> */}
            <button onClick= {addProduct} > + </button>
            </div>

            {/* < ProductList /> */}
            <div> 
        <h1> ProductList</h1>
        <input type="text" placeholder = "Add Shopping Item" /><br />
        {
        // dynamic data with update & delete
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

            {/* Home Page */}
            <div className="row " style={{ height: '100vh', overflow: 'hidden' }}>
            <div className="col-sm-12 d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">Plan for the month of {cmonth}</h5>
              <div className='d-flex '>
                <input type="email" className="form-control"
                  value={groceryItem} placeholder="items" onChange={ProductList} />
                <button className='btn-warning mx-2 rounded' onClick={AddProduct}>+</button>
              </div>
              <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
                {items.map((itemValue, index) => {
                  return <UpdateDelete key={index}
                    data={itemValue}
                    text={itemValue.GroceryItem}
                    onSelect={deleteItem}
                    onUpdate={UpDateItems}
                  />
                })}

              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
    )
}
}
}

export default Home; 
{/* // export default Home(); */}