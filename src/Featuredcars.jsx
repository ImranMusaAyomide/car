import { useRef, useState } from 'react';
import './FeaturedCars.css';

const CARS = [
  {
    id: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/2007-2009_Toyota_Avalon_photographed_in_USA.jpg/1280px-2007-2009_Toyota_Avalon_photographed_in_USA.jpg',
    badge: 'Nigerian Used',
    shortTitle: 'Toyota Avalon Limited 2019 for Sa...',
    name: 'Toyota Avalon',
    type: 'Sedan',
    fuel: 'Petrol',
    year: 2019,
    location: 'Lagos',
    price: '₦35,000,000',
    listed: '3 days ago',
    pinned: true,
  },
  {
    id: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/thirty/2003-2005_Honda_Accord_sedan_%28US%29.jpg/1280px-2003-2005_Honda_Accord_sedan_%28US%29.jpg',
    badge: 'Nigerian Used',
    shortTitle: 'Honda Accord 2002 for Sale In III...',
    name: 'Honda Accord',
    type: 'Sedan',
    fuel: 'Petrol',
    year: 2002,
    location: 'Kwara',
    price: '₦2,500,000',
    listed: '2 months ago',
    pinned: false,
  },
  {
    id: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/2012_Kia_Cerato_sedan_%28facelift%2C_red%29%2C_front_8.17.19.jpg/1280px-2012_Kia_Cerato_sedan_%28facelift%2C_red%29%2C_front_8.17.19.jpg',
    badge: 'Nigerian Used',
    shortTitle: 'KIA Cerato 2012 for Sale in Lagos',
    name: 'KIA Cerato',
    type: 'Sedan',
    fuel: 'Petrol',
    year: 2012,
    location: 'Lagos',
    price: '₦4,200,000',
    listed: '2 months ago',
    pinned: true,
  },
  {
    id: 4,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2019_GAC_GA3S_Yuanjing_1.5T_DCT_Premium_%28facelift%2C_golden%29%2C_front_8.17.19.jpg/1280px-2019_GAC_GA3S_Yuanjing_1.5T_DCT_Premium_%28facelift%2C_golden%29%2C_front_8.17.19.jpg',
    badge: 'Nigerian Used',
    shortTitle: 'GAC 2019 for Sale In Surulere Lag...',
    name: 'GAC GA3',
    type: 'Hatchback',
    fuel: 'Petrol',
    year: 2019,
    location: 'Lagos',
    price: '₦10,000,000',
    listed: '2 months ago',
    pinned: true,
  },
  {
    id: 5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2019_Toyota_RAV4_%28AXAH54R%29_Cruiser_hybrid_wagon_%282021-06-11%29_01.jpg/1280px-2019_Toyota_RAV4_%28AXAH54R%29_Cruiser_hybrid_wagon_%282021-06-11%29_01.jpg',
    badge: 'Foreign Used',
    shortTitle: 'Toyota RAV4 2019 for Sale in Abuja',
    name: 'Toyota RAV4',
    type: 'SUV',
    fuel: 'Hybrid',
    year: 2019,
    location: 'Abuja',
    price: '₦28,000,000',
    listed: '1 week ago',
    pinned: false,
  },
  {
    id: 6,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/2017_Mercedes-Benz_C200_%28W205%29_sedan_%282018-11-02%29_01.jpg/1280px-2017_Mercedes-Benz_C200_%28W205%29_sedan_%282018-11-02%29_01.jpg',
    badge: 'Foreign Used',
    shortTitle: 'Mercedes-Benz C200 2017 for Sale...',
    name: 'Mercedes C200',
    type: 'Sedan',
    fuel: 'Petrol',
    year: 2017,
    location: 'Lagos',
    price: '₦18,500,000',
    listed: '5 days ago',
    pinned: true,
  },
];

// Fallback placeholder if image fails
const FALLBACK = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

const FeaturedCars = () => {
  const trackRef = useRef(null);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const CARD_WIDTH = 284; // px including gap

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * CARD_WIDTH, behavior: 'smooth' });
    setTimeout(updateArrows, 350);
  };

  return (
    <section className="fc-section">
      <div className="fc-header">
        <div>
          <h2 className="fc-title">Featured Cars for Sale</h2>
          <p className="fc-sub">Browse our featured of cars for sale in Nigeria</p>
        </div>
      </div>

      <div className="fc-slider-wrap">
        {/* Left arrow */}
        <button
          className={`fc-arrow fc-arrow--left ${!canScrollLeft ? 'fc-arrow--hidden' : ''}`}
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        {/* Cards track */}
        <div className="fc-track" ref={trackRef} onScroll={updateArrows}>
          {CARS.map((car, i) => (
            <div className="fc-card" key={car.id} style={{ animationDelay: `${i * 0.07}s` }}>
              {/* Image */}
              <div className="fc-card__img-wrap">
                <img
                  src={car.image}
                  alt={car.name}
                  className="fc-card__img"
                  onError={(e) => { e.target.src = FALLBACK; }}
                />
                <span className="fc-card__badge">{car.badge}</span>
                {car.pinned && (
                  <span className="fc-card__pin">
                    <i className="fa-solid fa-thumbtack" />
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="fc-card__body">
                <p className="fc-card__short-title">{car.shortTitle}</p>
                <h3 className="fc-card__name">{car.name}</h3>
                <p className="fc-card__specs">
                  {car.type}
                  <span className="fc-card__dot">·</span>
                  {car.fuel}
                  <span className="fc-card__dot">·</span>
                  {car.year}
                </p>

                <div className="fc-card__meta">
                  <span className="fc-card__location">
                    <i className="fa-solid fa-location-dot" />
                    {car.location}
                  </span>
                  <span className="fc-card__price">{car.price}</span>
                </div>

                <div className="fc-card__footer">
                  <i className="fa-solid fa-rocket fc-card__rocket" />
                  <span className="fc-card__listed">Listed {car.listed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          className={`fc-arrow fc-arrow--right ${!canScrollRight ? 'fc-arrow--hidden' : ''}`}
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>

      {/* See all link */}
      <div className="fc-see-all-wrap">
        <a href="/featured" className="fc-see-all">
          See all featured cars for sale
          <i className="fa-regular fa-circle-question" />
        </a>
      </div>
    </section>
  );
};

export default FeaturedCars;