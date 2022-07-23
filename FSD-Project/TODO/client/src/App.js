import './App.css';
import List from "./components/List";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import ToDoLists from "./components/ToDoLists";
import { useState, useEffect} from 'react';

function App() {

const [groceryItem, setGroceryItem] = useState("");
const [isPurchased, setIsPurchased] = useState("");
const [todo, setTodo] = useState([]); // setting the data
const [isUpdating, setUpdating] = useState("");

useEffect(() => {
  // axios.get("http://localhost:5000/grocery/getAll")
  // // .then((res) => console.log(res.data))
  // .then((res) => setTodo(res.data))
  // .catch((err) => console.log(err))
  getToDo();
});

const getToDo = () => {
  axios.get("http://localhost:5000/grocery/getAll")
  // .then((res) => console.log(res.data))
  .then((res) => setTodo(res.data))
  .catch((err) => console.log(err))
}

const addUpdate = () => {
  if (isUpdating === "") {
    axios.post("http://localhost:5000/grocery/add", { groceryItem, isPurchased })
      .then((res) => {
        console.log(res.data);
        setGroceryItem("");
        setIsPurchased("");
      })
      .catch((err) => console.log(err))
  }else{
    axios.put("http://localhost:5000/grocery/updatePurchaseStatus", { _id: isUpdating, groceryItem, isPurchased})
      .then((res) => {
        console.log(res.data);
        setGroceryItem("");
        setIsPurchased("");
        setUpdating("");
      })
      .catch((err) => console.log(err));
  }
}

const updateToDo = (_id, groceryItem, isPurchased) => {
  setUpdating(_id);
  setGroceryItem(groceryItem);
  setIsPurchased(isPurchased);
}

const deleteToDo =  (_id) => {
// axios.delete("http://localhost:5000/grocery/deleteGroceryItem", (_id, groceryItem, isPurchased) => {
//   setGroceryItem(groceryItem);
//   setIsPurchased(isPurchased);
// })
  axios.delete("http://localhost:5000/grocery/deleteGroceryItem", { _id })
      .then((res) => console.log(res.data))
      // getToDo()
      .catch((err) => console.log(err));
}       

  return (
    <div className="App">
       <div className="container">
          <h1> ToDo App </h1>
          <div className = "top">
            <input 
            type="text" 
            placeholder="Add Grocery Item..." 
            value = {groceryItem}
            onChange={(e) => setGroceryItem(e.target.value)} />
            <input 
            type="text" 
            placeholder="Add Purchased Value..." 
            value = {isPurchased}
            onChange={(e) => setIsPurchased(e.target.value)} />
            <div className = "add" 
            onClick= {addUpdate}> {isUpdating ? "Update" : "Add"} </div>
          </div>
          <div className = "list">
              {todo.map(item => <List 
              key={item._id}
              groceryItem = {item.groceryItem}
              isPurchased = {item.isPurchased}
              update = { () => updateToDo(item._id, item.groceryItem, item.isPurchased)}
              remove = { () => deleteToDo(item._id)} />)}
              {/* <List /> */}
          </div>
       </div>
    </div>
  );
}

export default App;

// function App() {
//   const [inputList, setInputList] = useState("");
//   const [items, setItems] = useState([]);

//   const itemEvent = (event) => {
//     setInputList(event.target.value);
//   }

//   useEffect(() => {  
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios.get('http://localhost:5000/grocery/getAll')
//       .then(function (response) {
//         setItems(response.data)
//         console.log(response);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//   }

//   const listItems = () => {
//     axios.post('http://localhost:5000/grocery/add', {
//       GroceryItem: inputList,
//       isPurchased: false
//     })
//       .then(function (response) {
//         fetchData();
//        setInputList('');
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//   }

//   const deleteItem = (id) => {
//     // console.log(id)
//      axios.delete("http://localhost:5000/grocery/deleteGroceryItem")
//     .then(function (response) {
//       fetchData()
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//   }

//   const UpDateItems = (data) => {
//     axios.put("http://localhost:5000/grocery/updatePurchaseStatus", {
//       isPurchased: !data.isPurchased  
//   })
//   .then(response => {
//     console.log(response);
//     fetchData();
//   })
//   .catch(err => {
//     console.log(err);
//   });
//   }

// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date();

// const hopedate=monthNames[d.getMonth()];

//   return (
//     <>
         
//       <div className="row " style={{ height: '100vh', overflow: 'hidden' }}>
      
//         <div className="col-sm-12 d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
        
//           <div className="card">
           
//             <div className="card-body">
//               <h5 className="card-title">To Do List For {hopedate}</h5>
//               <div className='d-flex '>
//                 <input type="email" className="form-control"
//                   value={inputList} placeholder="items" onChange={itemEvent} />
//                 <button className='btn-warning mx-2 rounded' onClick={listItems}>+</button>
//               </div>
//               <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
//                 {items.map((itemValue, index) => {
//                   return <ToDoLists key={index}
//                     data={itemValue}
//                     text={itemValue.GroceryItem}
//                     onSelect={deleteItem}
//                     onUpdate={UpDateItems}
//                   />
//                 })}

//               </ul>
//             </div>
//           </div>
//         </div>

//       </div>

//     </>
//   );
// }

// export default App;