import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
// import defaultExport from 'module'
import Jeu from './pages/jeu.js';
import Menu from './pages/menu.js';
import Accueil from './pages/accueil.js';
// import Login from './pages/login.js';

// import {AuthContext} from './components/AuthContext.js';
import Login from './pages/login.js';
// import { useState,useMemo } from 'react';

function App() {

  
  return (
    <div className="Menu">
      <BrowserRouter>
        
        {<Menu />}



        <Routes>
          <Route path="/jeu" element={<Jeu />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/" element={<Accueil />} /> 
        </Routes>
        
      </BrowserRouter>
      {/* <Jeu /> */}

    </div>
  );
}

export default App;
