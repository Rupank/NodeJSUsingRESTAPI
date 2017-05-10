const express = require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

//setting up express app
const app=express();

//connect to mongoDB
mongoose.connect('mongodb://localhost/userDB');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use(require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
  //console.log(err);
  res.status(422).send({error:err.message});
});

//listening for requests
app.listen(process.env.port || 3000,function(){
  console.log('listening');
});
