import React from 'react';
import './CarPrice.css';

const CarPrice = () => {
  // Example data based on your image
  const carModels = [
    "Toyota Camry", "Toyota Corolla", "Toyota Venza", "Honda Accord",
    "Mercedes-Benz GLE-Class", "Toyota Highlander", "Hyundai Sonata",
    "Toyota RAV4", "Toyota Avalon", "Honda Civic", "Honda CR-V",
    "Lexus RX 350", "Toyota Matrix", "Lexus IS 250", "Peugeot 406",
    "Honda Pilot", "Toyota Land Cruiser Prado", "Lexus RX 330",
    "Toyota Tundra", "Ford Edge", "Acura MDX", "Peugeot 206",
    "Peugeot 307", "Honda Crosstour", "Lexus ES350", "Ford Explorer",
    "Lexus GS 350 Hybrid", "Mercedes-Benz G-Class", "Lexus GX 470",
    "Toyota Sienna", "Lexus CT Hybrid", "Toyota Sienna SE"
  ];

  return (
    <section className="car-price-card">
      <div className="price-header">
        <h2>Car Prices in Nigeria</h2>
        <p>
          Get the prices and latest information of brand new, foreign used and 
          Nigerian used cars by car brand, car model or car type available in Nigeria.
        </p>
      </div>
      
      <div className="price-grid">
        {carModels.map((model, index) => (
          <a key={index} href={`/prices/${model.toLowerCase().replace(/ /g, '-')}`} className="price-link">
            {model} price in Nigeria
          </a>
        ))}
      </div>
    </section>
  );
};

export default CarPrice;