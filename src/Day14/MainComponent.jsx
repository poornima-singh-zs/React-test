import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const MainComponent = ({ children }) => {
  const { theme ,changeTheme} = useContext(ThemeContext);  

  return (

    <>
    <div
      style={{
        backgroundColor: theme,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
        <button onClick={changeTheme}
        style={{
            padding: "30px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          >Main Container</button>
              <div
                  style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",

                      gap: "20px",
                      marginTop: "20px",
                  }}
              >
                  {children}
              </div>
          
          </div>

       
          </>
  );
};

export default MainComponent;

