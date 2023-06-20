import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js'
import Project from './pages/Project';
import About from './pages/About'
import Readings from './pages/Readings'
import CV from './pages/CV'
import Writings from './pages/Writings'
import Whatelse from './pages/Whatelse'


function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/cv" element={<CV />} />
	    <Route path="/readings" element={<Readings />} />
	    <Route path="/writings" element={<Writings />} />
	    <Route path="/whatelse" element={<Whatelse />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

