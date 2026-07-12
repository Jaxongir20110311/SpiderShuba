import "../assets/Invest.css";

export default function Invest() {
  return (
    <section className="invest">

      <div className="container invest-container">

        <div className="invest-left">

          <span className="invest-subtitle">
            SpiderShiba Token
          </span>

          <h2 className="invest-title">
            Invest In The <br />
            Future Today
          </h2>

          <p className="invest-description">
            Become part of the SpiderShiba ecosystem by investing
            in a project that combines Blockchain, Metaverse,
            NFT, DAO and Play-To-Earn into one powerful platform.
          </p>

          <div className="invest-stats">

            <div className="stat-card">
              <h3>$250M+</h3>
              <p>Market Cap</p>
            </div>

            <div className="stat-card">
              <h3>500K+</h3>
              <p>Holders</p>
            </div>

            <div className="stat-card">
              <h3>100+</h3>
              <p>Partners</p>
            </div>

            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support</p>
            </div>

          </div>

          <div className="invest-buttons">

            <button className="buy-token-btn">
              Buy Tokens
              <span className="btn-web"></span>
            </button>

            <button className="whitepaper-btn">
              Whitepaper
              <span className="btn-web"></span>
            </button>

          </div>

        </div>

        <div className="invest-right">

          <div className="invest-image-wrapper">

            <div className="invest-glow glow-1"></div>
            <div className="invest-glow glow-2"></div>

            <img
              src="spidershiba-img.svg"
              alt="SpiderShiba"
              className="invest-image"
            />

            <div className="floating-box box-1">
              <h4>APY</h4>
              <span>245%</span>
            </div>

            <div className="floating-box box-2">
              <h4>Staking</h4>
              <span>Live</span>
            </div>

            <div className="floating-box box-3">
              <h4>NFT</h4>
              <span>Marketplace</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}