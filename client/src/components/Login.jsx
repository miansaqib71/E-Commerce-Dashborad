import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    let auth = localStorage.getItem('user');
    if (auth) {
      navigate("/")
    }
  }, [])
  const loginBtn = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn("result", result)
    if (result.name) {
      localStorage.setItem('user', JSON.stringify(result));
            navigate("/")
    } else {
      alert("Please enter connect details")
    }
  }
  return (
    <div className='register_screen'>
      <h1>Login</h1>
      <input className='input_data' type={'text'}
        value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

      <input className='input_data' type={'password'}
        value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />

      <button className='register_btn' onClick={loginBtn} type='button' >Login</button>
    </div>
  )
}

export default Login