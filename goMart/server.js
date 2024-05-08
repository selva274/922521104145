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

app.get("/test/:companyname",(req,res)=>{
    const companyName=req.params.companyname;
    const company=productData[0].companyName;
    res.send(company);
})

// if(process.env.NODE_ENV==='production'){
//   app.use(express.static('client/build'));
// }

app.listen(PORT, () => {
  console.log("Server running "+PORT);
});
