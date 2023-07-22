import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

// function Child({ onChangeColor, color }) {

//   return (
//     <div 
//       className="child"
//       style={{ backgroundColor: color }} 
//       onClick={()=> onChangeColor(getRandomColor())}>
//     </div>
//   ) 
// }

// export default Child;

function Child({ onChangeColor, color }) {

  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;