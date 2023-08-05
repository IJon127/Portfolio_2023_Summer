import { motion } from "framer-motion";

import "./Hero.css";
import Edge from "../../ui/Edge.jsx";

function Hero() {
  return (
    <Edge className="hero">
      <div className="hero__text-box">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <h2 className="hero__text">👋, I am I-Jon Hsieh.</h2>
          <h2 className="hero__text">A designer and developer who made...</h2>
        </motion.div>
        <motion.h1
          className="hero__hero-text"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", bounce: 0.2 }}
        >
          <motion.span
            animate={{
              backgroundColor: [
                "rgba(255,255,255,0)",
                "rgba(255,255,255,0)",
                "#9ce0ff",
                "#9ce0ff",
                "rgba(255,255,255,0)",
                "rgba(255,255,255,0)",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1,
              duration: 5,
              delay: 1,
              type: "spring",
              times: [0, 0.19, 0.2, 0.4, 0.45, 1],
            }}
          >
            Websites
          </motion.span>
          ,{" "}
          <motion.span
            animate={{
              backgroundColor: [
                "rgba(255,255,255,0)",
                "rgba(255,255,255,0)",
                "#f5ea51",
                "#f5ea51",
                "rgba(255,255,255,0)",
                "rgba(255,255,255,0)",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1,
              duration: 5,
              delay: 1,
              type: "spring",
              times: [0, 0.39, 0.4, 0.6, 0.65, 1],
            }}
          >
            Games
          </motion.span>{" "}
          &{" "}
          <motion.span
            animate={{
              backgroundColor: [
                "rgba(255,255,255,0)",
                "rgba(255,255,255,0)",
                "#faa2c4",
                "#faa2c4",
                "rgba(255,255,255,0)",
                "rgba(255,255,255,0)",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1,
              duration: 5,
              delay: 1,
              type: "spring",
              times: [0, 0.59, 0.6, 0.8, 0.85, 1],
            }}
          >
            Interactive Installations
          </motion.span>
          .
        </motion.h1>
      </div>
      <motion.div
        className="hero__arrow"
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          color: ["#9ce0ff", "#f5ea51", "#faa2c4", "#9ce0ff"],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1,
          duration: 5,
          delay: 4,
          type: "spring",
          times: [0, 0.33, 0.66, 1],
        }}
      >
        ⇣
      </motion.div>
    </Edge>
  );
}

export default Hero;
