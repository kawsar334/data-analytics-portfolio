import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Tittle = ({text}) => {


    const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
      <h2 className={`text-5xl font-semibold ${darkMode ?"text-white ":"text-secondary"} my-7 text-center first-letter:text-blue `} data-aos="fade-up">{text}</h2>
  )
}

export default Tittle