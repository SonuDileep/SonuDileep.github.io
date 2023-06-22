import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre'
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import {Home} from './pages/Home.js'
import {Project} from './pages/Project';
import {Reading} from './pages/Readings'
import {CV} from './pages/CV'
import {Writing} from './pages/Writings'
import {Whtelse} from './pages/Whatelse'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/readings" element={<Reading />} />
          <Route path="/writings" element={<Writing />} />
          <Route path="/whatelse" element={<Whtelse />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

