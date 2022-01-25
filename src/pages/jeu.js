import Flotte from '../components/Flotte.js';
import Attaque from '../components/Attaque.js';
import Apropos from '../pages/apropos.js';
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
      <div className='screen'>
      <h1 className='textBox'>Bataille navale</h1>
      </div>
      <br></br>
      <div className="row ">
          <div className="screen col col-3">
            <br></br>
            <Message />
          </div>
          
          <img src={frontView} className="frontView col col-6" alt="boatFrontView" />
          {/* <img src="metal.jpg" className="frontView col col-6" alt="boatFrontView" /> */}

          <div className="screen col col-3">
            <Attaque />
          </div>
      </div>

      <br></br>

      <div className="row">

        <img src={leftView} className="leftView col col-3" alt="boatLeftView" />
        
        <div className='view col col-6'>
            <div className="screen">
                  {/* <br></br> */}
                  <div className='textBox'>
                      <h2>Flotte Navale</h2>
                      <br></br>
                      {/* <div className="screen"> */}
                      <Flotte />
                      {/* </div>        */}
                  </div>
              {/* <div className="textBox">
                <p> Boite de Conversation: Écrire les messages ici! </p>
              </div> */}
            
              {/* <br></br>
              <br></br> */}
            </div>
          <div>
                <img src={wheel} className="wheel col col-6" alt="Wheel" />
                <img src={speed} className="speed col col-6" alt="SpeedHandle" />

          </div>  

        </div>
        <img src={rightView} className="rightView col col-3" alt="boatRightView" />

      </div>
      
      <br></br>
      <br></br>

    </div>
  );
}

export default Jeu;
