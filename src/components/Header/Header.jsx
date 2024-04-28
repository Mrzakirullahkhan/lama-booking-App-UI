import React from 'react'
import { FaBed } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaBedPulse } from "react-icons/fa6";
import { FaTaxi } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaPerson } from "react-icons/fa6";
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"

import "./header.css"
function Header() {
    const [openDate, setOpenDate]=useState(false)
    const [date, setdate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    //   for children adult and room 
     const [openOptions, setOpenOptions]=useState(false)
     const [options, setOptions]=useState({
        adult:0,
        children:0,
        room:1
     })
     
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
                       <span onClick={()=>{setOpenDate(!openDate)}} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
    {openDate &&<DateRange
  editableDateInputs={true}
  onChange={item => setdate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className='date'
/>}
                    </div>
                    <div className="headerSearchItem">
                        <FaPerson  className='headerIcons'/>
                        <span className='headerSearchText'>
                        {`${options.adult} adult . ${options.children} children . ${options.room} room`}
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