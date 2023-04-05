import React from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'

const Header = () => {
  const redirect = useNavigate();
  const auth = localStorage.getItem("user")
  const logout = ()=>{
localStorage.clear();
redirect('/register')

  }
  return (
   <div>
    <ul className='header_ul'>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/add'>Add Product</Link></li>
      <li><Link to='/update'>Update Product</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
      <li>{auth ? <Link onClick={logout} to='/regsiter'>Logout</Link> :<Link to='/register'>Register</Link> }</li>
    </ul>
   </div>
  )
}

export default Header