import React from 'react'
import { FaBed } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaBedPulse } from "react-icons/fa6";
import { FaTaxi } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaPerson } from "react-icons/fa6";

import "./header.css"
function Header() {
    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FaBed />
                        <span>stays</span>
                    </div>
                    <div className="headerListItem">
                        <MdOutlineFlight />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FaCar />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FaBedPulse />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FaTaxi />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle"> A Lifetime of discounts? It's Genius</h1>
                <p className='headerDec'> Get reward for your travels unlock instant savings of 10% or more with free for Booking App account</p>
                <button className='headerBtn'> Sign in / Registure</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FaBed className='headerIcons' />
                        <input type="text"
                            placeholder='where are you going?'
                            className='headerSearchInput' />
                    </div>
                    <div className="headerSearchItem">
                        <SlCalender className='headerIcons'  />
                       <span className='headerSearchText'>date to date</span>
                    </div>
                    <div className="headerSearchItem">
                        <FaPerson  className='headerIcons'/>
                        <span className='headerSearchText'>
                            2 adults 2 children 1 room
                        </span>
                    </div>
                    <div className="headerSearchItem">
                     <button className='headerBtn'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header