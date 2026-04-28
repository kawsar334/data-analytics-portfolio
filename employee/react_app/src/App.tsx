

// // import { useState } from 'react'; 
// // import { FaChartPie, FaChartLine, FaDatabase, FaTable, FaHome, FaBars, FaChevronLeft } from 'react-icons/fa'; 
// import { useState } from 'react'
// import './App.css'
// import ToogleMenu from './components/ToogleMenu'
// import "./index.css"
// import Dashboard from './pages/Dashboard'



// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   }
//   return (
//     <div className='h-screen bg-blue-800 w-[100vw]'>
//       <div className='min-h-10 p-4 bg-amber-700 w-[100%] sticky top-0 left-0 z-50'>navbar</div>
//       <div className='flex justify-start gap-5 w-full  bg-red-900  '>
//         <div className={`w-[200px] bg-amber-600 h-screen fixed left-0 top-[10px] justify-center items-center p-5 ${isOpen ? 'flex' : 'hidden'}`}>sidebar </div>
//       <ToogleMenu toggleSidebar={toggleSidebar} isOpen={isOpen} setOpen={setIsOpen} />
//         <Dashboard />
//       </div>
//     </div>
//   )
// }

// export default App

import { useState } from 'react';
import { FaHome, FaTable, FaChartPie, FaDatabase, FaChartLine } from 'react-icons/fa';
import './App.css';
import './index.css';
import ToogleMenu from './components/ToogleMenu';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Employee Table', icon: <FaTable /> },
    { name: 'Analytics', icon: <FaChartPie /> },
    { name: 'Database', icon: <FaDatabase /> },
    { name: 'Reports', icon: <FaChartLine /> },
  ];

  return (
    <div className="h-screen bg-slate-100 w-screen overflow-x-hidden">
      {/* Navbar */}
      <div className="h-16 px-6 flex items-center bg-slate-800 text-white font-bold text-xl fixed top-0 left-0 w-full z-50 shadow-md">
        Employee Analytics Dashboard
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-full w-[220px] bg-white border-r border-gray-300 shadow-lg p-5 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="text-2xl font-bold text-slate-700 mb-8">Menu</h2>

        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-100 cursor-pointer text-slate-700 font-medium transition"
            >
              <span className="text-blue-600 text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Button */}
      <ToogleMenu toggleSidebar={toggleSidebar} isOpen={isOpen} />

      {/* Main Content */}
      <div
        className={`pt-20 px-6 transition-all duration-300 ${
          isOpen ? 'ml-[220px]' : 'ml-0'
        }`}
      >
        <Dashboard />
      </div>
    </div>
  );
};

export default App;