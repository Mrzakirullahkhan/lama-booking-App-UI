import React from 'react'
import "./searchItem.css"

function SearchItem() {
  return (
    <div className='searchItem'>
        <img
        className='searchItemImg'
         src="https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="" />
        <div className="searchDesc">
        <h1 className="searchTitle">Tower street Apartments</h1>
            <span className="searchDistance">300m from Center</span>
            <span className='searchItemText'>Free airport taxi</span>
            <span className="searchItemSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="searchItemFeatures">Entire studio * 1 bathroom * 21m 1 full bed</span>
            <span className="searchItemCancel">Free cancellation</span>
            <span className="searchItemCancelSubtitle">
                you can cancel later, so lock in this great price today
            </span>
        </div>
        <div className="searchDetail">
           <div className="searchItemRating">
            <span>Exellent</span>
            <button>8.9</button>
           </div>
           <div className="searchItemDetailTaxts">
           <span className="searchItemPrice">$334</span>
            <span className="searchItemTax">include taxes and fee</span>
            <button className='searchItemCheckBtn'>see availability</button>
           </div>
           <div className=""></div>
        </div>
    </div>
  )
}

export default SearchItem