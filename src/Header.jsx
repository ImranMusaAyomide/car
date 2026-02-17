import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Top Nav */}
      <div className="header__top">
        <div className="header__container">

          {/* Logo */}
          <a href="/" className="header__logo">
            C<span className="header__logo-dot">●</span>rs.ng
          </a>

          {/* Search Bar */}
          <div className="header__search">
            <i className="fa-solid fa-magnifying-glass header__search-icon"></i>
            <input
              type="text"
              className="header__search-input"
              placeholder="Search cars for sale"
            />
            <button className="header__search-btn">Go</button>
          </div>

          {/* Nav Actions */}
          <nav className="header__actions">
            <a href="/advertise" className="header__action-link">
              <i className="fa-solid fa-bullhorn"></i>
              <span>Advertise</span>
            </a>
            <a href="/login" className="header__action-link">
              <i className="fa-regular fa-user"></i>
              <span>Login</span>
            </a>
            <a href="/sell" className="header__action-link header__action-link--sell">
              <i className="fa-solid fa-tag"></i>
              <span>Sell Your Car</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="header__bottom">
        <div className="header__container">
          <nav className="header__subnav">
            <a href="/cars-for-sale" className="header__subnav-link">
              <i className="fa-solid fa-rotate"></i>
              <span>Cars for Sale</span>
            </a>
            <a href="/car-brands" className="header__subnav-link">
              <i className="fa-solid fa-car"></i>
              <span>Car Brands</span>
            </a>
            <a href="/car-reviews" className="header__subnav-link">
              <i className="fa-regular fa-comment-dots"></i>
              <span>Car Reviews</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;