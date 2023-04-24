import React, { useState } from 'react'

const AddProduct = () => {
    const [name, setName] =  useState("")
    const [price, setPrice] =  useState("")
    const [category, setCategory] =  useState("")
    const [company, setComapny] =  useState("")

    const addProduct=async()=>{
      console.log(name,price, category,company)
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      let result = await fetch("http://localhost:5000/add-product",{
        method:"post",
        body:JSON.stringify({name, price, category, company, userId}),
        headers:{
          "Content-type":"appication/json",
        }
      });
      result = await result.json();
      console.log(result)
       
    }
 
  return (
    <div className='register_screen'>
         <h1>Add Product</h1>
      <input className='input_data' type={'text'} 
      value={name} onChange={(e) => setName(e.target.value)} 
      placeholder="Enter Prdouct Name" />

      <input className='input_data' type={'text'} 
      value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" />

      <input className='input_data' type={'text'} 
      value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" />

<input className='input_data' type={'text'} 
      value={company} onChange={(e) => setComapny(e.target.value)} placeholder="Enter company name" />
      <button className='register_btn' onClick={addProduct} type='button' >Add Product</button>
    </div>
  )
}

export default AddProduct