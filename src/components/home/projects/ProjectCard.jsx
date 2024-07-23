import React from 'react';

const ProjectCard = ({project}) => {

    const noProjectLink = () => {
      if(project.link === '') {
        return true;
      }
      else {
        return false;
      }
    }
    return (
        <div className="flex flex-col md:flex-row items-center w-full mx-auto bg-slate-800 text-white p-8 rounded-lg shadow-md space-y-4">
            <div className="flex justify-center mb-4">
                <img className="size-20 md:max-xl:size-28 xl:size-36" src={project.image} alt="project logo" />
            </div>
            <div className='space-y-6 w-2/3 mx-auto'>
              <h3 className="text-xl md:max-lg:text-2xl lg:text-3xl font-bold">{project.name}</h3>
              <p className=' text-md leading-loose md:max-lg:text-lg md:max-lg:leading-loose lg:text-xl lg:leading-loose'>{project.about}</p>
              <div className=' flex flex-row justify-around text-center mx-auto'>
                <a href={project.github_link} target="_blank" rel="noreferrer"><p className='text-lg text-blue-500  mt-4 underline hover:text-blue-600'>GitHub</p></a>
                { noProjectLink() ? (
                  <p className='hidden'></p>
                ) : (
                  <a href={project.link} target="_blank" rel="noreferrer"><p className='text-lg text-blue-500  mt-4 underline hover:text-blue-600'>Site</p></a>
                )
                }
              </div>
            </div>
      </div>
    );

}


export default ProjectCard;