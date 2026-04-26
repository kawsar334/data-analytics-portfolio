


import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaCode, FaDatabase, FaLanguage } from 'react-icons/fa';
import myImg from "../../assets/k1.png"; 

const AboutMe = () => {
  const highlights = [
    { icon: <FaCode className="text-cyan-400" />, title: "Development", text: "React & Next.js Expert" },
    { icon: <FaDatabase className="text-blue-500" />, title: "Analytics", text: "SQL & Python Pro" },
    { icon: <FaUserGraduate className="text-emerald-500" />, title: "Education", text: "B.A / Fazil (IAU)" },
    { icon: <FaLanguage className="text-orange-400" />, title: "Multilingual", text: "Arabic & Data Entry" },
  ];

  return (
    <section className="py-24 bg-[#020617] text-white px-6 lg:px-20 min-h-screen" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[400px]">
       
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
              
          
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 p-2 bg-slate-900/50 backdrop-blur-sm">
                <img 
                  src={myImg} 
                  alt="Kaosar Ahmed" 
                  className="rounded-2xl w-full h-[400px] grayscale-0 hover:grayscale   transition-all duration-500 object-cover "
                />
              </div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 bg-slate-800 border border-slate-700 p-4 rounded-2xl shadow-2xl hidden md:block"
              >
                <p className="text-cyan-400 font-bold text-lg">2+ Years</p>
                <p className="text-slate-400 text-xs uppercase tracking-tighter">Learning & Building</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h4 className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Discovery</h4>
              <h2 className="text-4xl font-bold">About <span className="text-slate-500 italic">Me</span></h2>
              <div className="h-1 w-12 bg-cyan-500 rounded-full" />
            </div>

            <p className="text-slate-400 leading-relaxed text-lg">
              Hello! I'm <span className="text-white font-semibold">Kaosar Ahmed</span>, a dedicated Data Analyst and React Developer. 
              Coming from a strong academic background in <span className="text-cyan-400">Islamic Studies & Arabic</span>, 
              I bring a unique perspective of meticulous detail and analytical thinking to the tech world.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I specialize in bridging the gap between raw data and user-friendly interfaces. Whether it's cleaning complex 
              datasets or building high-performance dashboards, my goal is always to deliver <span className="text-white">actionable insights</span>.
            </p>

  
            <div className="grid grid-cols-2 gap-6 pt-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">{item.title}</h5>
                    <p className="text-slate-500 text-xs">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
