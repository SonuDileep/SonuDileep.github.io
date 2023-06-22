import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import {Home} from './pages/Home.js'
import {Project} from './pages/Project';
import {Reading} from './pages/Readings'
import {CV} from './pages/CV'
import {Writing} from './pages/Writings'
import {Whtelse} from './pages/Whatelse'


function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    const { hash, pathname } = location;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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

