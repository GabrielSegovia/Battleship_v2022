// import logo from './logo.svg';
import '../Flotte.css';
import "../index.css";

import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import porteAvion from'./porteAvion.png';

function Card({ isDragging, color }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "CARD",
      // item: { porteAvion },
      // item: <img src={porteAvion} className="none" alt="Porte Avion" />,
      item: { color },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );

  return (
    <div
      ref={dragRef}
      style={{ opacity, backgroundColor: color }}
      className={"Card"}
    >
      {/* <img src={porteAvion} className="marina" alt="boatLeftView" /> */}
      {color} 
      {/*écrire couleur dans la casse*/}
      
    </div>
    
  );
}

function Square({ position, onDrop, color, stateCouleur }) {
  const [mesClasses, setClasses] = useState("Square");
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "CARD",
      drop: (item) => onDrop(position, item, stateCouleur),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [stateCouleur]
  );

  return (
    <td
      className={mesClasses}
      // onClick={() => setClasses("Square click")}
      style={{ backgroundColor: isOver ? "#00ff00" : color }} //hover color
      ref={drop}
    ></td>
  );
}

const size = 10;

function MonBoard() {
  const [stateCouleurs, setCouleurs] = useState(Array(size * size).fill(null));

  const DropItem = (position, item, stateCouleur) => {
    let newState = stateCouleur.slice(0);
    newState[position] = item.color;
    console.log(newState);
    setCouleurs(newState);
  };

  let arraySquare = [];
  for (let y = 0; y < size; y++) {
    let ligneSquare = [];
    for (let x = 0; x < size; x++) {
      let id = x + y * size;
      ligneSquare.push(
        <Square
          id={id}
          position={id}
          onDrop={DropItem}
          color={stateCouleurs[id]}
          stateCouleur={stateCouleurs}
        />
      );
    }
    const row = <tr>{ligneSquare}</tr>;
    arraySquare.push(row);
  }

  return <div className="App">{<Board squares={arraySquare} />}</div>;
}

function Board({ squares }) {
  return (
    <DndProvider backend={HTML5Backend}>
      
      <div className="Peintures">
        

        {/* <img src={porteAvion} className="marina" alt="boatLeftView" /> */}
        {/* <Card isDragging {porteAvion}/> */}
        {/* <Card isDragging src={porteAvion} /> */}
        {/* <Card isDragging img src={porteAvion} className="marina" alt="boatLeftView" /> */}
        <Card isDragging color="red" />
        <Card isDragging color="#59FAF5" />

      </div>
      <div className="Board"></div>

      <table>{squares}</table>
    </DndProvider>
  );
}

export default MonBoard;
