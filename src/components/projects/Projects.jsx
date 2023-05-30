import React from 'react';
import ProjectsHero from './ProjectsHero';
import ProjectsBody from './ProjectsBody';

export default function Projects() {
    document.title = "My Projects";
    return(
        <div>
            <ProjectsHero/>
            <ProjectsBody/>
        </div>
    )
}