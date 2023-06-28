
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import DedicatedPage from './pages/DedicatedPage';


function App() {
   





    return (
      <div>
        <h2>Netflix</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/DedicatedPage'} className="nav-link">DedicatedPage</Link></li>
            
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home 
          
          />} />
          <Route path="/DedicatedPAge" element={<DedicatedPage
          
          />} /> 
          
        </Routes>
      </div>
    );
  }


export default App;
