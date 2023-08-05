import { useState, useEffect, useRef } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import "./Playground.css";

import PlaygroundFilm from "./PlaygroundFilm.jsx";

function Playground({ data }) {
  const firstRow = data.slice(0, 9);
  const secondRow = data.slice(9, 18);
  const thirdRow = data.slice(18, 27);

  return (
    <div className="playground">
      {/* <h4 className="playground__title">3D Daily Practices</h4> */}
      <PlaygroundFilm images={firstRow} rotate="3" />
      <PlaygroundFilm images={secondRow} rotate="-4" />
      <PlaygroundFilm images={thirdRow} rotate="2" />
    </div>
  );
}

export default Playground;
