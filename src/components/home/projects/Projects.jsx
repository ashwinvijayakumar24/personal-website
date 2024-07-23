import React from "react";
import ProjectsGrid from "./ProjectsGrid";



const Projects = () => {
  return(
    <div className="flex flex-col items-center justify-between space-y-8 mb-8 text-white">
      <h1 className="text-2xl md:max-lg:text-3xl lg:text-4xl font-bold p-4 mx-auto text-center w-full">Programming Projects</h1>
      <ProjectsGrid/>
    </div>
  )
}



export default Projects;