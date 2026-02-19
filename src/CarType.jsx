import React, { useState, useEffect } from 'react';
import './CarType.css';

const CarType = () => {
  const [cars, setCars] = useState([]);
  const [activeTab, setActiveTab] = useState('SUV');
  const [loading, setLoading] = useState(false);

  const categories = ['SUV', 'Sedan', 'Hatchback', 'Crossover'];

  // Mock API Call - Replace with your actual API endpoint
  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        // Example: const response = await fetch(`https://api.example.com/cars?type=${activeTab}`);
        // const data = await response.json();
        
        // Static mock data for demonstration
        const mockData = [
          { id: 1, name: 'Lexus LX', img: 'lexus.jpg' },
          { id: 2, name: 'Mazda CX-8', img: 'mazda.jpg' },
          { id: 3, name: 'Honda Pilot', img: 'honda.jpg' },
          { id: 4, name: 'Land Rover Defender', img: 'defender.jpg' },
        ];
        setCars(mockData);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [activeTab]);

  return (
    <section className="car-container">
      <div className="header-section">
        <h2>Popular Cars in Nigeria</h2>
        <p>Check out the most popular cars in Nigeria including the best-selling and cheapest cars...</p>
      </div>

      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeTab === cat ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="car-grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          cars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="image-wrapper">
                <img src={car.img} alt={car.name} />
              </div>
              <div className="card-content">
                <h3>{car.name}</h3>
                <button className="view-btn">View &rarr;</button>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="footer-link">
        <a href="#all">See All Popular Cars <span>&#10138;</span></a>
      </div>
    </section>
  );
};

export default CarType;