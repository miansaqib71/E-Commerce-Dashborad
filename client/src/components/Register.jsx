import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem("user")
    if (auth) {
      navigate("/")
    }
  }, [])
  const collectData = async () => {
    let data = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    data = await data.json();
    localStorage.setItem("user", JSON.stringify(data.userData))
    localStorage.setItem("token", JSON.stringify(data.auth))
   
    console.log(data)
    navigate("/")
  }

  return (
    <div className='register_screen'>
         <h1>Register</h1>
      <input className='input_data' type={'text'} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
      <input className='input_data' type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
      <input className='input_data' type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
      <button className='register_btn' onClick={collectData} type='button' >Register</button>
    </div>)
}

export default Register