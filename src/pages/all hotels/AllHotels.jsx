import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import FilterBar from './FilterBar';
import { allHotels } from '../../data';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { BsGrid3X2Gap } from 'react-icons/bs';
import './AllHotels.css';
import Hotels from '../../components/hotels/Hotels';
import Footer from '../../components/footer/Footer';

const AllHotels = () => {
  const [filteredHotels, setFilteredHotels] = useState(allHotels);
  const [activeFilters, setActiveFilters] = useState({
    reviewScore: [],
    hotelTheme: [],
  });

  useEffect(() => {
    let filtered = allHotels;

    if (activeFilters.reviewScore.length > 0) {
      filtered = filtered.filter((hotel) => activeFilters.reviewScore.includes(hotel.review));
    }

    if (activeFilters.hotelTheme.length > 0) {
      filtered = filtered.filter((hotel) => activeFilters.hotelTheme.includes(hotel.theme));
    }

    setFilteredHotels(filtered);
  }, [activeFilters]);

  return (
    <div>
      <Navbar />
      <Hero />
      <FilterBar activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
      <div className='allhotels-items'>
        <h2 className='allhotels-heading'>{filteredHotels.length} Hotels Found</h2>
        <div className='allhotels-icons'>
          <HiOutlineSquares2X2 />
          <BsGrid3X2Gap />
        </div>
      </div>
      <Hotels hotels={filteredHotels} />
      <Footer />
    </div>
  );
};

export default AllHotels;
