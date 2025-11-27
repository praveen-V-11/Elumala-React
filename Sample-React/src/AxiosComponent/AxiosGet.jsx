import React, { useState ,useEffect } from 'react'
import axios from "axios"

export default function AxiosGet() {
    let [products,setproducts] = useState([])


    useEffect(()=>{
        axios.get('http://localhost:2000/products')
    .then((res)=>{
        console.log(res.data);
        setproducts(res.data)
    }).catch((err)=>{
        console.log(err);
    })
    },[])

     console.log(products);

  return (
    <div>
      <h1>Get Method</h1>
      {products.map((product,index)=>{
        return(
            <>
            <div style={{backgroundColor:'blue',color:'white'}}>
                <p>Product id : {product.id}</p>
            <p>Product Name : {product.title}</p>
            <p>Product price:{product.price}</p>
            </div>
            
            </>
        )
      })}

    </div>
  )
}
