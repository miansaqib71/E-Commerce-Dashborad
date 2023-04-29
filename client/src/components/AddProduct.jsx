import React, { useState } from 'react'

const AddProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setComapny] = useState("")

  const [valid, setValid] = useState(false)
  const addProduct = async () => {
    if (!name || !price || !company || !category) {
      setValid(true);  
      return true
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId)
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({
        name, price, category, company, userId
      }),
      headers: {
        "Content-type": "application/json"
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
      {valid && !name && <span className='valid'>Enter Valid Name</span>}

      <input className='input_data' type={'text'}
        value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" />
      {valid && !price && <span className='valid'>Enter Valid price</span>}


      <input className='input_data' type={'text'}
        value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" />
      {valid && !category && <span className='valid'>Enter Valid category</span>}

      <input className='input_data' type={'text'}
        value={company} onChange={(e) => setComapny(e.target.value)} placeholder="Enter Company Name" />
      {valid && !company && <span className='valid'>Enter Valid company Name</span>}

      <button className='register_btn' onClick={addProduct} type='button' >Add Product</button>
    </div>
  )
}

export default AddProduct