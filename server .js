const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const smsRoute = require('./routes/smsRoute');
const { append } = require('vary');


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
app.listen(3000, () => {
    console.log('server is working');
})