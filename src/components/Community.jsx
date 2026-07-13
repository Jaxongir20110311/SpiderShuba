import "../assets/Community.css";

function Community() {
  return (
    <section className="community" id="community">

      <div className="community-header">

        <span className="section-tag">
          COMMUNITY
        </span>

        <h2>
          Join Our Community
        </h2>

        <p>
          Become part of the SpiderShiba Inu family. Follow us on social media,
          stay updated with the latest news, and connect with thousands of
          community members around the world.
        </p>

      </div>

      <div className="community-container">

        <div className="social-card">
          <img src="Group 77.png" alt="Telegram" />
          <h3>Telegram</h3>
          <p>Join our official Telegram community.</p>
          <button>Join Now</button>
        </div>

        <div className="social-card">
          <img src="Group 78.png" alt="Twitter" />
          <h3>Twitter</h3>
          <p>Follow us for the latest announcements.</p>
          <button>Follow</button>
        </div>

        <div className="social-card">
          <img src="Group.png" alt="Discord" />
          <h3>Discord</h3>
          <p>Chat with our amazing community members.</p>
          <button>Join Server</button>
        </div>

        <div className="social-card">
          <img src="Group 80.png" alt="Reddit" />
          <h3>Facebook</h3>
          <p>Read discussions and share your ideas.</p>
          <button>Visit</button>
        </div>

      </div>

      <div className="community-image">
        <img src="spidershiba-img.svg" alt="SpiderShiba" />
      </div>

    </section>
  );
}

export default Community;