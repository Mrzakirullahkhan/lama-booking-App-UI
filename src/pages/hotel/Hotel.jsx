import React from 'react'
import "./hotel.css"
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import { FaLocationDot } from "react-icons/fa6";



function Hotel() {

  const photos = [
    {
      src:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src:"https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src:"https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src:"https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src:"https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

  ]
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdress">
          <FaLocationDot />
            <span>Elton St 123 New york</span>
          </div>
          <span className="hotelDistance">
            Exellent location - 544m from center
          </span>
          <span className="hotelPriceHeightLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map(photo=>(
              <div className="hotelImageWrapper">
                  <img src={photo.src} alt="" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">
                Stay in the heart of Krakow
              </h1>
              <p className="hotelDec">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sequi repellat ipsa ut, quibusdam quam eaque iste sunt saepe ex debitis minima blanditiis recusandae non illo voluptas atque quaerat pariatur?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum suscipit distinctio rerum quae fugiat beatae. Quasi perspiciatis earum nisi eius distinctio quis veritatis ratione ullam. Nesciunt atque nostrum molestias ipsa.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>perfect for 9 night stay</h1>
              <span>located in the real heart of Krakow, this property has an 
                exellent location score of 9.8
              </span>
              <h2>
                <b>$454</b> 9-night
              </h2>
              <button>Reserve of Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel