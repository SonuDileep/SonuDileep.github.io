import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Home} from './pages/Home.js'
import {Project} from './pages/Project';
import {Reading} from './pages/Readings'
import {CV} from './pages/CV'
import {Writing} from './pages/Writings'
import {Whtelse} from './pages/Whatelse'


function App() {
  return (
    <div className="App">
          <Router basename={process.env.PUBLIC_URL}>
	  <Routes>

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/projects" element={<Project/>} />
            <Route exact path="/cv" element={<CV/>} />
	    <Route exact path="/readings" element={<Reading />} />
	    <Route exact path="/writings" element={<Writing />} />
	    <Route exact path="/whatelse" element={<Whtelse/>} />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
