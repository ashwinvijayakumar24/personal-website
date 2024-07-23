import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectData";

  const ProjectsGrid = () => {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 gap-8 text-center overflow-y-hidden mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    );
  };

  export default ProjectsGrid;

