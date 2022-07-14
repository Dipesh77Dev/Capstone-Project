// import dependencies
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

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

// const cors = require('cors');
// app.use(cors({
//     origin: 'http://localhost:3000'
// }))
// app.use(cors())

// calling routes api
const routes = require('./routes/itemRoutes');
app.use('/', routes);

// listening on port
// const port = process.env.PORT || 4000;
// app.listen(port, () => console.log('Running on port 5000'));
// app.listen(5000);

app.listen(5000, () =>{
    console.log("App listening on port 5000!, Enjoy Server started!!");
});