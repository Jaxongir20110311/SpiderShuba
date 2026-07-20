import "../assets/Partners.css";

function Partners() {
  return (
    <section className="partners" id="partners">

      <div className="partners-header">
        <span className="section-tag">PARTNERS</span>

        <h2>
          Partners & Investors
        </h2>

        <p>
          Trusted companies and organizations that support the SpiderShiba Inu ecosystem.
        </p>
      </div>

      <div className="partners-grid">

        <div className="partner-card">
          <img src="image 41.png" alt="Binance" />
          <h3>Binance</h3>
          <p>Global Crypto Exchange</p>
        </div>

        <div className="partner-card">
          <img src="/image 42.png" alt="Coinbase" />
          <h3>Coinbase</h3>
          <p>Crypto Platform</p>
        </div>

        <div className="partner-card">
          <img src="image 43.png" alt="OpenSea" />
          <h3>OpenSea</h3>
          <p>NFT Marketplace</p>
        </div>

        <div className="partner-card">
          <img src="image 44.png" alt="Polygon" />
          <h3>Polygon</h3>
          <p>Blockchain Network</p>
        </div>

        <div className="partner-card">
          <img src="image 45.png" alt="Chainlink" />
          <h3>Chainlink</h3>
          <p>Oracle Network</p>
        </div>

        <div className="partner-card">
          <img src="image 46.png" alt="MetaMask" />
          <h3>MetaMask</h3>
          <p>Crypto Wallet</p>
        </div>

        <div className="partner-card">
          <img src="image 43.png" alt="Trust Wallet" />
          <h3>Trust Wallet</h3>
          <p>Secure Wallet</p>
        </div>

        <div className="partner-card">
          <img src="image 42.png" alt="Uniswap" />
          <h3>Uniswap</h3>
          <p>DEX Platform</p>
        </div>

      </div>

    </section>
  );
}

export default Partners;