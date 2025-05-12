import './About.css';
import TechStack from '../TechStack/TechStack';

function About() {
    return (
        <section className="about-section">
            <h1>Om Hellberg</h1>
            <p>
                Jag är en engagerad och nyfiken utvecklare med bred erfarenhet inom frontend, backend och UI/UX-design<br/>
                Här är en översikt över tekniker jag arbetar med:
            </p>
            <TechStack />
        </section>
    );
}

export default About;
