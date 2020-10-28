const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();
const cookieparser = require('cookie-parser');
const cors = require('cors');
const app = express();

const empRoute = require('./route/employment')

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("CONNECTED TO DB")
});

app.use(express.json())
//middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(cookieparser());
app.use(cors());

app.use('/api/emp',empRoute);



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app is up and running in port ${port}`)
});