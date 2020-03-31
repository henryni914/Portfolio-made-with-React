import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import Project from './pages/Project'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
      </div>
    </Router>
  );
}

export default App;
