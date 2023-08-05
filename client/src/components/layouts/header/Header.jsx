import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import "./Header.css";
import Edge from "../../ui/Edge.jsx";
import NavBurger from "./NavBurger.jsx";
import NavFold from "./NavFold.jsx";
import PictureBox from "../../ui/PictureBox.jsx";

function Header() {
  const [navFoldOpen, setNavFoldOpen] = useState(false);
  const [burgerHidden, setBurgerHidden] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);

  const [prevY, setPrevY] = useState(0);
  const { scrollY } = useScroll();
  const scrollUpdate = (latest) => {
    if (latest < prevY || latest == 0) {
      setBurgerHidden(false);
      setNavFoldOpen(false);
    } else {
      setBurgerHidden(true);
    }

    if (latest > 100) {
      setHeaderHidden(true);
    } else {
      setHeaderHidden(false);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    scrollUpdate(latest);
    setPrevY(latest);
  });

  const variants = {
    open: { opacity: 1, y: "0%" },
    closed: { opacity: 0, y: "-120%" },
  };

  return (
    <div className="header">
      {!headerHidden && (
        <Edge className="header__container">
          <a className="header__namelogo" href="/">
            <PictureBox
              className=""
              aspectRatio="2/3"
              img={"/icons/ij.svg"}
              alt="ij"
            />
          </a>
        </Edge>
      )}

      <motion.div
        className="header__nav-tag"
        initial="open"
        animate={burgerHidden ? "closed" : "open"}
        variants={variants}
      >
        <NavBurger navFoldOpen={navFoldOpen} setNavFoldOpen={setNavFoldOpen} />
        {navFoldOpen && <NavFold setNavFoldOpen={setNavFoldOpen} />}
      </motion.div>
    </div>
  );
}

export default Header;
