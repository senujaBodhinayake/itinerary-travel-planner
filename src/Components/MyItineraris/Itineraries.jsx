


import React,{ useState,useEffect } from 'react'
import "./Itineraries.css"
import axios from 'axios';
import edit_icon from '../../icons8-edit-26.png';
import delete_icon from '../../icons8-delete-30.png'

const Itineraries = () => {
    const [destinations,setDestinations]= useState([]);
    const [newDestination,setNewDestination]=useState("");
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");
    const [error, setError] = useState("");

    const fetchDestinations = async () => {
        try {
            const response = await axios.get('http://localhost:5000/itinerary'); // Adjust URL accordingly
            setDestinations(response.data); // Set fetched destinations
            console.log(response);
        } catch (err) {
            setError("Error fetching itinerary");
            console.error(err);
        }
    };

    useEffect(() => {
        fetchDestinations();
    }, []); 
    const addDestination = () => {
        if (newDestination.trim() !== "") {
            const newdest={destination:newDestination}
          setDestinations([...destinations, newdest]);
          setNewDestination("");
        }
    }
    
    const handleSubmit = async () => {
        if (destinations.length === 0) {
            alert("Please add at least one destination!");
            return;
        }
        const payload = {
            startDate,
            endDate,
            destination: destinations[destinations.length - 1].destination // Ensure it's a string
        };
        console.log("Submitting:", payload);
        await axios.post("http://localhost:5000/itinerary", payload);
    };

    const handleUpdate = async (destination, id) => {
        const newDestinationName = prompt('Enter the new destination name:', destination);

        if (newDestinationName && newDestinationName !== destination) {
            try {
                const payload = { destination: newDestinationName };  // Data being sent to the backend
                console.log('Payload for Update:', payload);  // Log the payload for debugging

                // Send the PUT request
                const response = await axios.put(`http://localhost:5000/itinerary/${id}`, payload);
               fetchDestinations();
            } catch (err) {
                setError('Error updating destination');
                console.error(err);
            }
        }
    };
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this destination?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:5000/itinerary/${id}`);

            // ✅ Remove the deleted destination from state
            setDestinations(prevDestinations => prevDestinations.filter(destination => destination.id !== id));

        } catch (err) {
            setError("Error deleting destination");
            console.error(err);
        }
    };

    
    
    
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
            onChange={(e)=> {
                console.log(e.target.value)
                setNewDestination(e.target.value)}}
            className='input-field'
            />
            <button onClick={addDestination} className='add-button'>
                Add
            </button>
        </div>
        {/* <div className='itinerary-list'> 
        {destinations.length>0 ?(
            destinations.map((destination,index)=>(
                <div key={index} className='destination-item'>
                    {destination}
                </div>
                
            ))
        ):(
            <p className='placeholder-text'>No destinations added yet.</p>
        )}
        </div> */}
        <button onClick={()=>{
            const payload={
                startDate,
                endDate,
                destination:destinations[destinations.length-1]
            }
            console.log(destinations)
            handleSubmit(payload);
        }} 
        className='save-button'>Save Itinerary</button>
        <div className='itinerary-overview'>
            <h2 className='section-title'>Itinerary Overview</h2>
            <p><strong>Travel Dates:</strong>{startDate||"Not set"}-{endDate||"Not set"}</p>
            <ul className='destination-list'>
                {destinations.length>0 ?(destinations.map((destination,index)=>(
                    <li key={index} className='destination-item'>
                       <div>
                       {typeof destination === "object" ? destination.destination : destination}  
                        
                       </div>
                       <div className='destination-actions'>
                        <button onClick={()=>handleUpdate(destination.destination,destination.id)}className='update-button'>
                            <img src={edit_icon} alt=" edit" className='icon' />
                        </button>
                        <button onClick={()=>handleDelete(destination.id)} className='delete-button'>
                            <img src={delete_icon} alt="delete" className='icon' />
                        </button>
                        
                       </div>
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
