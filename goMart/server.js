const express = require("express");
const app = express();const PORT 
=process.env.PORT|| 3001;

const cors = require("cors");

const productData=require('./MockData.json')

app.use(cors());

app.use(express.json());

app.get("/test",(req,res)=>{
    res.send(productData)
})

app.get("test/:price",(req,res)=>{
    var price=req.params.price;
    const result= productData[0].AMG.find((price)=>price>=1000)
    console.log(result);
})

if(process.env.NODE_ENV==='development'){
  app.use(express.static('client/build'));
}

app.listen(PORT, () => {
  console.log("Server running "+PORT);
});
