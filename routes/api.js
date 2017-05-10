const express = require('express');
const router=express.Router();
const User=require('../models/user.js');

//get a list of all users from database
router.get('/user',function(req,res,next){
  User.find({}).then(function(users){
    res.send(users);
  });
});

//get a user from database
router.get('/user/:id',function(req,res,next){
  User.findOne({_id:req.params.id}).then(function(user){
    res.send(user);
  }).catch(next);
});

//add a new user to database
router.post('/user',function(req,res,next){
  User.create(req.body).then(function(user){
    res.send(user);
  }).catch(next);
});

//update a user in database
router.put('/user/:id',function(req,res,next){
  User.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    User.findOne({_id:req.params.id}).then(function(user){
        res.send(user);
        console.log(user.name +" has been changed");
    });
  }).catch(next);
  });

//delete a user from database
router.delete('/user/:id',function(req,res,next){
  User.findByIdAndRemove({_id:req.params.id}).then(function(user){
      res.send(user);
      console.log('User Entry Removed from database');
  }).catch(next);
});

module.exports=router;
