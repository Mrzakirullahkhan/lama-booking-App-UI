import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import Featuredproperty from '../../components/featuredproperty/Featuredproperty'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'



function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className='homeTitle'>Browse by property type</h1>
          <PropertyList/>
          <h1 className='homeTitle'>Homes guests love</h1>
          <Featuredproperty/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home