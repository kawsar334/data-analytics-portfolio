

import React from 'react';
import { FaCode } from 'react-icons/fa';
import { icon } from '@fortawesome/fontawesome-svg-core';
import {
  FaReact, FaNodeJs, FaPython, FaDatabase,
  FaJsSquare, FaGithub, FaServer,
  FaCss3Alt,
  FaHtml5,
  FaTable
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiRedux,
  SiPandas, SiChartdotjs, SiPostgresql,
  SiGooglesheets,
  SiExpress,
  SiTypescript,
   
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analytics",
      icon: <FaDatabase className="text-blue" />,
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "Pandas", icon: <SiPandas className="text-white" /> },
        { name: "SQL", icon: <SiPostgresql className="text-blue-300" /> },
        { name: "Chart.js", icon: <SiChartdotjs className="text-pink-400" /> },
        { name: "MS Word",icon: <span className="text-[#2563eb] text-xl">📄</span>   },
        { name: "Google Sheets", icon: <FaTable className="text-green-500" /> },
        { name: "Excel", icon: <FaTable className="text-green-700" /> },
      ]
    },
    {
      title: "Frontend Development",
      icon: <FaReact className="text-blue" />,
      skills: [
        { name: "React JS", icon: <FaReact className="text-blue" /> },
        { name: "Advanced JS", icon: <FaJsSquare className="text-yellow-300" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      ]
    },
    {
      title: "Backend & Database",
      icon: <FaServer className="text-emerald-400" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "REST APIs", icon: <FaGithub className="text-slate-400" /> },
        { name: "Fullstack Dev", icon: <FaCode className="text-white" /> },


      ]
    }
  ];

  return (
    <section className="bg-transparent  py-[120px] px-6 lg:px-20 text-white" id='skills'>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-borderColor/50 border border-slate-700 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-slate-100">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="flex items-center gap-3">
                    <span className="text-xl opacity-80">{skill.icon}</span>
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default Skills;

