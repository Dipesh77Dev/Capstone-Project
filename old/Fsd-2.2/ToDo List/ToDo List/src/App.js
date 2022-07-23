//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import ToDoLists from './component/todolist';

function App() {


  const [inputlist, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemevent = (event) => {
    setInputList(event.target.value);
  }
  useEffect(() => {  
    fetchdata();

  }, [])
  const fetchdata = () => {
    axios.get('http://localhost:2000/api/v2/grocery/getAll')
      .then(function (response) {
        setItems(response.data)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  const listItems = () => {

    axios.post('http://localhost:2000/api/v2/grocery/add', {
      GroceryItem: inputlist,
      isPurchased: false
    })
      .then(function (response) {
       fetchdata();
       setInputList('');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    // setItems((olditems) => {
    //   return [...olditems, inputlist]
    // })
    // setInputList('');
  }

  const deleteItem = (id) => {
    // console.log(id)
     axios.delete(`http://localhost:2000/api/v2/grocery/deletegroceryitem/${id}`)

    .then(function (response) {
      fetchdata()
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  //    const UpDateItems = (id) => {
  //   console.log(id)
  //   return
    
  //   axios.patch(`http://localhost:2000/api/v2/grocery/updatePurchaseStatus/${id}`, {
      
  //     isPurchased: false
      
  // })
  
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(err => {
  //   console.log(err);
  // });
  //   // setItems((olditems) => {
  //   //   return [...olditems, inputlist]
  //   // })
  //   // setInputList('');
  // }

    // setItems((olditems) => {
    //   return olditems.filter((arrElem, index) => {
    //     return index !== id;
    //   })
    // })
  }

  const UpDateItems = (data) => {
    
    
    
    axios.patch(`http://localhost:2000/api/v2/grocery/updatePurchaseStatus/${data._id}`, {
      
      isPurchased: !data.isPurchased
      
  })
  
  .then(response => {

    console.log(response);
    fetchdata();
  })
  .catch(err => {
    console.log(err);
  });

  }
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const d = new Date();

const hopedate=monthNames[d.getMonth()];
  return (
    <>
         
      <div className="row " style={{ height: '100vh', overflow: 'hidden' }}>
      
        <div className="col-sm-12 d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
        
          <div className="card">
           
            <div className="card-body">
              <h5 className="card-title">To Do List For {hopedate}</h5>
              <div className='d-flex '>
                <input type="email" className="form-control"
                  value={inputlist} placeholder="items" onChange={itemevent} />
                <button className='btn-warning mx-2 rounded' onClick={listItems}>+</button>
              </div>
              <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
                {items.map((itemValue, index) => {
                  return <ToDoLists key={index}
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

    </>
  );
}

export default App;
