import React from 'react'
import "./featuredproperty.css"

function Featuredproperty() {
  return (
    <div className='featuredproperty'>
   
    <div className="fpItem">
    <img
    className='fpImg'
     src="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span className='fpName'>Aparthotel Stae Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>starting from 120%</span>
        <div className="fpRating">
            <button>8.0</button>
            <span>Exellence</span>
        </div>
    </div>
   
    <div className="fpItem">
    <img className='fpImg'
     src="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span className='fpName'>Aparthotel Stae Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>starting from 120%</span>
        <div className="fpRating">
            <button>8.0</button>
            <span>Exellence</span>
        </div>
    </div>
    <div className="fpItem">
    <img
    className='fpImg'
     src="https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span className='fpName'>Aparthotel Stae Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>starting from 120%</span>
        <div className="fpRating">
            <button>8.0</button>
            <span>Exellence</span>
        </div>
    </div>
        
    </div>
  )
}

export default Featuredproperty