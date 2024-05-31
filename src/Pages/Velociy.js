import React, { useState, useRef } from "react";
import "./velocity.css";
import pin from "../Assets/Games/pin.svg";

const colors = [
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },

  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "FF0000",
    code: "#FF0000",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#FF000B  ",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },
  {
    name: "FFD958",
    code: "#FFD958",
  },
  {
    name: "1D9377",
    code: "#1D9377",
  },

  {
    name: "FFD958",
    code: "#FFD958",
  },
];

const Velociy = () => {
  const totalSegments = 50;
  const segmentAngle = 360 / totalSegments;
  const [isRotating, setIsRotating] = useState(false);
  const [colorArray, setColorArray] = useState(colors);

  const segments = [];

  for (let i = 0; i < totalSegments; i++) {
    const segmentColor = colorArray[i % colors.length];
    segments.push(
      <div
        key={i}
        className="segment"
        style={{
          transform: `rotate(${i * segmentAngle}deg)`,
          backgroundColor: segmentColor.code,
        }}
      >
        {i}
      </div>
    );
  }

  const handleRotate = () => {
    setIsRotating(!isRotating);
  };

  const reorderColors = (name) => {
    const index = colorArray.findIndex((color) => color.name === name);
    if (index !== -1) {
      const newColors = [
        colorArray[index],
        ...colorArray.slice(0, index),
        ...colorArray.slice(index + 1),
      ];
      setColorArray(newColors);
    }
  };

  return (
    <>
      <div className="center-div InCenter">
        <img src={pin} alt="" />
        <div className={`circle InCenter`}>
          {segments}
          <div className={`white-space `}></div>
        </div>
      </div>

      <div className="center-div">
        <img src={pin} alt="" />
        <div className={`circle ${isRotating ? "rotate" : ""}`}>
          {segments}
          <div className={`white-space  ${isRotating ? "rotate" : ""}`}></div>
        </div>
        <button onClick={handleRotate}>{isRotating ? "Stop" : "Rotate"}</button>
        <div>
          {colors.map((color) => (
            <button key={color.name} onClick={() => reorderColors(color.name)}>
              Make {color.name} First
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Velociy;
