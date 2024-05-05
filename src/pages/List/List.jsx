import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom'

function List() {
  // ab vo jo data arha hai navigation k thorugh usko ab me yaah use krunga 
  const location = useLocation()
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
                <input type="text" name="" id="" />
              </div>
              <div className="listSearchItem">
                <label htmlFor="">Check-in Date</label>
                <input type="text" name="" id="" />
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