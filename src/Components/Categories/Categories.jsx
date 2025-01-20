import React from 'react'
import './Categories.css'
import upcountry from '../../Upcountry.jpg'
import wildlife from '../../wild life.jpg'
import beaches from '../../beaches.jpg'
import upcountry_icon from '../../upcountry-icon.png'
import wildlife_icon from '../../wildlife-icon.png'
import beach_icon from '../../beach-icon.jpg'






const Categories = () => {
  return (
    <div className='categories'>
        <div className='category'>
            <img src={upcountry} alt="" />
            <div className="caption">
                <img src={upcountry_icon} alt="" />
                <p>Upcountry</p>
                </div>
        </div>
        <div className='category'>
            <img src={wildlife} alt="" />
            <div className="caption">
                <img src={wildlife_icon} alt="" />
                <p>Wild Life</p>
                </div>
            
        </div>
        <div className='category'>
            <img src={beaches} alt="" />
            <div className="caption">
                <img src={beach_icon} alt="" />
                <p>Beaches</p>
                </div>
        </div>
       
    </div>
  )
}

export default Categories
