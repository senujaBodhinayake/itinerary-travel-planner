


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
  return (
    <div className='itinerary container'>
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
        <div className='itinerary overview'>
            <h2>Itinerary Overview</h2>
            <p><strong>Travel Dates:</strong>{startDate}-{endDate}</p>
            <ul>
                {destinations.map((destination,index)=>(
                    <li key={index}>
                        <h4>{destination.name}</h4>
                    </li>
                ))}
            </ul>
            <div className='map-container'>
                <iframe
                width="100%"
                height="300"
                loading='lazy'
                allowFullScreen
                referrerPolicy='no-referrer-when-downgrade'
                src='https://www.google.com/maps'></iframe>
                

            </div>
            <button className='finalize-button'>Finalize Itinerary</button>
            

            
        </div>
      
    </div>
    
  )
}

export default Itineraries
