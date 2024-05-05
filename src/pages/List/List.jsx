import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'

function List() {

    // ab vo jo data arha hai navigation k thorugh usko ab me yaah use krunga 
  const location = useLocation()


  // jo data aya hai usse mangwa rha hu me use state k through object se 
  const [destination,setDestination]=useState(location.state.destination)
  const [date,setDate]=useState(location.state.date)
  const [options,setOptions]=useState(location.state.options)
  const [openDate,setOpenDate]=useState(false)
  // funtion bana rha hu date open krne k liye 

  // console.log(destination)
  // console.log(date)
  // console.log(option)
  
  console.log(location)
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
              <h1 className="lisSearchTitle">
                Search
              </h1>
              <div className="listSearchItem">
                <label htmlFor="">Destination</label>
                <input placeholder={destination} type="text" name="" id="" />
              </div>
              <div className="listSearchItem">
                <label htmlFor="">Check-in Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
              { openDate && <DateRange
                onChange={(item)=>setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
                />}
              </div>
          </div>
          <div className="listResult">
                <h1>result</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List