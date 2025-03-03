import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Categories from '../Components/Categories/Categories'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'
import Destinations from '../Components/Destinations/Destinations'
import Itineraries from '../Components/MyItineraris/Itineraries'





const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="container">
        <Title subTitle='Sri Lanka' title='What You Can Explore'/>
        <Categories/>
        <About/>
        <Title subTitle=' Discover the most amazing places Sri Lanka has to offer' title='Explore Destinations'/>
        <Destinations/>
        <Title subTitle='Itinerary Builder' title='Easiest way to plan your trip'/>
        <Itineraries/>
        
      
        
        
      
      </div>
      
    </div>
  )
}

export default Home
