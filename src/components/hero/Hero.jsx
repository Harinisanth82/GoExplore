import React from 'react'
import "./Hero.css"
import Guests from './Guests'
import Date from './Date'
import Location from './Location'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-container'>
            <h1>Discover the World With Us</h1>
            <p>Stay Calm and Explore Your Happy Place</p>
            <div className='hero-search'>
                <div className='hero-wrapper'>
                    <Location/>
                    <Date/>
                    <Guests/>
                    <Link to='/hotels'>
                        <div className='search-button'>
                            <button>Search</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero