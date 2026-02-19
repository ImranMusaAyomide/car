import { useRef, useState, useCallback } from 'react';
import './Browse.css';

// ── Brand data — logos from Wikimedia Commons ──────────────────────────────
const BRANDS = [
  {
    name: 'Toyota',
    label: 'Toyota Cars in Nigeria',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/180px-Toyota_carlogo.svg.png',
  },
  {
    name: 'Honda',
    label: 'Honda Cars in Nigeria',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/180px-Honda.svg.png',
  },
  {
    name: 'Lexus',
    label: 'Lexus Cars in Nigeria',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lexus_division_wordmark.svg/240px-Lexus_division_wordmark.svg.png',
  },
  {
    name: 'Mercedes-Benz',
    label: 'Mercedes-Benz Cars in Nigeria',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/160px-Mercedes-Logo.svg.png',
  },
  {
    name: 'Hyundai',
    label: 'Hyundai Cars in Nigeria',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hyundai_Motor_Company_logo.svg/240px-Hyundai_Motor_Company_logo.svg.png',
  },
  {
    name: 'Ford',
    label: 'Ford Cars in Nigeria',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/200px-Ford_logo_flat.svg.png',
  },
  {
    name: 'BMW',
    label: 'BMW Cars in Nigeria',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/160px-BMW.svg.png',
  },
  {
    name: 'Nissan',
    label: 'Nissan Cars in Nigeria',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_2020_logo.svg/200px-Nissan_2020_logo.svg.png',
  },
  {
    name: 'Kia',
    label: 'Kia Cars in Nigeria',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kia-logo.svg/200px-Kia-logo.svg.png',
  },
  {
    name: 'Volkswagen',
    label: 'Volkswagen Cars in Nigeria',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/160px-Volkswagen_logo_2019.svg.png',
  },
];

// ── Car types — side-profile PNGs from Wikimedia ───────────────────────────
const CAR_TYPES = [
  {
    type: 'Sedan',
    label: 'Sedan Cars in Nigeria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Toyota_Camry_XV70_red.png/320px-Toyota_Camry_XV70_red.png',
  },
  {
    type: 'SUV',
    label: 'SUV Cars in Nigeria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/2020_Mercedes-Benz_GLE_450_%28W167%29%2C_front_8.14.19.jpg/320px-2020_Mercedes-Benz_GLE_450_%28W167%29%2C_front_8.14.19.jpg',
  },
  {
    type: 'Minivan',
    label: 'Minivan Cars in Nigeria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/2011_Toyota_Sienna_XLE_--_01.jpg/320px-2011_Toyota_Sienna_XLE_--_01.jpg',
  },
  {
    type: 'Truck',
    label: 'Truck Cars in Nigeria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/2019_Toyota_Hilux_Revo_facelift%2C_Thailand.jpg/320px-2019_Toyota_Hilux_Revo_facelift%2C_Thailand.jpg',
  },
  {
    type: 'Luxury',
    label: 'Luxury Cars in Nigeria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/2017_Mercedes-Benz_C200_%28W205%29_sedan_%282018-11-02%29_01.jpg/320px-2017_Mercedes-Benz_C200_%28W205%29_sedan_%282018-11-02%29_01.jpg',
  },
  {
    type: 'Hatchback',
    label: 'Hatchback Cars in Nigeria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2019_Volkswagen_Golf_Match_Edition_1.6_Front.jpg/320px-2019_Volkswagen_Golf_Match_Edition_1.6_Front.jpg',
  },
  {
    type: 'Coupe',
    label: 'Coupe Cars in Nigeria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/2019_BMW_M2_Competition_Coupe%2C_front_8.17.19.jpg/320px-2019_BMW_M2_Competition_Coupe%2C_front_8.17.19.jpg',
  },
  {
    type: 'Convertible',
    label: 'Convertible Cars in Nigeria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/2019_BMW_Z4_M40i_convertible%2C_front_8.6.19.jpg/320px-2019_BMW_Z4_M40i_convertible%2C_front_8.6.19.jpg',
  },
];

// ── Reusable scrollable row ────────────────────────────────────────────────
const ScrollRow = ({ children, itemWidth = 200 }) => {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd,   setAtEnd]   = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * (itemWidth + 16), behavior: 'smooth' });
    setTimeout(updateArrows, 380);
  };

  return (
    <div className="browse-row">
      <button
        className={`browse-arrow browse-arrow--left ${atStart ? 'browse-arrow--hidden' : ''}`}
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
      >
        <i className="fa-solid fa-chevron-left" />
      </button>

      <div className="browse-track" ref={trackRef} onScroll={updateArrows}>
        {children}
      </div>

      <button
        className={`browse-arrow browse-arrow--right ${atEnd ? 'browse-arrow--hidden' : ''}`}
        onClick={() => scroll(1)}
        aria-label="Scroll right"
      >
        <i className="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────
const Browse = () => {
  return (
    <div className="browse-wrap">

      {/* ── Section 1: Brands ── */}
      <section className="browse-section">
        <h2 className="browse-title">Browse Cars by Brands</h2>
        <p className="browse-sub">
          Browse from our list of numerous car brands available in Nigeria. Explore
          our collection of brand new cars, tokunbo and Nigerian-used cars.
        </p>

        <ScrollRow itemWidth={200}>
          {BRANDS.map((brand, i) => (
            <a
              key={brand.name}
              href={`/brand/${brand.name.toLowerCase()}`}
              className="browse-card"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="browse-card__img-wrap">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="browse-card__logo"
                  onError={(e) => { e.target.style.opacity = '0'; }}
                />
              </div>
              <p className="browse-card__label">{brand.label}</p>
            </a>
          ))}
        </ScrollRow>

        <div className="browse-viewall-wrap">
          <a href="/brands" className="browse-viewall">
            View All Brands <i className="fa-regular fa-circle-right" />
          </a>
        </div>
      </section>

      {/* ── Section 2: Car Types ── */}
      <section className="browse-section">
        <h2 className="browse-title">Browse Car Types in Nigeria</h2>
        <p className="browse-sub">
          Explore a wide range of cars in Nigeria, including SUVs, sedans, and trucks.
          Find the best deals on Cars.ng with photos, specs, and reviews to help you
          choose your dream car today.
        </p>

        <ScrollRow itemWidth={200}>
          {CAR_TYPES.map((ct, i) => (
            <a
              key={ct.type}
              href={`/type/${ct.type.toLowerCase()}`}
              className="browse-card"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="browse-card__img-wrap browse-card__img-wrap--photo">
                <img
                  src={ct.image}
                  alt={ct.type}
                  className="browse-card__photo"
                  onError={(e) => { e.target.style.opacity = '0.3'; }}
                />
              </div>
              <p className="browse-card__label">{ct.label}</p>
            </a>
          ))}
        </ScrollRow>

        <div className="browse-viewall-wrap">
          <a href="/types" className="browse-viewall">
            View All Car Types <i className="fa-regular fa-circle-right" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Browse;