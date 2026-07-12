import "../assets/Hero.css";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-blur hero-blur-left"></div>
            <div className="hero-blur hero-blur-right"></div>

            <div className="container hero-container">

                <div className="hero-content">

                    <span className="hero-subtitle">
                        Who is mr. <span>Spidershiba Inu?</span>
                    </span>

                    <h1 className="hero-title">
                        Let’s Find Out <br />
                        More About <br />
                        <span>SpiderShiba Inu</span>
                    </h1>

                    <p className="hero-description">
                        SpiderShiba Inu is the first ecosystem where
                        Blockchain, Metaverse, NFT, Play to Earn and
                        DAO are united into one revolutionary project.
                    </p>

                    <div className="hero-buttons">

                        <button className="hero-btn hero-btn-red">
                            Join Community
                            <span className="hero-web"></span>
                        </button>

                        <button className="hero-btn hero-btn-blue">
                            More About SpiderShiba
                            <span className="hero-web"></span>
                        </button>

                    </div>

                    <div className="contract">

                        <p>Contract address</p>

                        <div className="contract-box">
                            <span>
                                0x0000000000000000000000000000000000000000
                            </span>

                            <button>
                                Copy
                            </button>
                        </div>

                    </div>

                </div>

                <div className="hero-image">

                    <div className="hero-circle hero-circle-1"></div>
                    <div className="hero-circle hero-circle-2"></div>
                    <div className="hero-circle hero-circle-3"></div>

                    <img
                        src="spidershiba-img.svg"
                        alt="SpiderShiba"
                    />

                    <div className="floating floating-1"></div>
                    <div className="floating floating-2"></div>
                    <div className="floating floating-3"></div>

                </div>

            </div>

            <div className="stars">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>

        </section>
    );
}