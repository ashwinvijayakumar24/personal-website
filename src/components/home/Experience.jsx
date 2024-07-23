import React from "react";
import hosa_award from '../../assets/images/solos/hosa_award.jpg';
import { FaPython, FaJava, FaReact, FaNodeJs, FaHtml5, FaGithub,   } from "react-icons/fa6";
import { IoLogoJavascript, IoPencil,  } from "react-icons/io5";
import { DiMongodb, DiMysql  } from "react-icons/di";
import { SiMatrix } from "react-icons/si";
import { TbMathIntegral } from "react-icons/tb";
import { IconContext } from "react-icons";



const Experience = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-8 mb-8 text-white">
      <div className="rounded-lg bg-amber-400  mx-auto p-6 space-y-4">
        <img src={hosa_award} alt="hosa award pic" className="mx-auto size-64 md:max-xl:size-72 xl:size-80 rounded-lg"/>
      </div>
      <div className="space-y-6 text-center w-full mx-auto lg:w-1/2 lg:mx-0 p-8">
        <h1 className="text-2xl md:max-lg:text-3xl lg:text-4xl font-bold mb-4 p-4 w-fit mx-auto">My Experience and Skills</h1>
        <IconContext.Provider value={{ size: "1.5em", className: "global-class-name"}}>
          <div className="rounded-lg bg-blue-800 p-6 grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-8 ">
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <FaPython/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">Python</h2>
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <FaJava/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">Java</h2> 
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <IoLogoJavascript/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">JavaScript</h2> 
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <FaReact/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">React</h2> 
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <FaNodeJs/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">Node.js</h2> 
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <FaHtml5/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">HTML & CSS</h2>
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <DiMongodb/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">Mongo DB</h2> 
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <DiMysql/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">SQL</h2> 
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <FaGithub/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">Git</h2> 
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <TbMathIntegral/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">Calculus</h2> 
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <SiMatrix/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">Linear Algebra </h2>
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-5 mx-auto p-4">
                    <IoPencil/> 
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">Blogging</h2> 
                  </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
  );
}

export default Experience;