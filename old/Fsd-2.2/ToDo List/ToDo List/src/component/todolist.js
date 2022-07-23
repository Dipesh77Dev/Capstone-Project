import {React,axios} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BsTrash } from "react-icons/bs"; 
import {BiCheck, BiFemaleSign} from "react-icons/bi";




const ToDoLists = (props) => {
  
  

  return (

    <div className='d-flex'>
    <button className='btn btn-light' 
    onClick={()=>{
        props.onSelect(props.data._id)
    }}
    ><BsTrash/></button>


    <button className='btn btn-light' onClick={()=>{
        props.onUpdate(props.data)
    }} 
    ><BiCheck/></button>
    
    
    
    <li style={{ textDecoration: props.data.isPurchased? 'line-through':''}} className='mt-2'>{props.text}</li>

    
    </div>
  )
}

export default ToDoLists;
