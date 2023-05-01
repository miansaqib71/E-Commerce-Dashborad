import React, { useState } from 'react'

const UpdateProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setComapny] = useState("")

  const updateProduct = async () => {
    console.log(name, price, )
  }

  return (
    <div className='register_screen'>
      <h1>Add Product</h1>
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