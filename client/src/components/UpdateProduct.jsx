import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setComapny] = useState("")

const getId= useParams();
const naveigate = useNavigate();
useEffect(()=>{
  dataUpdate();
},[])
const dataUpdate = async()=>{
  let data = await fetch(`http://localhost:5000/product/${getId.id}`,{
    headers:{
      authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
  }
  })
  data = await data.json();
  console.log(data)
  setName(data.name);
  setPrice(data.price);
  setCategory(data.category);
  setComapny(data.company);
}
  const updateProduct = async () => {
    console.log(name, price, )
    let data = await fetch(`http://localhost:5000/product/${getId.id}`,{
      method:'put',
      body: JSON.stringify({name, price,category,company}),
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,
        'Content-Type': 'Application/json'
    
      }
    })
    data = await data.json();
    if(data){
      naveigate("/products")
    }
  }

  return (
    <div className='register_screen'>
      <h1>Update Product</h1>
      <input className='input_data' type={'text'}
        value={name} onChange={(e) => setName(e.target.value)}
        placeholder="Enter Prdouct Name" />
      {/* {valid && !name && <span className='valid'>Enter Valid Name</span>} */}

      <input className='input_data' type={'text'}
        value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" />
      {/* {valid && !price && <span className='valid'>Enter Valid price</span>} */}


      <input className='input_data' type={'text'}
        value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" />
      {/* {valid && !category && <span className='valid'>Enter Valid category</span>} */}

      <input className='input_data' type={'text'}
        value={company} onChange={(e) => setComapny(e.target.value)} placeholder="Enter Company Name" />
      {/* {valid && !company && <span className='valid'>Enter Valid company Name</span>} */}

      <button className='register_btn' onClick={updateProduct} type='button' >Add Product</button>
    </div>
  )
}

export default UpdateProduct