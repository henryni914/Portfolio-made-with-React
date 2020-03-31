import React from "react";
import Card from "../components/Card"
import Projects from "../projects.json"

function Project() {

    return (
        <div>
            <div className="container">
                <div className="row">
                    {Projects.map(project => (
                        <Card
                            name={project.name}
                            id={project.id}
                            description={project.description}
                            github={project.githubLink}
                            demo={project.demoLink}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;