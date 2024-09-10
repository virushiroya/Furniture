require('dotenv').config();
const http =require("http");
const express = require("express");
const server = express();
const cors = require('cors');
const path =require('path');
// const imagePath =path.json(__dirname,'public','images');


PORT= process.env.PORT;
dbURL = process.env.MONGO_URL;

const {default:mongoose}= require ('mongoose');

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors());
// server.use('/public/images',express.static(imagePath));
server.get('/',(req,res)=>
{
     res.json("WelCome To Express Server")
});

server.listen(PORT,()=>
     {
          try{
               mongoose.connect(dbURL);
               console.log('mongodb start');
     
          }catch(error){
               console.log(error);
          }
console.log('Server Is Start At http://localhost:2221');
     })




















































































//git checkout -b branch_name (create New branch)
//git add .
//git commit -m "your commit"
//git push -u origin branch_name