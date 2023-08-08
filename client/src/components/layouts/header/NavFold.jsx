import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./NavFold.css";
import NavSocial from "./NavSocial.jsx";

function NavFold({ setNavFoldOpen }) {
  const navBtns = [
    {
      name: "HOME",
      link: "",
    },
    {
      name: "WORKS",
      link: "works",
    },
    {
      name: "ABOUT",
      link: "about",
    },
    {
      name: "CONTACT",
      link: "contact",
    },
  ];

  return (
    <motion.div
      className="nav-fold"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.25 }}
    >
      <div className="nav-fold__container">
        {navBtns.map((navBtn, index) => (
          <NavLink
            className="nav-fold__btn"
            key={index}
            to={navBtn.link}
            onClick={() => {
              setNavFoldOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            {navBtn.name}
          </NavLink>
        ))}
        <NavSocial />
      </div>
    </motion.div>
  );
}

export default NavFold;
