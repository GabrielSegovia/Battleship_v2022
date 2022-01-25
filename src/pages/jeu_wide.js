import Flotte from '../components/Flotte.js';
import Attaque from '../components/Attaque.js';
// import Explosion from '../components/explosion.js';
import Message from '../components/Message.js';

import React from "react";
import frontView from'../frontView.jpg';
import leftView from'../leftView.jpg';
import rightView from'../rightView.jpg';
import wheel from'../wheel.png';
import speed from'../speed.png';
// import Attaque from "Attaque.js"
// import Game from "Attaque.js"
import "../index.css";
import '../Jeu.css';


function Jeu() {
  return (
    //CONTAINER
    <div className="container"> 
      <br></br>
      <div className='screen col col-12'>
      <h1 className='textBox'>Bataille navale</h1>
      </div>
      <br></br>

      <div className="row col col-12">
        <img src={leftView} className="leftView col col-1" alt="boatLeftView" />
        <div className="col col-3">
              <Message />
              <img src={wheel} className="wheel" alt="Wheel" />
        </div>
          {/* <br></br> */}
        <div col col-4>
          <img src={frontView} className="frontView" alt="boatFrontView" />
          {/* <br></br> */}
          <div className="screen">
                  {/* <br></br> */}
                  <div className='textBox'>
                      <h2>Flotte Navale</h2>
                      <br></br>
                      <Flotte />
                  </div>
            </div>
        </div>
        <div className="screen col col-3">
          <Attaque />
          <img src={speed} className="speed" alt="SpeedHandle" />

        </div>
        <img src={rightView} className="rightView col col-1" alt="boatRightView" />
      </div>
    </div>
  );
}

export default Jeu;
