import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className='logo'>BookignApp</span>
            <div className="navItems">
                <button className='navButton'>Registure</button>
                <button className='navButton'>login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar