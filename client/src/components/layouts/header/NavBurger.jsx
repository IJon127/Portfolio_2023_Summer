import { motion } from "framer-motion";
import "./NavBurger.css";

function NavBurger({ navFoldOpen, setNavFoldOpen }) {
  const variants1 = {
    open: { y: "0" },
    closed: { y: "12px", rotate: 45 },
  };
  const variants2 = {
    open: { y: "24px" },
    closed: { y: "12px", rotate: -45 },
  };

  return (
    <button className="nav-burger" onClick={() => setNavFoldOpen(!navFoldOpen)}>
      <div className="nav-burger__lines">
        <motion.div
          className="nav-burger__line"
          animate={navFoldOpen ? "closed" : "open"}
          variants={variants1}
        />
        <motion.div
          className="nav-burger__line"
          animate={navFoldOpen ? "closed" : "open"}
          variants={variants2}
        />
      </div>
    </button>
  );
}

export default NavBurger;
