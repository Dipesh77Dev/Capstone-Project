// import dependencies
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
// const db = require('./models/item.js');
const itemRouter = require('./routes/item.js');

// Making App
const app = express();

// Bodyparser middleware
app.use(express.json());  

//mongoose connection 
mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(error => console.log(error));

// testing api
app.get('/', (req, res) => {
    res.send(`Server is running on localhost 5000`);
    console.log('Server is running on localhost 5000');
});

// calling routes api
app.use('/grocery', itemRouter.router);

// listening on port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Running on port 5000'));
// app.listen(5000);