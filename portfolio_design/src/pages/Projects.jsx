import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

import banner from "../assets/shadow.png";
import { portfolio } from '../data/portfolioList';


const Projects = () => {
    // Set initial category to display all projects
    const [selectedCategory, setSelectedCategory] = useState('frontend');
    const filteredProjects = portfolio[selectedCategory];

    return (
        <div
            style={{
                backgroundImage: `url(${banner})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            className="w-full h-max flex justify-between items-center flex-col gap-10 bg-transparent text-black py-5"
        >
            <div className=' my-[80px]'>

            <div className="flex gap-5  flex-wrap justify-center items-center">
                <button
                    onClick={() => setSelectedCategory('frontend')}
                    className="py-1 px-4 border  bg-blue-600 text-blue rounded-md hover:bg-blue-700"
                >
                    Frontend
                </button>
                <button
                    onClick={() => setSelectedCategory('fullstack')}
                    className="py-1  px-4 border  bg-blue-600 text-blue rounded-md hover:bg-blue-700"
                >
                    Fullstack
                </button>
                <button
                    onClick={() => setSelectedCategory('reactNative')}
                    className="py-1  px-4 border  bg-blue-600 text-blue rounded-md hover:bg-blue-700"
                >
                    React Native
                </button>
              
                <button
                    onClick={() => setSelectedCategory('design')}
                    className="py-1  px-4 border  bg-blue-600 text-blue rounded-md hover:bg-blue-700"
                >
                    Design
                </button>
            </div>

            {/* Projects list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="max-w-sm projectcontainer  mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            className="rounded-t-lg w-full h-48 object-cover"
                            src={project.img}
                            alt={project.title}
                        />
                        <div className="p-6">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900">
                                {project.title}
                            </h5>
                            <p className="mt-2 text-gray-700 text-sm">
                                {project.desc}
                            </p>
                            <div className="mt-4">
                                {/* Dynamically adding tags */}
                                {project.tags?.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`inline-block text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${tag.bgColor}`}
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.demo}
                                target="_blank"
                                className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium text-white bg-blue rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                            >
                                View Project
                                <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            </div>

        </div>
    );
};

export default Projects;
