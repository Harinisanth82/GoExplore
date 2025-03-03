import React from 'react';
import { FaPlane } from 'react-icons/fa';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <Link to='/'>
          <div className='navbar-logo'>
            <FaPlane className="navbar-icon"/>
            <span>GoExplore</span>
          </div>
        </Link>
        <Link to='/hotels'>
          <button className='navbar-button'>Book Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;