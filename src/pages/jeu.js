import Flotte from '../Flotte.js';
import Attaque from '../Attaque.js';
import "../index.scss";
import React from "react";
import frontView from'../frontView.jpg';
import leftView from'../leftView.jpg';
import rightView from'../rightView.jpg';
import wheel from'../wheel.png';
import speed from'../speed.png';
// import Attaque from "Attaque.js"
// import Game from "Attaque.js"
import '../Jeu.css';


function Jeu() {
  return (
    //CONTAINER
    <div className="container"> 
      <br></br>
      {/* <h1>Bataille navale</h1> */}
      <br></br>
      <div className="row ">
          <div className="screen col col-3">
            <br></br>

                <h3>Messages</h3>
                <br></br>
                <p className="messagesBoard">
                  Les messages du chat ici.
                </p>
                {/* <div className="chatBox col col-8"> */}
                <p className="messagesBoard">
                  Votre message ici! 
                </p>
                {/* </div> */}


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
          
          <div className="screen col col-6">
            <br></br>
            <div className='textBox'>
            <h2>Flotte Navale</h2>
            <br></br>
            {/* <div className="screen"> */}
            <Flotte />
            {/* </div>        */}
            </div>
            <br></br>

            <div className="row">
              <img src={wheel} className="wheel col col-6" alt="Wheel" />
              {/* <div className="chatBox col col-8">
              <p> Boite de Conversation: Écrire les messages ici! </p>
              </div> */}
              <img src={speed} className="speed col col-6" alt="SpeedHandle" />
            </div>

            <br></br>

          </div>



          
          <img src={rightView} className="rightView col col-3" alt="boatRightView" />
      
      </div>

      <br></br>
      <br></br>

    </div>
  );
}

export default Jeu;
