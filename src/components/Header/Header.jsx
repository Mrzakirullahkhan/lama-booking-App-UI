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
// import { useNavigate } from 'react-router-dom';

import "./header.css"
import { useNavigate } from 'react-router-dom';
function Header({type}) {
    const [openDate, setOpenDate]=useState(false)
    const [destination,setDestination] = useState("")
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
    //  increase and decrease function handler 
     const handleOption = (name,operation)=>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
            }
        })
     }
    //  use navigate hook 
    const navigate = useNavigate()
    //  search per click krne wala function 
     const handlerSearch = ()=>{
        navigate("./hotels",{state:{
            destination,
            date,
            options
        }})
     }
    return (
        <div className='header'>
            <div className={type==="list" ? "headerContainer listMode" :"headerContainer"}>
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
{ type!=="list" && <> <h1 className="headerTitle"> A Lifetime of discounts? It's Genius</h1>
                <p className='headerDec'> Get reward for your travels unlock instant savings of 10% or more with free for Booking App account</p>
                <button className='headerBtn'> Sign in / Registure</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FaBed className='headerIcons' />
                        <input type="text"
                            onChange={e=>setDestination(e.target.value)}
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
  minDate={new Date()}
/>}
                    </div>
                    <div className="headerSearchItem">
                        <FaPerson  className='headerIcons'/>
                        <span onClick={()=>{
                            setOpenOptions(!openOptions)
                        }} className='headerSearchText'>
                        {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                        </span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">adult</span>
                                <div className="optionCounter">
                                <button className='optionCounterButton'
                                 disabled={options.adult<=1} 
                                onClick={()=>handleOption("adult","decrease")}>-</button>
                                <span className='optionCounterNumber'>{options.adult}</span>
                                <button className='optionCounterButton' onClick={()=>handleOption("adult","increase")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">children</span>
                                <div className="optionCounter">
                                <button className='optionCounterButton'
                                disabled={options.children<=0}
                                 onClick={()=>handleOption("children","decrease")}>-</button>
                                <span className='optionCounterNumber'>{options.children}</span>
                                <button className='optionCounterButton' onClick={()=>handleOption("children","increase")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">room</span>
                                <div className="optionCounter">
                                <button className='optionCounterButton'
                                 disabled={options.room<=1}
                                 onClick={()=>handleOption("room","decrease")}>-</button>
                                <span className='optionCounterNumber' >{options.room}</span>
                                <button className='optionCounterButton' onClick={()=>handleOption("room","increase")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                     <button className='headerBtn' onClick={handlerSearch}>Search</button>
                    </div>
                </div></>}
            </div>

        </div>
    )
}

export default Header