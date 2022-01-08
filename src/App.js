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

function App() {
  return (
    <div className="Menu">
      <BrowserRouter>

        
        {<Menu />}
        <Routes>
          <Route path="/jeu" element={<Jeu />} /> 
          <Route path="/" element={<Accueil />} /> 

        </Routes>
      </BrowserRouter>
      {/* <Jeu /> */}

    </div>
  );
}

export default App;
