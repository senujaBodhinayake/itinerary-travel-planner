import React from 'react'
import './Navbar.css'
import logo from '../../logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>HOME</li>
        <li>EXPLORE</li>
        <li>MY ITINERARIES</li>
        <li><button className='btn'>CONTACT</button></li>
        
      </ul>
    </nav>
  )
}

export default Navbar
