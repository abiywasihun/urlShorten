import React from 'react'
import brandReco from '../assets/img/icon-brand-recognition.svg'
import detailedRecordes from "../assets/img/icon-detailed-records.svg"
import fulllycostomizable from "../assets/img/icon-fully-customizable.svg"
function Stastics() {
  return (
    <div className='stastics'>
        <h1>  Advanced Statistics</h1>
        <small>Track how your links are performing across the web with our 
  advanced statistics dashboard.</small>
  <div className='show__stat'>
      <div className='stat__card'>
          <img src={brandReco} alt="" className="card__avater" />
          <h3 className="card__title">Brand Recognition</h3>
          <span className="card__desc">Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</span>
      </div>
      <div className='stat__card'>
          <img src={detailedRecordes} alt="" className="card__avater" />
          <h3 className="card__title">Detailed Records</h3>
          <span className="card__desc">Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</span>
      </div>
      <div className='stat__card'>
          <img src={fulllycostomizable} alt="" className="card__avater" />
          <h3 className="card__title">Fully Customizable</h3>
          <span className="card__desc">Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</span>
      </div>
  </div>
    </div>
  )
}

export default Stastics