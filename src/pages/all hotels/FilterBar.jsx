import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const FilterBar = ({ activeFilters, setActiveFilters }) => {
  const [openFilter, setOpenFilter] = useState(null);
  const filterRef = useRef(null);

  const filterOptions = [
    { id: 1, title: 'Review Score', type: 'reviewScore', options: ['Excellent', 'Very Good', 'Good', 'Average', 'Bad'] },
    { id: 2, title: 'Hotel Theme', type: 'hotelTheme', options: ['Business', 'Classic', 'Luxury', 'Quiet', 'Standard'] },
  ];

  const handleFilterClick = (index) => {
    setOpenFilter(openFilter === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setOpenFilter(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='filter-bar' ref={filterRef}>
      {filterOptions.map((filter, index) => (
        <div key={index} className='filter-item'>
          <span onClick={() => handleFilterClick(index)}>
            {filter.title} <FaChevronDown className='filter-icon' />
          </span>
          {openFilter === index && (
            <div className='filter-options'>
              <div className='filter-title'>{filter.title}</div>
              {filter.options.map((option) => (
                <label key={option} className='filter-option'>
                  <input
                    type='checkbox'
                    checked={activeFilters[filter.type].includes(option)}
                    onChange={() => {
                      const updatedFilters = { ...activeFilters };
                      updatedFilters[filter.type] = updatedFilters[filter.type].includes(option)
                        ? updatedFilters[filter.type].filter((item) => item !== option)
                        : [...updatedFilters[filter.type], option];
                      setActiveFilters(updatedFilters);
                    }}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterBar;