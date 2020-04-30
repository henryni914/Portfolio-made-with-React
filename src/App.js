import React from 'react';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
    </Router>
  );
}

export default App;
