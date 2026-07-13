import "../assets/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <img src="Group 19.svg" alt="SpiderShiba Inu" />
          <h2>SpiderShiba Inu</h2>

          <p>
            SpiderShiba Inu is building the future of decentralized finance,
            blockchain gaming, NFTs and the metaverse.
          </p>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h3>Navigation</h3>

            <a href="#hero">Home</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#team">Team</a>
            <a href="#partners">Partners</a>
            <a href="#faq">FAQ</a>
            <a href="#community">Community</a>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>

            <a href="#">Whitepaper</a>
            <a href="#">Tokenomics</a>
            <a href="#">Documentation</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>

            <a href="#">support@spidershiba.io</a>
            <a href="#">Telegram</a>
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 SpiderShiba Inu. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;