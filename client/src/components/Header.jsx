import React from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'

const Header = () => {
  const redirect = useNavigate();
  const auth = localStorage.getItem("user")
  console.log(auth)
  const logout = () => {
    localStorage.clear();
    redirect('/register')

  }
  return (
    <div>
      <img alt='logo'
      className='logo_design'
      src="https://cdn.vectorstock.com/i/1000x1000/95/31/online-shop-logo-ecommerce-logo-design-vector-32009531.webp"
      />
    
      {auth ? <ul className='header_ul'>
        <li><Link to='/'>Products</Link></li>
        <li><Link to='/add'>Add Product</Link></li>
        <li><Link>Update Product</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li> <Link onClick={logout} to='/register'>Logout{" "} ({JSON.parse(auth).name})</Link></li>
      </ul> 
      : 
      <ul className='header_ul header_right'>
        <li><Link to='/register'>Register</Link> </li>
        <li><Link to='/login'>Login</Link> </li>
      </ul>}
   </div >
  )
}

export default Header