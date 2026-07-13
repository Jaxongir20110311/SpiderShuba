import "../assets/Team.css";

function Team() {
  return (
    <section className="team" id="team">

      <div className="team-title">
        <span>OUR TEAM</span>
        <h2>Meet Our Team</h2>
        <p>
          The people behind SpiderShiba Inu who are building the future of our ecosystem.
        </p>
      </div>

      <div className="team-container">

        <div className="team-card">
          <div className="team-image">
            <img src="image 37.png" alt="CEO" />
          </div>

          <h3>John Carter</h3>

          <span className="role">
            Founder & CEO
          </span>

          <p>
            Visionary leader with years of experience in blockchain and cryptocurrency.
          </p>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img src="image 38.png" alt="Developer" />
          </div>

          <h3>Michael Lee</h3>

          <span className="role">
            Lead Developer
          </span>

          <p>
            Full Stack Blockchain Developer focused on smart contracts and Web3.
          </p>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img src="image 39.png" alt="Marketing" />
          </div>

          <h3>Emma Wilson</h3>

          <span className="role">
            Marketing Manager
          </span>

          <p>
            Responsible for community growth, partnerships and global marketing.
          </p>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img src="image 40.png" alt="Designer" />
          </div>

          <h3>David Brown</h3>

          <span className="role">
            UI/UX Designer
          </span>

          <p>
            Creates modern interfaces and user experiences for all SpiderShiba products.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Team;