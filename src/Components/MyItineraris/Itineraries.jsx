


import React,{ useState } from 'react'
import "./Itineraries.css"

const Itineraries = () => {
    const [destinations,setDestinations]= useState([]);
    const [newDestination,setNewDestination]=useState("");
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");
    const addDestination = () => {
        if (newDestination.trim() !== "") {
          setDestinations([...destinations, newDestination]);
          setNewDestination("");
        }
    }
    
    const googleMapsURL = 'https://www.google.com/maps'
    const bookingURL='https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaIUBiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuALkjI--BsACAdICJDcxYTExYTQ5LTNkOTItNDFjOS04ODk0LWY3N2EzOGRmMDAwZtgCBeACAQ&sid=d6919db4610580996482cc47338e4b2e&keep_landing=1&sb_price_type=total&'
  return (
    <div className='itinerary-container'>
        <h1 className='title'>Create Your Itinerary</h1>
        <div className='date-selection'>
            <input 
            type='date'
            value={startDate}
            onChange={(e)=>setStartDate(e.target.value)}
            className='date-input'
             />
             <input 
            type='date'
            value={endDate}
            onChange={(e)=>setEndDate(e.target.value)}
            className='date-input' />
        </div>
        <div className='destination-input'>
            <input
            type='text'
            placeholder='Search for a destination...'
            value={newDestination}
            onChange={(e)=> setNewDestination(e.target.value)}
            className='input-field'
            />
            <button onClick={addDestination} className='add-button'>
                Add
            </button>
        </div>
        <div className='itinerary-list'>
        {destinations.length>0 ?(
            destinations.map((destination,index)=>(
                <div key={index} className='destination-item'>
                    {destination}
                </div>
                
            ))
        ):(
            <p className='placeholder-text'>No destinations added yet.</p>
        )}
        </div>
        <button className='save-button'>Save Itinerary</button>
        <div className='itinerary-overview'>
            <h2 className='section-title'>Itinerary Overview</h2>
            <p><strong>Travel Dates:</strong>{startDate||"Not set"}-{endDate||"Not set"}</p>
            <ul className='destination-list'>
                {destinations.length>0 ?(destinations.map((destination,index)=>(
                    <li key={index} className='destination-item'>
                       {destination} 
                    </li>
                ))
            ):(
                <p className='no-destinations'>No destinations selected yet.</p>
            )}
            </ul>
            <div className='iframe-container'>
                <div className='iframe-box'>
                    <h3>Map View</h3>
                    <iframe
                    width="100%"
                    height="300"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy='no-referrer-when-downfrade'
                    src={googleMapsURL}
                    ></iframe>

                </div>
                <div className='iframe-box'>
                    <h3>Find Place to Stay</h3>
                    <iframe
                    width="100%"
                    height="100%"
                    loading='lazy'
                    allowFullScreen
                    src={bookingURL}
                    ></iframe>
                </div>
                

            </div>
            <button className='finalize-button'>Finalize Itinerary</button>
            

            
        </div>
      
    </div>
    
  )
}

export default Itineraries
