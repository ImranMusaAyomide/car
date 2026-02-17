import { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

// ── Curated Unsplash car photo IDs ───────────────────────────────────────────
const CAR_PHOTOS = [
  'photo-1603584173870-7f23fdae1b7a', // silver sedan showroom
  'photo-1544636331-e26879cd4d9b',    // sleek black sports car
  'photo-1552519507-da3b142c6e3d',    // yellow sports car road
  'photo-1492144534655-ae79c964c9d7', // white coupe open road
  'photo-1580274455191-1c62238fa333', // black SUV dusk city
  'photo-1511919884226-fd3cad34687c', // red luxury sedan
];

const buildUrl = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

// ── Brand & form data ────────────────────────────────────────────────────────
const brands = [
  { name: 'Toyota',   logo: 'https://www.carlogos.org/car-logos/toyota-logo-2019-3700x1300.png' },
  { name: 'Honda',    logo: 'https://www.carlogos.org/car-logos/honda-logo-2000-full-640.png' },
  { name: 'Mercedes', logo: 'https://www.carlogos.org/car-logos/mercedes-benz-logo-2011-640.png' },
  { name: 'BMW',      logo: 'https://www.carlogos.org/car-logos/bmw-logo-2020-gray-800.png' },
  { name: 'Ford',     logo: 'https://www.carlogos.org/car-logos/ford-logo-2017-640.png' },
  { name: 'Hyundai',  logo: 'https://www.carlogos.org/car-logos/hyundai-logo-800.png' },
  { name: 'Lexus',    logo: 'https://www.carlogos.org/car-logos/lexus-logo-1988-800.png' },
  { name: 'Nissan',   logo: 'https://www.carlogos.org/car-logos/nissan-logo-2020-black-800.png' },
];

const bodyTypes    = ['Sedan', 'SUV', 'Hatchback', 'Pickup', 'Coupe', 'Minivan', 'Wagon', 'Convertible'];
const budgetRanges = ['Under ₦1M', '₦1M – ₦3M', '₦3M – ₦5M', '₦5M – ₦10M', '₦10M – ₦20M', 'Above ₦20M'];

const SLIDE_INTERVAL = 5000; // ms between auto-advances

// ── Component ─────────────────────────────────────────────────────────────────
const HeroSection = () => {
  // Slideshow
  const [currentIdx,    setCurrentIdx]    = useState(0);
  const [nextIdx,       setNextIdx]       = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);

  // Search card
  const [carType,        setCarType]        = useState('tokunbo');
  const [searchMode,     setSearchMode]     = useState('brand');
  const [selectedBrand,  setSelectedBrand]  = useState('Toyota');
  const [selectedBody,   setSelectedBody]   = useState('Sedan');
  const [selectedBudget, setSelectedBudget] = useState('Under ₦1M');

  const currentBrandLogo = brands.find((b) => b.name === selectedBrand)?.logo;

  // ── Slide transition ────────────────────────────────────────────────────
  const advance = (targetIdx) => {
    if (transitioning) return;
    const to = targetIdx !== undefined
      ? targetIdx
      : (currentIdx + 1) % CAR_PHOTOS.length;
    setNextIdx(to);
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIdx(to);
      setTransitioning(false);
    }, 900);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => advance(), SLIDE_INTERVAL);
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx, transitioning]);

  const goTo = (idx) => {
    clearInterval(timerRef.current);
    advance(idx);
  };

  // ── Render
  return (
    <section className="hero">

      {/* ── Background Slideshow ── */}
      <div className="hero__bg">
        {/* Base layer — current image */}
        <img
          key={`base-${currentIdx}`}
          src={buildUrl(CAR_PHOTOS[currentIdx])}
          alt="Featured car"
          className="hero__bg-img"
        />

        {/* Top layer — next image fades in */}
        {transitioning && (
          <img
            key={`next-${nextIdx}`}
            src={buildUrl(CAR_PHOTOS[nextIdx])}
            alt="Next car"
            className="hero__bg-img hero__bg-img--next"
          />
        )}

        <div className="hero__bg-overlay" />

        {/* Progress bar */}
        <div className="hero__progress-track">
          <div
            key={`bar-${currentIdx}`}
            className="hero__progress-bar"
            style={{ animationDuration: `${SLIDE_INTERVAL}ms` }}
          />
        </div>

        {/* Dot indicators */}
        <div className="hero__dots">
          {CAR_PHOTOS.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === currentIdx ? 'hero__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Foreground Content ── */}
      <div className="hero__content">

        {/* Search Card */}
        <div className="hero__card">
          <p className="hero__card-title">Find your next awesome vehicle</p>

          {/* Tokunbo / New Car */}
          <div className="hero__toggle">
            {['tokunbo', 'new'].map((t) => (
              <button
                key={t}
                className={`hero__toggle-btn ${carType === t ? 'hero__toggle-btn--active' : ''}`}
                onClick={() => setCarType(t)}
              >
                {t === 'tokunbo' ? 'Tokunbo' : 'New Car'}
              </button>
            ))}
          </div>

          {/* By Brand / By Budget */}
          <div className="hero__radio-group">
            {[['brand', 'By Brand'], ['budget', 'By Budget']].map(([val, label]) => (
              <label key={val} className="hero__radio-label">
                <input
                  type="radio"
                  name="searchMode"
                  value={val}
                  checked={searchMode === val}
                  onChange={() => setSearchMode(val)}
                />
                <span className="hero__radio-custom" />
                {label}
              </label>
            ))}
          </div>

          {/* Dropdowns */}
          <div className="hero__dropdowns">
            {searchMode === 'brand' ? (
              <>
                <div className="hero__select-wrapper">
                  {currentBrandLogo && (
                    <img src={currentBrandLogo} alt={selectedBrand} className="hero__select-logo" />
                  )}
                  <select
                    className="hero__select"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                  >
                    {brands.map((b) => <option key={b.name}>{b.name}</option>)}
                  </select>
                  <i className="fa-solid fa-chevron-down hero__select-arrow" />
                </div>

                <div className="hero__select-wrapper">
                  <i className="fa-solid fa-car hero__select-car-icon" />
                  <select
                    className="hero__select"
                    value={selectedBody}
                    onChange={(e) => setSelectedBody(e.target.value)}
                  >
                    {bodyTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <i className="fa-solid fa-chevron-down hero__select-arrow" />
                </div>
              </>
            ) : (
              <div className="hero__select-wrapper">
                <i className="fa-solid fa-naira-sign hero__select-car-icon" />
                <select
                  className="hero__select"
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                >
                  {budgetRanges.map((r) => <option key={r}>{r}</option>)}
                </select>
                <i className="fa-solid fa-chevron-down hero__select-arrow" />
              </div>
            )}
          </div>

          <button className="hero__search-btn">Search</button>

          <a href="/advanced-search" className="hero__advanced-link">
            Advanced Search <i className="fa-solid fa-arrow-right" />
          </a>
        </div>

        {/* Headline */}
        <div className="hero__headline">
          <h1 className="hero__headline-text">
            EXPLORE 1,923 CARS<br />
            IN NIGERIA<br />
            <span className="hero__headline-accent">FOR SALE</span>
          </h1>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;