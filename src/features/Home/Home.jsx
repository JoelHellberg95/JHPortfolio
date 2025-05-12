import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <header className="hero">
                <h1>Välkommen till, Joel Hellbergs Portfolio</h1>
                <p>Utforska mina projekt, min erfarenhet och vad jag kan erbjuda.</p>
            </header>

            <section className="section highlight">
                <h2>Utvalda Projekt</h2>
                <div className="projects">
                    <div className="project-card">
                        <h3>Portfolio Webbsida</h3>
                        <p>Byggd med React, Tailwind och Vite.</p>
                        <button className={"readmore-button"}>Läs mer</button>
                    </div>
                    <div className="project-card">
                        <h3>Docser App</h3>
                        <p>En tjänst för arbetsorder och service inom tunga fordon.</p>
                        <button className={"readmore-button"}>Läs mer</button>
                    </div>
                </div>
            </section>

            <section className="section contact-prompt">
                <h2>Vill du jobba med mig?</h2>
                <p>Tveka inte att ta kontakt för samarbeten eller uppdrag.</p>
                <a href="/contact" className="contact-button">📩 Kontakta mig</a>
            </section>
        </div>
    );
}

export default Home;
