import React, { useState } from "react";
import "./ColorGrid.css";
import {GRID_COLORS} from "./constants"

function ColorGrid() {
  const createGrid = () => {
    const gridCellArray = [];
    for (let row = 0; row < GRID_COLORS.length; row++) {
      for (let col = 0; col < GRID_COLORS.length; col++) {
        const backgroundColor = GRID_COLORS[col];
        const opacity = (row + 1)/GRID_COLORS.length;
        gridCellArray.push({
          style: {
            backgroundColor: `${backgroundColor}`,
            opacity: `${opacity}`,
          },
          key: `row${row}col${col}`
        });
      }
    }
    return gridCellArray;
  };

  const [cells] = useState(createGrid());
  const [dragStartIndex, setDragStartIndex] = useState();
  const [dragEndIndex, setDragEndIndex] = useState();

  const changeGridColors = (startGridColor, endGridColor) => {
    let temp = cells[startGridColor];
    cells[startGridColor] = cells[endGridColor];
    cells[endGridColor] = temp;
  };

  return (
    <div className="color-grid">
      {cells.map((cell, idx) => (
        <div
          draggable
          className="color-grid-cell"
          style={cell.style}
          key={cell.key}
          onDragStart={() => setDragStartIndex(idx)}
          onDragOver={() =>  setDragEndIndex(idx)}
          onDragEnd={() => {    
            changeGridColors(dragStartIndex, dragEndIndex);
            setDragStartIndex(null);
            setDragEndIndex(null);}
          }
        >
        </div>
      ))}
    </div>
  );
}

export default ColorGrid;
