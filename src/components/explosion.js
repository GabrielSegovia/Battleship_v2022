// import React from "react";
import "../index.css";
import React, {Component} from "react";
import Explosion from "react-explode/Explosion1";

class ReactExplode extends React.Component {
// class ReactExplode extends Component {
       render() {         
         return (             
         <Explosion 
         size="400" 
         delay={0} 
         repeatDelay={0.1} 
         repeat={5} 
         />         
         );     
        } 
}

export default ReactExplode;

// function Explosion() {
//   return (
//     <div className="textBox">
//         <h3>Messages</h3>
//         <br></br>
//         <p>
//                   Les messages du chat ici.
//         </p>
//                 <p className="textBox">
//                   Votre message ici! 
//                 </p>
//     </div>
//   );
// }
// export default Explosion;