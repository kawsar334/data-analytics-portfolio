import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

const Button = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    return (
        <div className='fixed top-[50%] z-50 right-0 w-max bg-blue rounded-l-full py-1 px-3 group transform transition-all duration-300'  >
            <button className='z-10 flex justify-start items-center gap-1'  onClick={() => setDarkMode(!darkMode)}>
                <i class={`text-2xl ${!darkMode ? "fas fa-moon  " : "fas fa-sun"}`} ></i>
                <span className='translate-x-[100px] transition-all duration-300   group-hover:translate-x-[0px] '>
                    {darkMode ?"Dark ":"Light"}
                </span>
            </button>
       </div>
    )
}

export default Button


// opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
//   transform transition - all duration - 300 origin - left