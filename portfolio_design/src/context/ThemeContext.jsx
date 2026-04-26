import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();


 const ThemeProvider = ({ children }) => {
    

    const [darkMode , setDarkMode] = useState(true)



    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode  }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider ;
