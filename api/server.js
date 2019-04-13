const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./DB');
const router = require('./routes/business.route');

const app = express();

mongoose.connect(config.DB,{useNewUrlParser:true},(err,db)=>{
   if(err){
       console.log(err);
   }else{
       console.log('database connected');
   }
});

app.use(bodyParser.json());
app.use(cors());

app.use('/business',router);

app.listen('4000',()=>{
    console.log('server is listening to 4000');
});