const express = require('express')
const cors = require('cors');
const app = express();
const path = {
  freeCandies : "/burgers"
}

require('dotenv').config()
const port = process.env.PORT

app.use(cors());
app.use(express.json());



app.use(path.freeCandies,require('./routes/free-candies'))
app.use('/',(req,res)=>{
  return res.send("sas")
})

app.listen(port, ()=>{
  console.log('Server: http://localhost:'+port)
})