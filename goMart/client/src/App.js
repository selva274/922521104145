import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Components/Product';

const App = () => {
  const [data,setData]=useState([]);

  const fetch=()=>{
    axios.get("http://localhost:3001/test")
    .then((d)=>setData(d.data));
  }

  useEffect(()=>{
fetch();
  },[])
  console.log(data);
  return (
    <div>
      {
        data.map((pro)=>{
          return <div>
            <Product Product={pro}/>
          </div>
        })
      }
    </div>
  )
}

export default App