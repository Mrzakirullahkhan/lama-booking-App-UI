import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'



function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          
        </div>
    </div>
  )
}

export default Home