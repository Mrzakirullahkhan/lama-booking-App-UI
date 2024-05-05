import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

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
              <div className="listSearchItem">
                <label htmlFor="">Option</label>
                <div className="lisSearchOption">
                <div className="listSearchOptionItem">
                  <span className="listSearchOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="listSearchOptionItem" />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listSearchOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="listSearchOptionItem" />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listSearchOptionText">
                    Adult
                  </span>
                  <input type="number" min={1} className="listSearchOptionItem" placeholder={options.adult} />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listSearchOptionText">
                    Children
                  </span>
                  <input type="number" min={0} className="listSearchOptionItem"  placeholder={options.children} />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listSearchOptionText">
                    Room
                  </span>
                  <input type="number" min={1} className="listSearchOptionItem"  placeholder={options.room} />
                </div>
                </div>
              </div>
              <button>Search</button>
          </div>
          <div className="listResult">
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List