import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "react";

const HomePage = () => {
  const [foodItems, setFoodItems] = useState("");
  const [foody, setFoody] = useState("");

  useEffect(() => {
    getFoodItem();
  });

  const getFoodItem = () => {
    axios
      .get("http://localhost:5000/foodItem")
      .then((res) => setFoody(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      {/* <div className="container">
        <div className="list">
        {foody.map(item => 
              key={item._id}
              name = {item.name}
              image = {item.image}
               )}
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
