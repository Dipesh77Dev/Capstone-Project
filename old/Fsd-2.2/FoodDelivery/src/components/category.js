import React from 'react'
import {useNavigate} from 'react-router-dom'
//import HomeScreen from '../screens/Homescreen'
function Category(pizza) {
    const navigate=useNavigate();
    // onClick={()=>{navigate('/data')}}
    // console.log('ancede')
    // console.log(pizza.pizza)
  return (
    <>

    
            <div className='shadow-lg  bg-body rounded mx-2' onClick={()=>{navigate(`/pizza/${pizza.pizza.name}/${pizza.pizza._id}`)}}>
              
            <h1>{pizza.pizza.name}</h1>
            <img src={pizza.pizza.image}
             alt='' className='img-fluid mx-2 my-2' style={{ height: '200px', width: '200px' }} />
            </div>
            
    
   
    </>
  )
}

export default Category