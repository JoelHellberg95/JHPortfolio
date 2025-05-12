import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <header className="hero">
                <h1>Välkommen till, Joel Hellbergs Portfolio</h1>
                <p>Utforska mina projekt, min erfarenhet och vad jag kan erbjuda.</p>
            </header>

            <section className="section contact-prompt">
                <h2>Vill du jobba med mig?</h2>
                <p>Tveka inte att ta kontakt för samarbeten eller uppdrag.</p>
                <a href="/contact" className="contact-button">📩 Kontakta mig</a>
            </section>
        </div>
    );
}

export default Home;
