import "../assets/Planet.css";

export default function Planet() {
  return (
    <section className="planet">

      <div className="planet-bg"></div>

      <div className="container">
 
        <div className="planet-header">

          <span className="planet-subtitle">
            Why choose SpiderShiba Inu?
          </span>

          <h2 className="planet-title">
            How it works?
          </h2>

          <p className="planet-text">
            SpiderShiba Inu combines Blockchain, NFT, DAO,
            Metaverse and Play-To-Earn into one ecosystem
            where every holder becomes part of the future.
          </p>

        </div>

        <div className="planet-wrapper">

          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>

          <div className="planet-red"></div>
          <div className="planet-blue"></div>

          <div className="planet-core">

            <img
              src="spidershiba-img.svg"
              alt="Planet"
              className="planet-image"
            />

          </div>

          <div className="planet-card card-top">

            <div className="card-icon">
              <img src="spidershiba-img.svg" alt="" />
            </div>

            <h3>SpiderShiba Inu</h3>

            <p>
              The first decentralized ecosystem connecting
              blockchain technologies into one project.
            </p>

          </div>

          <div className="planet-card card-left">

            <div className="card-number">
              01
            </div>

            <h3>Community</h3>

            <p>
              Strong worldwide community with active
              governance and DAO participation.
            </p>

          </div>

          <div className="planet-card card-right">

            <div className="card-number">
              02
            </div>

            <h3>Play To Earn</h3>

            <p>
              Earn rewards while playing inside the
              SpiderShiba metaverse.
            </p>

          </div>

          <div className="planet-card card-bottom">

            <div className="card-number">
              03
            </div>

            <h3>NFT Marketplace</h3>

            <p>
              Buy, sell and trade unique SpiderShiba
              digital collectibles.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}