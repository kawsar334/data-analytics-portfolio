

import { useState } from 'react'; 
import { FaChartPie, FaChartLine, FaDatabase, FaTable, FaHome, FaBars, FaChevronLeft } from 'react-icons/fa'; 
import './App.css'
import "./index.css"
import Dashboard from "./Dashboard"
import ChartPage from "./Chart"
import Kpi from "./Kpi"
import HospitalDashboard from './HospitalDashboard';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false); 

  const sidebarItems = [
    { name: "Overview", icon: <FaHome /> },
    { name: "Analytics", icon: <FaChartLine /> },
    { name: "Reports", icon: <FaChartPie /> },
    { name: "Datasets", icon: <FaDatabase /> },
    { name: "Tables", icon: <FaTable /> },
  ];

  return (
    <div className='bg-[#1a252f] flex min-h-screen w-full p-5 overflow-x-hidden' id='overview'>
   
      <aside className={`${isCollapsed ? 'w-20' : 'w-64'} bg-[#2c3e50] rounded-3xl p-4 flex flex-col gap-8 shadow-xl border border-slate-700/50 fixed top-2 left-0 h-[100vh] transition-all duration-300 ease-in-out z-50  `}>
        
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-10 bg-blue-600 text-white p-1.5 rounded-full border-2 border-[#1a252f] hover:bg-blue-500 transition-colors"
        >
          {isCollapsed ? <FaBars size={12}/> : <FaChevronLeft size={12}/>}
        </button>

        <div className="flex items-center gap-3 px-2 overflow-hidden">
          <div className="min-w-[32px] h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">D</div>
          {!isCollapsed && <h1 className='text-white font-bold text-xl tracking-tight whitespace-nowrap'>Dashboard</h1>}
        </div>

        <nav className='flex flex-col gap-2'>
          {sidebarItems.map((item, index) => (
            <a href={`#${item.name.toLocaleLowerCase()}`}
              key={index} 
              title={isCollapsed ? item.name : ""} 
              className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-4 px-4'} py-3 rounded-xl transition-all cursor-pointer group ${index === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}
            >
              <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
              {!isCollapsed && <span className='font-medium text-sm whitespace-nowrap'>{item.name}</span>}
            </a>
          ))}
        </nav>

       
        <a href='https://kawsarfiroz11.netlify.app/' target='_block' className={`mt-auto pt-6 border-t border-slate-700/50 flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
          <div className="min-w-[40px] h-10 rounded-full bg-slate-600 border border-slate-500 overflow-hidden">
             <img src="https://avatars.githubusercontent.com/u/90864901?v=4" className='w-10 h-10 rounded-full border ' alt="User" />
          </div>
          {!isCollapsed && (
            <div  className="overflow-hidden">
              <p className="text-white text-xs font-bold whitespace-nowrap">Kaosar Ahmed</p>
              <p className="text-slate-500 text-[10px] whitespace-nowrap">Data Analyst</p>
            </div>
          )}
        </a>
      </aside>

  
      <main className='flex-1 flex flex-col gap-6 overflow-y-auto ml-20 '>
        <div className="bg-[#2c3e50]/50 p-6 rounded-3xl border border-slate-700/30 w-full" id='reports'>
        <div className='w-[90%] flex justify-end items-center   mx-auto'> 
          <a href="https://docs.google.com/spreadsheets/d/17kfSLWRd2ePLaYhhphwv9WPgydQ9Gtz2XK5yskEWCxc/edit?usp=sharing"  target='_blank' className='border px-3 py-1  bg-white rounded-full  text-[#9538e2]   font-bold mr-10 flex justify-center items-center  gap-2  '> <FaTable /> <span>google worksheet</span></a>
           </div>
          <Kpi />
        </div>
        <div className="grid grid-cols-1 gap-6 w-screen  hi ">
           <ChartPage />
        <HospitalDashboard/>
           <Dashboard />
        </div>
      </main>
    </div>
  )
}

export default App;
