import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaLanguage, FaGlobe, FaKeyboard, FaComments } from 'react-icons/fa';

const Experience = () => {
  const data = [
    {
      id: 1,
      type: "experience",
      title: "Freelance Full-Stack Developer",
      organization: "Self-Employed",
      date: "2023 - Present",
      description: "Building custom data-driven web applications and React dashboards for clients. Specialized in integrating MongoDB with Node.js and creating complex data tables.",
      skills: ["React", "Node.js", "MongoDB", "Redux"]
    },
    {
      id: 2,
      type: "experience",
      title: "Data Analyst Trainee / Projects",
      organization: "Personal Portfolios",
      date: "2025",
      description: "Analyzed large datasets using Python and Pandas. Created automated SQL queries to clean and transform raw housing and sales data for visualization.",
      skills: ["Python", "Pandas", "SQL", "React js"]
    },
    {
  id: 3,
  type: "education",
  title: "Fazil (Bachelor of Theology and Islamic Studies)",
  organization: "Islamic University, Kushtia-Jhenaidah",
  date: "Graduated: 2015",
  description: "Completed a comprehensive study on Islamic Theology, Jurisprudence, and Arabic literature. Developed deep analytical skills in interpreting classical texts and understanding theological frameworks.",
  skills: ["Islamic Theology", "Arabic Literature", "Analytical Research", "Tafsir & Hadith Studies"],
  cgpa: "3.50 out of 5.00",
  institution_attended: "Bakhtar Munshi Fazil Madrasah, Feni"
}

  
  ];

  const languages = [
    { name: "English", level: "Conversational", icon: <FaGlobe className="text-blue-400" /> },
    { name: "Bangla", level: "Native", icon: <FaLanguage className="text-green-500" /> },
    { name: "Arabic", level: "Proficient (Script & Data Entry)", icon: <FaKeyboard className="text-emerald-500" /> },
    { name: "Hindi", level: "Conversational", icon: <FaComments className="text-orange-400" /> },
  ];

  return (
    <section className="bg-slate-950/10 py-[120px] px-6 lg:px-20" id="experience">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm mb-2 uppercase tracking-[0.2em] font-bold">
             Resume
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Experience & <span className="text-slate-500 italic">Education</span>
          </h3>
          <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
        </div>

    
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-12">
          {data.map((item) => (
            <div key={item.id} className="relative pl-8 group">
              <div className="absolute -left-[17px] top-0 bg-slate-900 border-2 border-blue-500 p-2 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {item.type === "experience" ? <FaBriefcase size={14} /> : <FaGraduationCap size={14} />}
              </div>

              <div className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl hover:border-slate-500 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-blue-500 font-medium">{item.organization}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-full w-fit">
                    <FaCalendarAlt size={12} />
                    {item.date}
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
                {item.cgpa && <p className="text-blue-500 font-medium mt-2"><span className='text-bold text-blue'>CGPA: </span>{item.cgpa}</p>}
                {item.institution_attended && <p className="text-blue-500 font-medium"><span className='text-bold text-blue'>Institution: </span>{item.institution_attended}</p>}
              </div>
            </div>
          ))}
        </div>

      
        <div className="mt-20">
          <h4 className="text-white text-2xl font-bold mb-8 flex items-center gap-3">
            <FaLanguage className="text-blue-500" /> Languages
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="bg-slate-800/40 border border-slate-700 p-4 rounded-xl flex items-center gap-4 hover:border-blue-500 transition-all">
                <div className="text-2xl">{lang.icon}</div>
                <div>
                  <p className="text-white font-bold text-sm">{lang.name}</p>
                  <p className="text-slate-500 text-xs">{lang.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
