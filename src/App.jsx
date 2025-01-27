
import React, { useContext } from "react";
import ChildComponent1 from "./Day14/ChildComponent1";
import ChildComponent2 from "./Day14/ChildComponent2";
import ChildComponent3 from "./Day14/ChildComponent3";
import ChildComponent4 from "./Day14/ChildComponent4";
import MainComponent from "./Day14/MainComponent";
import {ThemeProvider} from "./Day14/ThemeProvider";


const App = () => {
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

export default App;



