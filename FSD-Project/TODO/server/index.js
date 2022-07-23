require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
3
mongoose
.connect(process.env.DB_URI,{  
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=> console.log("MongoDB Database Connected!!"))
.catch((err) => console.log(err));

// routes
const routes = require("./routes/ToDoRoutes");
app.use("/grocery", routes);

app.listen(5000, () =>{
    console.log("App listening on port 5000!, Enjoy Server started!!");
});
