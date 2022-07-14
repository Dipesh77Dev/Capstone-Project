import React from 'react';

export default function List({groceryItem, isPurchased, update, remove})
{
  return (
    <div className="list">
        <div className="text"> {groceryItem}</div> 
        <div className="text"> {isPurchased}</div>
            <div className="icons">
                <i className="ri-edit-line" onClick = {update}></i>
                <i className="ri-delete-bin-7-fill" onClick = {remove}></i>
            </div>      
    </div>
  )
}

// delete is not used so we used remove