import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ChildComponent2 = () => {
  const { changeTheme } = useContext(ThemeContext); 

  return (
    <button
      onClick={changeTheme}
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "white",
        cursor: "pointer",
        fontWeight: "bold",
        
      }}
    >
      Child Component 2
    </button>
  );
};

export default ChildComponent2;