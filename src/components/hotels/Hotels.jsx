import React from 'react'
import './Hotels.css'
import { CiLocationOn } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'


const Hotels = ({hotels,heading}) => {

  const navigate=useNavigate();
  const handleViewDetail=(id)=>{
    navigate(`/hotels/${id}`)
  }

  return (
    <div className='hotels-container'>
        <h1 className='hotels-header'>{heading}</h1>
        <div className='hotels'>
            {hotels.map((hotel)=>(
                <div key={hotel.id} className='hotel-item'>
                    <img src={hotel.image} alt="" className='hotel-image' onClick={()=>handleViewDetail(hotel.id)}/>
                    <div className='hotel-content'>
                        <span className='hotel-location'>
                            <CiLocationOn className='icon'/>{hotel.location}
                        </span>
                        <span className='hotel-name' onClick={()=>handleViewDetail(hotel.id)}>
                            {hotel.name}
                        </span>
                        <div className='hotel-rate'>
                            <button>{hotel.rate}</button>
                            <span>{hotel.review}</span>
                        </div>
                        <span className='hotel-price'>
                            <span>From : </span> ${hotel.price} <span>/night</span>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hotels