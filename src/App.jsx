import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Clothes from "./components/Clothes";
import About from "./components/About";



const App = () => {
  return (
    <div>
      <Navbar />

        <div id="home">
          <Home />
        </div>

        <div id="clothes">
          <Clothes />
        </div>

        <div id="about">
          <About />
        </div>

    </div>
  );
};

export default App;