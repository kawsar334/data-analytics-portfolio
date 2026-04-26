
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaExternalLinkAlt, FaGlobe } from "react-icons/fa";

export default function DataAnalystHeroSection() {
  const skills = ["React", "Python", "SQL", "JavaScript", "Node.js"];

  return (
    <section className="min-h-[130vh] bg-[#020617] text-white flex items-center px-6 lg:px-20 py-20 overflow-hidden relative">

      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] -z-10" />
      <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full mt-10">


        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs md:text-sm text-cyan-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for Data Analyst & Dashboard Projects
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-dark">Kaosar Ahmed</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-300">
              Data Analyst & React Dashboard Developer
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              I transform raw data into interactive visual stories. Specialized in
              <span className="text-cyan-400"> KPI tracking</span>, dynamic charts, and high-performance <span className="text-cyan-400">React</span> dashboards.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="group flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-2 font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              View Projects <FaExternalLinkAlt size={14} />
            </a>
            <a className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-2 font-bold text-white transition-all hover:border-cyan-500">
              Resume <FaDownload size={14} />
            </a>
          </div>

          <div className="flex gap-5 pt-4">

            <a href="https://www.linkedin.com/in/kawsarfiroz11/" target="_blank" className="text-slate-400 hover:text-cyan-400 transition-colors"><FaLinkedin size={24} /></a>
            <a href="https://github.com/kawsar334" target="_blank" className="text-slate-400 hover:text-white transition-colors"><FaGithub size={24} /></a>
            {/* <a href="https://www.facebook.com/people/Kawsar-Firoz/pfbid0r1pxBo3Vo1wkZFSrLyG5h9NyLKMmAi3tNeoEXMKRdnciRFrmY4kzApZzGj4rPRoGl/" target="_blank" className="text-slate-400 hover:text-cyan-400 transition-colors"><FaEnvelope size={24} /></a> */}
            <a href="https://kawsarfiroz11.netlify.app/" target="_blank" className="text-slate-400 hover:text-white transition-colors"><FaGlobe size={24} className="text-emerald-400 group-hover:scale-110 transition-transform" /> </a>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 bg-slate-900/80 border border-slate-700 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-xl w-full max-w-[500px] mx-auto"
          >

            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>

            <div className="font-mono text-sm md:text-base space-y-2">
              <p><span className="text-pink-500">const</span> <span className="text-cyan-400">Analyst</span> = {"{"}</p>
              <p className="pl-4">
                <span className="text-slate-300">name:</span> <span className="text-yellow-200">'Kaosar Ahmed'</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-300">skills:</span> [
                {skills.map((s, i) => (
                  <span key={i} className="text-emerald-400">'{s}'{i < skills.length - 1 ? ', ' : ''}</span>
                ))}]
              </p>
              <p className="pl-4">
                <span className="text-slate-300">focus:</span> <span className="text-yellow-200">'Data Visualization'</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-300">goal:</span> <span className="text-yellow-200">'Actionable Insights'</span>
              </p>
              <p>{"};"}</p>
            </div>


            <div className="absolute -bottom-4 -right-4 bg-cyan-500/20 w-full h-full -z-10 rounded-2xl blur-sm border border-cyan-500/10" />
          </motion.div>


          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl z-20 hidden md:block"
          >
            <div className="text-cyan-400 font-bold text-xl">99%</div>
            <div className="text-slate-400 text-xs uppercase tracking-wider">Accuracy Rate</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
