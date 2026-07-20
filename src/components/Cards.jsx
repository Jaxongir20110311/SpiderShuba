import "../assets/Cards.css";

export default function Cards() {
  return (
    <section className="cards">

      <div className="container">

        <div className="cards-header">

          <span className="cards-subtitle">
            SpiderShiba Ecosystem
          </span>

          <h2 className="cards-title">
            Why Choose Us?
          </h2>

          <p className="cards-text">
            A complete ecosystem built around Blockchain,
            Metaverse, NFT and Play-To-Earn technologies.
          </p>

        </div>

        <div className="cards-grid">

          <div className="card-item">

            <div className="card-icon">
              <img src="spidershiba-img.svg" alt="" />
            </div>

            <h3>SpiderShiba Bridge</h3>

            <p>
              Fast and secure cross-chain bridge connecting
              multiple blockchain networks.
            </p>

            <button>
              Learn More
            </button>

          </div>

          <div className="card-item active-card">

            <div className="card-icon">
              <img src="spidershiba-img.svg" alt="" />
            </div>

            <h3>SpiderShiba NFT</h3>

            <p>
              Collect unique NFTs and use them across the
              entire SpiderShiba ecosystem.
            </p>

            <button>
              Explore NFTs
            </button>

          </div>

          <div className="card-item">

            <div className="card-icon">
              <img src="spidershiba-img.svg" alt="" />
            </div>

            <h3>Play To Earn</h3>

            <p>
              Earn rewards while playing and participating
              in the SpiderShiba metaverse.
            </p>

            <button>
              Start Playing
            </button>

          </div>

        </div>

        <div className="cards-bottom">

          <div className="bottom-card">

            <div className="bottom-number">
              01
            </div>

            <div>
              <h4>Community Driven</h4>

              <p>
                Thousands of active members helping build
                the future of SpiderShiba.
              </p>
            </div>

          </div>

          <div className="bottom-card">

            <div className="bottom-number">
              02
            </div>

            <div>
              <h4>Secure Ecosystem</h4>

              <p>
                Advanced blockchain technologies and
                transparent smart contracts.
              </p>
            </div>

          </div>

          <div className="bottom-card">

            <div className="bottom-number">
              03
            </div>

            <div>
              <h4>Future Ready</h4>

              <p>
                Built for Metaverse, NFT integration and
                long-term ecosystem growth.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}