import './About.css';
import TechStack from '../TechStack/TechStack';

function About() {
    return (
        <section className="about-section">
            <h2>Om mig</h2>
            <img className={"profile-pic"} src="/src/assets/bilder/ai-joel.jpg" alt="Joel" />
            <div className="about-content">
                <div className="about-text">
                    <p>Hej! Jag heter Joel och är en mångsidig utvecklare med fokus på frontend, backend och praktisk problemlösning. Jag gillar att bygga smarta system, snygga gränssnitt och robusta API:er.</p>
                    <p>Med erfarenhet från både IT-support, grafisk design och webbutveckling har jag en bred förståelse för vad som krävs – både tekniskt och användarmässigt.</p>
                    <p>När jag inte kodar? Då hittar du mig ute på gården, pysslandes med projekt eller bland maskiner.</p>
                </div>
            </div>
            <TechStack />
        </section>

    );
}

export default About;
