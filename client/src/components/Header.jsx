import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div>
    <ul className='header_ul'>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/add'>Add Product</Link></li>
      <li><Link to='/update'>Update Product</Link></li>
      <li><Link to='/logout'>Logout</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
      <li><Link to='/register'>Register</Link></li>
    </ul>
   </div>
  )
}

export default Header