import React from 'react';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    </div>
    </Router>
  );
}

export default App;
