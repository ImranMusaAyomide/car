import './Banner.css';

// Wikipedia Commons & OpenGraph images allow direct hotlinking
const CAR_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2019_Toyota_RAV4_%28AXAH54R%29_Cruiser_hybrid_wagon_%282021-06-11%29_01.jpg/1280px-2019_Toyota_RAV4_%28AXAH54R%29_Cruiser_hybrid_wagon_%282021-06-11%29_01.jpg';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner">

        {/* Left — Text */}
        <div className="banner__text">
          <h2 className="banner__heading">
            Use Cars.ng to research your next car, and then buy it.
          </h2>
          <p className="banner__sub">
            Buy and sell cars in Nigeria with ease. Search, view prices of cars,
            explore detailed specifications and connect with car dealers across
            Nigeria offering a vast selection of car brands, types, and models.
          </p>
        </div>

        {/* Right — Visual */}
        <div className="banner__visual">
          <div className="banner__bubble" />
          <img
            src={CAR_IMG}
            alt="Toyota RAV4 SUV"
            className="banner__car"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;