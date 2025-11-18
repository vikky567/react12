import axios from 'axios';
import React, { useEffect, useState} from 'react'

function cart() {
     const [receipy, setReceipy]= useState(null);
     useEffect(()=>{
        axios
        .get("https://dummyjson.com/recipes")
        .then((res) => setReceipy(res.data.recipes))
     },[])
  return (
    <div>
        {receipy && receipy.map((r,i)=>{
            return<> <p>
            {r.id} {r.name}
        </p>
        <img src={r.image} alt="" /></>
       
})}
    </div>
  )
}

export default cart