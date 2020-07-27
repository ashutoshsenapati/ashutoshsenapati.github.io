import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import ParticleComponent from "./components/particle/Particle";
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import About from "./components/about/about";
import Publication from "./components/publication/publication";
import Contact from "./components/contact/contact";
import Instructor from "./components/instructor/instructor";
import Publication2 from "./components/publication2/publication2";

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh"
        }}
      >
        <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >

          <Router>
            <div className="mainContainer">
              <div className="navBar">
                <NavBar />
              </div>

              <div className="contentBox">
                <Switch>

                  <Route path="/contact">
                    <Contact />
                  </Route>

                  <Route path="/publication">
                    <Publication />
                  </Route>
                  
                  <Route path = "/publication2">
                    <Publication2/>
                  </Route>
                  
                  <Route path="/about">
                    <About />
                  </Route>

                  <Route path="/instructor">
                    <Instructor />
                  </Route>

                  <Route path="/">
                    <Home />
                  </Route>
                  

                </Switch>
              </div>
            </div>
          </Router>

        </div>
      </div>
    </div>
  );
}

export default App;
