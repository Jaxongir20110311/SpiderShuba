import "../assets/Earn.css";

export default function Earn() {
  return (
    <section className="earn">

      <div className="container earn-container">

        <div className="earn-left">

          <div className="earn-image-wrapper">

            <div className="earn-circle circle-1"></div>
            <div className="earn-circle circle-2"></div>
            <div className="earn-circle circle-3"></div>

            <img
              src="spidershiba-img.svg"
              alt="Play To Earn"
              className="earn-image"
            />

          </div>

        </div>

        <div className="earn-right">

          <span className="earn-subtitle">
            SpiderShiba Ecosystem
          </span>

          <h2 className="earn-title">
            Play To Earn <br />
            In The Metaverse
          </h2>

          <p className="earn-description">
            Explore the SpiderShiba universe, complete missions,
            collect NFTs, battle with other players and receive
            token rewards directly inside the ecosystem.
          </p>

          <div className="earn-features">

            <div className="feature-card">

              <div className="feature-icon">
                <img src="spidershiba-img.svg" alt="" />
              </div>

              <div className="feature-content">
                <h3>Earn Rewards</h3>

                <p>
                  Complete quests and receive tokens,
                  NFTs and exclusive items.
                </p>
              </div>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                <img src="spidershiba-img.svg" alt="" />
              </div>

              <div className="feature-content">
                <h3>Collect NFTs</h3>

                <p>
                  Build your own NFT collection and
                  use it inside the SpiderShiba world.
                </p>
              </div>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                <img src="spidershiba-img.svg" alt="" />
              </div>

              <div className="feature-content">
                <h3>Fight Bosses</h3>

                <p>
                  Defeat powerful enemies together
                  with your friends and earn bonuses.
                </p>
              </div>

            </div>

          </div>

          <button className="earn-btn">
            Explore Game
            <span className="earn-web"></span>
          </button>

        </div>

      </div>

    </section>
  );
}