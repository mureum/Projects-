import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Catalogue from "./components/Catalogue";
import Clothes from "./components/Clothes";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="clothes">
          <Clothes />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="catalogue">
          <Catalogue />
        </div>

      </main>

    </div>
  );
};

export default App;