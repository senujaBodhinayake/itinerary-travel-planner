import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Categories from '../Components/Categories/Categories'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'





const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="container">
        <Title subTitle='Sri Lanka' title='What You Can Explore'/>
        <Categories/>
        <About/>
        
        
      
      </div>
      
    </div>
  )
}

export default Home
