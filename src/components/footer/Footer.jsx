import './Footer.css'
import React from 'react'
import { destinations,info,services,contact } from '../../data'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import {IoMail} from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-lists'>
            <ul className='footer-list'>
                <h2>Destinations</h2>
                {destinations.map((destination)=>(
                    <li key={destination.id} className='footer-list-item'>{destination.title}</li>
                ))}
            </ul>

            <ul className='footer-list'>
                <h2>Information</h2>
                {info.map((item)=>(
                    <li key={item.id} className='footer-list-item'>{item.title}</li>
                ))}
            </ul>

            <ul className='footer-list'>
                <h2>Services</h2>
                {services.map((service)=>(
                    <li key={service.id} className='footer-list-item'>{service.title}</li>
                ))}
            </ul>

            <ul className='footer-list'>
                <h2>Contact</h2>
                <li className='footer-list-item'>
                    <FaLocationDot/> Erode, TamilNadu
                </li>
                <li className='footer-list-item'>
                    <FaPhoneAlt/> +919944192989
                </li>
                <li className='footer-list-item'>
                    <IoMail/> harinisanth563@gmail.com
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer