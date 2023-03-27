import React, { useState } from 'react'

const Register = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const collectData=()=>{
        console.log(name, email, password)
    }
  return (
<div className='register_screen'>
<input className='input_data' type={'text'} value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
<input className='input_data' type={'text'} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
<input className='input_data' type={'password'} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
<button className='register_btn' onClick={collectData} type='button' >Register</button>
</div>  )
}

export default Register