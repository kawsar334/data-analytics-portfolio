


import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaTable, FaDatabase, FaChartLine, FaCode } from 'react-icons/fa';
import "./component.css"

const Projects = () => {
  const projects = [
    {
      title: "HOSPITAL PATIENTS ANALYTICS DASHBOARD ",
      description:
        "A hospital patient data analytics dashboard built as a custom alternative to Power BI. It provides  pagination, multi-column filtering, patient statistics, admission trends, disease-wise analysis, and interactive charts for real-time healthcare insights using React, Python Pandas, and Chart.js.",
      tech: ["React JS", "Python", "Pandas", "JSON", "Chart.js", "Matplotlib"],
      type: "Healthcare Analytics Dashboard",
      github: "https://github.com/kawsar334/data-analytics-portfolio/tree/main/hospitalPatient",
      excel:"https://docs.google.com/spreadsheets/d/17kfSLWRd2ePLaYhhphwv9WPgydQ9Gtz2XK5yskEWCxc/edit?usp=sharing",
      live: "https://hospitalpatientsdasboard.netlify.app/",
      icon: <FaTable className="text-blue" />
    },
    {
      title: "STUDENT  PERFORMANCE ANALYTICS  ",
      description: "A data analysis project focused on student performance evaluation. The dataset was cleaned and preprocessed by handling missing values, followed by exploratory data analysis using Matplotlib to uncover key insights across academic, behavioral, and socio-economic factors influencing exam scores.",
      tech: [ "Python", "Pandas", "JSON", "Matplotlib"],
      type: "Student data analyst dashboard",
      github: "#",
      live: "#",
      excel:"#",
      // icon: <FaDatabase className="text-emerald-400" />
      icon: <FaTable className="text-blue" />
    },
    {
      title: "CUSTOMERS SHOPING BEHAVIOR ",
      description: "i clean the missing values using pandas , modified column names , and added in to sql database  , and analyz data using matplotlib , and seaborn , ",
      tech: [ "Python", "Pandas", "JSON", "Matplotlib",'seaborn'],
      type: "Student data analyst dashboard",
      github: "https://github.com/kawsar334/data-analytics-portfolio/blob/main/customer_shoping_behaviorsss/customer_shoping_behaviors.ipynb",
      live: "#",
      excel:"#",
      // icon: <FaDatabase className="text-emerald-400" />
      icon: <FaTable className="text-blue" />
    },
    // {
    //   title: "Employee attndence and salary data analyst ",
    //   description: "Full-stack application for managing complex datasets. Built with Node.js and MongoDB to handle CRUD operations with a polished React frontend.",
    //   tech: ["React JS", "Python", "Pandas", "JSON", "Chart.js", "Matplotlib"],
    //   type: "Student data analyst dashboard",
    //   github: "#",
    //   live: "#",
    //   // icon: <FaDatabase className="text-emerald-400" />
    //   icon: <FaTable className="text-blue" />
    // },
  ];

  return (
    <section className="bg-transparent py-[120px] px-6 lg:px-20 text-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 italic text-blue font-mono flex justify-start gap-2 items-center">
            <FaCode className="text-3xl" color='white' />
            Featured_Works
          </h2>
          <p className="text-slate-400 text-lg">
            High-performance web applications and data-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-borderColor/40 border border-slate-700 p-1 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all "
            >
              <div className="p-8 bg-borderColor rounded-[calc(1.5rem-1px)] h-full flex flex-col justify-between parrentcard">
                <div className=''>
                  <div className="flex  justify-between items-start mb-6">
                    <a title="google sheet " href={project.excel} target='_blank' className="p-4 bg-slate-900 rounded-2xl border border-slate-700 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </a>
                    <div className="flex gap-5 ">
                      <a href={project.github} target='_blank' title="Source Code" className="text-slate-400 hover:text-white transition-colors">
                        <FaGithub size={22} />
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" title="Live Preview" className="text-blue hover:text-blue-300 transition-colors flex items-center gap-1 font-semibold border-blue  border-1 border px-3  py-1  rounded-full ">
                        Live Demo <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>

                  <span className="bg-blue-500/10 text-blue text-[10px] px-3 py-1 rounded-full font-bold tracking-widest uppercase border border-blue-500/20">
                    {project.type}
                  </span>

                  <h3 className="text-2xl font-bold mt-4 mb-3">{project.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 childrenCard">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-slate-500">#{t.replace(/\s/g, '')}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

