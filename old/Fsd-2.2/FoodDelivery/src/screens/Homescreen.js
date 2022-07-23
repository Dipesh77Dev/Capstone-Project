import axios from 'axios'
import React, { useEffect, useState } from 'react';
//import pizzas from '../components/pizzadata'
//import Pizza from '../components/pizza'
import Category from '../components/category'
//import Cart from './Cart'
function Homescreen() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchdata();
    
      }, [])

      const fetchdata = () => {
        axios.get('http://localhost:2000/api/f2/FoodCategory')
          .then(function (response) {
            setItems(response.data)
            console.log('pizza')
            console.log(response.data);

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      }
    return (
        <>
            <div className='d-flex justify-content-center'>
                {items.map(data => {
                    return <div>
                            {/* <pizza pizza={pizza} /> */}
                            
                            {/* <Pizza pizza={pizza}/> */}
                            <Category  pizza={data}/>
                        </div>

                    
                })}
            </div>
        </>
    )
}

export default Homescreen