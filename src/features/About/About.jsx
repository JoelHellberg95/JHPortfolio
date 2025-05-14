import './About.css';
import TechStack from '../TechStack/TechStack';
function About() {
    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h2>Om mig</h2>
                    <p>Hej! Jag heter Joel och är en mångsidig utvecklare med fokus på frontend, backend och praktisk problemlösning.
                        Jag gillar att bygga smarta system, snygga gränssnitt och robusta API:er.</p>
                    <p>Med erfarenhet från både IT-support, grafisk design och webbutveckling har jag en bred förståelse för vad som krävs – både tekniskt och användarmässigt.</p>
                    <p>När jag inte kodar? Då hittar du mig ute på gården, pysslandes med projekt eller bland maskiner.</p>
                </div>
                <div className="image-container">
                    <img src="/ai-joel-transparent.png" alt="Porträttbild på Joel" className="profile-pic" />

                </div>
            </div>
            <TechStack />
        </section>


    );
}

export default About;
