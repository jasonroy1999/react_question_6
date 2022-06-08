import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("");

  const handleBackground = () => {
    setBgColor(colors[Math.trunc(Math.random() * colors.length)]);
    console.log(bgColor);
  };
  const handleClick = () => {
    setCount((count += 1));
    handleBackground();
  };

  const colors = [
    "#264653",
    "#2A9D8F",
    "#E9C46A",
    "#F4A261",
    "#E76F51",
    "#003049",
    "#D62828",
    "#f15bb5",
  ];

  return (
    <div
      style={{ background: bgColor }}
      className={`w-screen h-screen flex justify-center items-center`}
    >
      <button
        onClick={handleClick}
        className="btn w-[30vw] h-[20vh] text-white text-2xl"
      >
        <span>Clicked Count:</span>
        <span className="ml-3" style={{ color: bgColor }}>
          {count}
        </span>
      </button>
    </div>
  );
};
export default App;
