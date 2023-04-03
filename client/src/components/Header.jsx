import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const auth = localStorage.getItem("user")
  return (
   <div>
    <ul className='header_ul'>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/add'>Add Product</Link></li>
      <li><Link to='/update'>Update Product</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
      <li>{auth ? <Link to='/logout'>Logout</Link> :<Link to='/register'>Register</Link> }</li>
    </ul>
   </div>
  )
}

export default Header