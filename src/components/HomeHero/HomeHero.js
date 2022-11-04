import './HomeHero.scss'

const HomeHero = () => {
    return (
        <section className="home-hero section-brand">
            <div className="home-hero__content container">
                <h1 className="home-hero__title">Hi, I'm Jamie</h1>
                <p className="home-hero__intro">Frontend developer based in the UK, with an interest in graphic design and the great outdoors.</p>
                <div className="home-hero__actions">
                    <a href="/" className="btn">View projects</a>
                    <a href="/" className="btn btn--outline">Download resume</a>
                </div>
            </div>
        </section>
     );
}

export default HomeHero;