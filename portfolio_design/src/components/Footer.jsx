

import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaArrowUp, FaTerminal } from 'react-icons/fa';

export const Footer = () => {

 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgba(0,0,0,0.4)] text-white pt-16 pb-8 px-6 lg:px-20 border-t border-borderColor">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
        
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold italic">
              <FaTerminal className="text-blue-500" />
              <span>Dev<span className="text-blue-500">Analyst</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Bridging the gap between raw data and scalable web solutions. 
              Specializing in React Dashboards, Python Automation, and MERN Stack.
            </p>
          </div>

      
          <div className="flex flex-col space-y-3 text-sm">
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest">Navigation</h4>
            <a href="#about" className="text-slate-400 hover:text-blue transition-colors">About</a>
            <a href="#skills" className="text-slate-400 hover:text-blue transition-colors">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-blue transition-colors">Featured Projects</a>
            <a href="#contact" className="text-slate-400 hover:text-blue transition-colors">Contact</a>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest">Other Portfolios</h4>
            
            
            <a 
              href="https://kawsarfiroz11.netlify.app/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 p-3 bg-slate-900 border border-borderColor rounded-xl hover:border-emerald-500/50 transition-all group"
            >
              <FaGlobe className="text-emerald-400 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-slate-500">View My Primary</p>
                <p className="text-sm font-semibold text-white">Web Dev Portfolio</p>
              </div>
            </a>

            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/in/kawsarfiroz11/" target='_blank' className="p-2 bg-slate-900 rounded-lg hover:text-blue transition-colors border border-borderColor">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/kawsar334" target='_blank' className="p-2 bg-slate-900 rounded-lg hover:text-white transition-colors border border-borderColor">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Designed & Built by <span className="text-blue-500 font-medium">Your Name</span>.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest group"
          >
            Back to Top 
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};


