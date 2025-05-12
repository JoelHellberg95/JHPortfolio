import './TechStack.css';

function TechStack() {
    const programming = [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Svelte", icon: "devicon-svelte-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "C#", icon: "devicon-csharp-plain colored" },
        { name: ".NET", icon: "devicon-dot-net-plain colored" },
        { name: "Markdown", icon: "devicon-markdown-original colored" }
    ];

    const design = [
        { name: "Adobe Photoshop", icon: "devicon-photoshop-plain colored" },
        { name: "Adobe Illustrator", icon: "devicon-illustrator-plain colored" },
        { name: "Adobe XD", icon: "devicon-xd-plain colored" },
        { name: "Adobe After Effects", icon: "devicon-aftereffects-plain colored" },
        { name: "Figma", icon: "devicon-figma-plain colored" }

    ];
    const IDEs = [
        { name: "Rider", icon: "devicon-rider-plain colored" },
        { name: "WebStorm", icon: "devicon-webstorm-plain colored" },
        { name: "Visual Studio", icon: "devicon-visualstudio-plain" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" }
    ]

    const other = [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-plain colored" },

        { name: "WordPress", icon: "devicon-wordpress-plain colored" }
    ];

    const renderStack = (title, stack) => (
        <div className="stack-category">
            <h3>{title}</h3>
            <div className="tech-icons">
                {stack.map((tech, index) => (
                    <div className="tech-item" key={index}>
                        <i className={tech.icon} title={tech.name}></i>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="tech-stack-section">
            <h2>Min Tech Stack</h2>
            {renderStack("Programmering", programming)}
            {renderStack("Design", design)}
            {renderStack("Övrigt", other)}
            {renderStack("IDEs", IDEs)}
        </section>
    );
}

export default TechStack;
