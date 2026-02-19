import React, { useState } from 'react';
import './CarNear.css';

const CarNear = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Example data - this would typically come from your API
  const locations = [
    { id: 1, name: 'Lagos', icon: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Abuja', icon: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Rivers', icon: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Kaduna', icon: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Ogun', icon: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Delta', icon: 'https://via.placeholder.com/100' },
    { id: 7, name: 'Osun', icon: 'https://via.placeholder.com/100' },
  ];

  return (
    <section className="car-near-card">
      <h2 className="title">Get amazing cars close to you</h2>
      
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder="What state would you like to find a car in?" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="location-grid">
        {locations.map((loc) => (
          <div key={loc.id} className="location-item">
            <div className="icon-circle">
              <img src={loc.icon} alt={loc.name} />
            </div>
            <p className="label">Used cars in</p>
            <p className="state-name">{loc.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarNear;