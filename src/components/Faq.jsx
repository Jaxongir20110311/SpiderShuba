import "../assets/Faq.css";

function Faq() {
  return (
    <section className="faq" id="faq">

      <div className="faq-header">
        <span className="section-tag">FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Everything you need to know about SpiderShiba Inu.
        </p>
      </div>

      <div className="faq-container">

        <div className="faq-card">
          <div className="faq-question">
            <h3>What is SpiderShiba Inu?</h3>
            <span>+</span>
          </div>

          <p>
            SpiderShiba Inu is a decentralized cryptocurrency ecosystem focused
            on blockchain, NFTs, gaming and community.
          </p>
        </div>

        <div className="faq-card">
          <div className="faq-question">
            <h3>How can I buy SpiderShiba Inu?</h3>
            <span>+</span>
          </div>

          <p>
            You can purchase the token through supported decentralized and
            centralized exchanges using your crypto wallet.
          </p>
        </div>

        <div className="faq-card">
          <div className="faq-question">
            <h3>Is SpiderShiba Inu secure?</h3>
            <span>+</span>
          </div>

          <p>
            Yes. The project focuses on transparency, smart contract security
            and continuous ecosystem development.
          </p>
        </div>

        <div className="faq-card">
          <div className="faq-question">
            <h3>Will there be NFTs?</h3>
            <span>+</span>
          </div>

          <p>
            Yes. SpiderShiba Inu plans to launch exclusive NFT collections with
            unique utilities.
          </p>
        </div>

        <div className="faq-card">
          <div className="faq-question">
            <h3>What are the future plans?</h3>
            <span>+</span>
          </div>

          <p>
            The roadmap includes NFTs, Play-to-Earn games, Metaverse features
            and global partnerships.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Faq;