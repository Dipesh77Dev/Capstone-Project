import React from 'react'
import AddProduct from './AddProduct';
import ProductList from './ProductList';

function Box() 
{
    // for month 
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    // let month = d.getMonth(); - for getting in no
    let cmonth = month[d.getMonth()]; 
 
    return (
        <>
            <h3> Plan for the month of {cmonth} </h3>
            < AddProduct />
            < ProductList />
        </>
    )
}

export default Box;