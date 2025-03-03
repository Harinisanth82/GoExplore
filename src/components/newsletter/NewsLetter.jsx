import './Newsletter.css'
import React from 'react'
import discover from '../../assets/discover.jpg'

const NewsLetter = () => {
  return (
    <div className='newsletter-container'>
        <div className='newsletter-wrapper'>
            <div className='newsletter-image'>
                <img src={discover} alt=""/>
            </div>
            <div className='newsletter-content'>
                <h1>Explore With us</h1>
                <p>Unforgettable stays, just a click away!</p>
                <div className='input-container'>
                    <input type='text' placeholder='Enter Your Email'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter