import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../logo.png'

const Navbar = () => {
  const [sticky,setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setSticky(true):setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>EXPLORE</li>
        <li>MY ITINERARIES</li>
        <li><button className='btn'>CONTACT</button></li>
        
      </ul>
    </nav>
  )
}

export default Navbar
