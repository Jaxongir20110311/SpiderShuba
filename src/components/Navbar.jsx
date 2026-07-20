import "../assets/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="/" className="logo">
          <img src="Group 19 (1).svg" alt="SpiderShiba" />

          <div className="logo-text">
            <h2>SpiderShiba</h2>
            <span>INU</span>
          </div>
        </a>

        <nav className="navbar-links">
          <a href="#">How it works</a>
          <a href="#">Play to Earn</a>
          <a href="#">Roadmap</a>
          <a href="#">Team</a>
          <a href="#">Partners</a>
          <a href="#">Tokenomics</a>
        </nav>

        <div className="navbar-buttons">

          <button className="community-btn">
            Join Community
            <span className="web"></span>
          </button>

          <button className="buy-btn">
            Buy Tokens
            <span className="web"></span>
          </button>

        </div>

        <button className="menu-btn">
          ☰
        </button>

      </div>
    </header>
  );
}