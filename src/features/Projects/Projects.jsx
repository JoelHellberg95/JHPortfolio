import './Projects.css';
import { useState } from 'react';
import 'public/ai-joel.jpg'
import 'public/Portfolio.png'
import 'public/Docser.jpeg'
import 'public/hs-logo-transparent.png'
import 'public/Qr-Code Project.jpg'
function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'Docser',
            description: 'Dokumentation & serviceplattform för entreprenadfordon.',
            image: 'src/assets/Docser/Docser.jpeg',
            link: 'https://docser-app-gouux.ondigitalocean.app/',
            stack: ['devicon-react-original', 'devicon-nodejs-plain', 'devicon-css3-plain']
        },
        {
            title: 'Hellberg Portfolio',
            description: 'Personlig webbplats byggd i React & CSS.',
            image: 'src/assets/Portfolio/Portfolio.png',
            link: 'https://github.com/JoelHellberg/JHPortfolio',
            stack: ['devicon-react-original', 'devicon-html5-plain', 'devicon-css3-plain']
        },
        {
            title: 'Todo Api',
            description: 'Byggt med .NET',
            image: 'src/assets/hs-logo-transparent.png',
            link: 'https://github.com/JoelHellberg/TodoApi',
            stack: ['devicon-dot-net-plain', 'devicon-svelte-plain', 'devicon-csharp-plain']
        },
        {
            title: 'QR Code Project',
            description: 'Enkelt QR-Komponent',
            image: 'Qr-Code Project.jpg',
            link: 'https://github.com/JoelHellberg95/qr-code-component-main',
            stack: ['devicon-html5-plain', 'devicon-css3-plain']
        }
    ];

    return (
        <section className="projects-section">
            <h2>Mina Projekt</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="image-wrapper">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <div className="stack-icons">
                                    {project.stack.map((iconClass, i) => (
                                        <i key={i} className={iconClass}></i>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button className="project-link" onClick={() => setSelectedProject(project)}>
                            🔍 Visa mer
                        </button>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProject(null)}>✖</button>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <div className="stack-icons" style={{ marginBottom: '1rem' }}>
                            {selectedProject.stack.map((iconClass, i) => (
                                <i key={i} className={iconClass}></i>
                            ))}
                        </div>
                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            🌐 Besök projekt
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
