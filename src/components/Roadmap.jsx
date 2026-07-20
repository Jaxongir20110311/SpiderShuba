import "../assets/Roadmap.css";

function Roadmap() {
  return (
    <section className="roadmap" id="roadmap">

      <div className="roadmap-title">
        <span>ROADMAP</span>
        <h2>Our Roadmap</h2>
        <p>
          Follow our journey as we continue building the SpiderShiba Inu ecosystem.
        </p>
      </div>

      <div className="roadmap-container">

        <div className="roadmap-card left">
          <span className="number">01</span>
          <h3>Launch Project</h3>
          <p>
            Website launch, social media creation, token deployment and
            community building.
          </p>
        </div>    

        <div className="roadmap-card right">
          <span className="number">02</span>
          <h3>Marketing</h3>
          <p>
            Influencer partnerships, advertising campaigns and exchange listings.
          </p>
        </div>

        <div className="roadmap-card left">
          <span className="number">03</span>
          <h3>NFT Collection</h3>
          <p>
            Launch exclusive SpiderShiba NFT collection with holder benefits.
          </p>
        </div>

        <div className="roadmap-card right">
          <span className="number">04</span>
          <h3>SpiderShiba Game</h3>
          <p>
            Release Play-to-Earn game with rewards and NFT integration.
          </p>
        </div>

        <div className="roadmap-card left">
          <span className="number">05</span>
          <h3>Metaverse</h3>
          <p>
            Build SpiderShiba Metaverse and expand the ecosystem worldwide.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Roadmap;
