/* eslint-disable react/prop-types */
import  { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colors = ["#FF5733", "#33FF57"]; 
  const [theme, setTheme] = useState(colors[0]);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === colors[0] ? colors[1] : colors[0]));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
