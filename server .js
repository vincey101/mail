const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const smsRoute = require('./routes/smsRoute');
require("dotenv").config();

const app = express();
//middlewear

app.use(cors);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// app.use("/", smsRoute);
// app.use("/send-email", smsRoute);
app.post("/email",(req,res) =>{
    res.send("wetin dey occur")
})



//start server
app.listen(process.env.PORT || 3000, () => {
    console.log('server is working');
})