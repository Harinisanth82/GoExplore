import { useParams } from 'react-router-dom'
import './Hotel.css'
import React, { useState } from 'react'
import { allHotels, facilities } from '../../data'
import Navbar from '../../components/navbar/Navbar'
import { FaCircleArrowLeft, FaCircleArrowRight, FaCircleXmark, FaMapLocationDot } from 'react-icons/fa6'
import { GiDoubleStreetLights } from 'react-icons/gi'
import { MdPool } from 'react-icons/md'
import { FaCity } from 'react-icons/fa'
import { TbParkingCircle } from 'react-icons/tb'
import { rooms } from '../../data'
import Footer from '../../components/footer/Footer'

const Hotel = () => {
    
  const [open,setOpen]=useState(false)
  const [sliderNumber,setSliderNumber]=useState(0)
  
  const handleOpen =(i)=>{
    setSliderNumber(i)
    setOpen(true)
  }

  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction === 'l'){
      newSlideNumber=sliderNumber===0?rooms.length - 1:sliderNumber - 1;
    }else{
      newSlideNumber=sliderNumber===rooms.length - 1?0:sliderNumber + 1;
    }
    setSliderNumber(newSlideNumber);
  };
  const {id}=useParams()
  const hotel=allHotels.find((hotel)=>hotel.id===parseInt(id))

  return (
    <div>
      <Navbar />
      <div className='hotel-container'>
        {open &&(
            <div className='slider'>
                <FaCircleXmark className='close' onClick={()=>setOpen(false)}/>
                <FaCircleArrowLeft className='arrow' onClick={()=>handleMove("l")}/>
                <div className='slider-wrapper'>
                    <img src={rooms[sliderNumber].image} alt='' className='slider-img'/>
                </div>
                <FaCircleArrowRight className='arrow' onClick={()=>handleMove("r")}/>
            </div>
        )}

        <div className='hotel-wrapper'>
            <h1 className='hotel-title'>{hotel.title}</h1>
            <div className='hotel-location'>
                <FaMapLocationDot/>
                <span>{hotel.location}</span>
            </div>
            <span className='hotel-distance'>Excellent Location - 500m From Center</span>
            <span className='hotel-price'>Enjoy a Confortable Stay Starting at ${hotel.price} per night</span>
            <div className='hotel-images'>
                {
                    rooms.map((room,i)=>(
                        <div key={i} className='hotel-images-wrapper'>
                            <img src={room.image} alt='' className='hotel-img' onClick={()=>handleOpen(i)}/>
                        </div>
                    ))
                }
            </div>
            <div className='hotel-details'>
                <div className='hotel-details-text'>
                    <h1 className='hotel-title'>About this Hotel</h1>
                    <p>This hotel is designed for comfort and relaxation, offering spacious rooms, stunning views, and top-notch service. 
                        Whether you're here for business or leisure, you'll enjoy great amenities like a pool, spa, and delicious dining options. 
                        With a warm atmosphere and a prime location, it's the perfect place to unwind.
                    </p>
                    <div className='hotel-facilities'>
                        <h1 className='hotel-facilities-title'>Hotel Facilities</h1>
                        <div className='facilities'>
                            {facilities.map((facilitie)=>(
                                <div key={facilitie.id} className='facilitie'>
                                    <span className='facilitie-icon'>{facilitie.icon}</span>
                                    <span>{facilitie.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='hotel-highlights'>
                    <h1>Hotel Highlights</h1>
                    <h4>Ideal for a 4-Night Getaway!</h4>
                    <span>Located in the very heart of Krakow, this property holds an impressive location score of 9.8!</span>
                    <h4>Breakfast Options</h4>
                    <span>Rich, Flavorful, Nourishing, Delightful, Gourmet, Sumptuous</span>
                    <h4>Rooms With</h4>
                    <ul>
                        <li>
                            <GiDoubleStreetLights/> Quiet Street View
                        </li>
                        <li>
                            <MdPool/> Pool with a view
                        </li>
                        <li>
                            <FaCity/> City View
                        </li>
                        <li>
                            <TbParkingCircle/> Free Parking Space
                        </li>
                    </ul>
                    <button>Book Now!</button>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );  
}

export default Hotel