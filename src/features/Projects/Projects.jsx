import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'Docser',
            description: 'Dokumentation & serviceplattform för entreprenadfordon.',
            image: 'https://via.placeholder.com/400x240?text=Docser',
            link: 'https://github.com/JoelHellberg/Docser',
            stack: ['devicon-react-original', 'devicon-nodejs-plain','devicon-css3-plain']

        },
        {
            title: 'Hellberg Portfolio',
            description: 'Personlig webbplats byggd i React & CSS.',
            image: 'https://via.placeholder.com/400x240?text=Portfolio',
            link: 'https://github.com/JoelHellberg/JHPortfolio',
            stack: ['devicon-react-original', 'devicon-html5-plain', 'devicon-css3-plain']
        },
        {
            title: 'Todo Api',
            description: 'Byggt med .NET',
            image: 'https://via.placeholder.com/400x240?text=Todo+App',
            link: 'https://github.com/JoelHellberg/TodoApi',
            stack: ['devicon-dot-net-plain',"devicon-svelte-plain","devicon-csharp-plain"]
        }
    ];

    return (
        <section className="projects-section">
            <h2>Mina Projekt</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="project-overlay">
                            <div className="stack-icons">
                                {project.stack.map((iconClass, i) => (
                                    <i key={i} className={iconClass}></i>
                                ))}
                            </div>
                        </div>


                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="project-link">🔍 Visa mer</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
