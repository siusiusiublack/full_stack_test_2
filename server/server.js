const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json())
app.use("/",require("./routes/noteRoute"));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://siublackbusiness:975314@cluster0.2yssp7x.mongodb.net/notesDB?retryWrites=true&w=majority')
.then(()=>{
    console.log("Databse connected")
    app.listen(8000,function(){
        console.log("Server is running on port 8000")
    })
    
})
.catch((err)=>{
    console.log(err)
})


