const mongoose = require("mongoose");
const express = require("express");
const app = express();

//configure app for incoming post data
const expressJson = express.json();
const bodyParser  = express.urlencoded({extended: true});
app.use([expressJson, bodyParser])

// Connection URL
const url = "mongodb://localhost:27017";

// Use connect method to connect to the Server
mongoose.connect(url,).then(() => 
{
    console.log("connection successful");
}).catch((err) => console.log("not connected"));

app.post('/sendText', (req, res)=>{
    const text = req.body.text;
    //you need to create mongoose schema to save. saveSchema here I'm asuming.
    saveSchema.save({text: text})
    .then(res=>{res.json("Saved")})
    .catch(err=>{console.log(err); res.json("Error! cannot save")})
  });
  app.listen(5000, ()=>{console.log("Server running at port 5000")});