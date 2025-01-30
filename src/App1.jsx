
import React, { useContext } from "react";
import ChildComponent1 from "./Day15/ChildComponent1";
import ChildComponent2 from "./Day15/ChildComponent2";
import ChildComponent3 from "./Day15/ChildComponent3";
import ChildComponent4 from "./Day15/ChildComponent4";
import MainComponent from "./Day15/MainComponent";
import {ThemeProvider} from "./Day15/ThemeProvider";


const App1= () => {
  return (
    <ThemeProvider>
      <MainComponent>
        <ChildComponent1 />
        <ChildComponent2 />
        <ChildComponent3 />
        <ChildComponent4 />
      </MainComponent>
    </ThemeProvider>
  );
};

export default App1;



