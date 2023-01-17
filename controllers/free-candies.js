const { response, request } = require("express");
const path = require('path')

const getCandy = async(req,res=response)=>{
  res.setHeader('Content-Type', 'image/jpeg');
  var clientIP = req.connection.remoteAddress;
  console.log(clientIP);
  
  return res.sendFile(path.join(__dirname, '../src/imgs/Tapa.jpg'));
}

module.exports={
  getCandy
}