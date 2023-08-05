import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import "./Top.css";
import Edge from "./Edge.jsx";

function Top({ className, hideY = 0.5, children }) {
  const classes = "top " + className;

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerWidth * hideY) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return <div>{!hidden && <Edge className={classes}>{children}</Edge>}</div>;
}

export default Top;
