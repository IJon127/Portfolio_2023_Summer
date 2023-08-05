import { useRef } from "react";
import "./PlaygroundFilm.css";
import PlaygroundHoles from "./PlaygroundHoles";
import PictureBox from "../../ui/PictureBox.jsx";
import { motion, useScroll, useTransform } from "framer-motion";

function PlaygroundFilm({ images, rotate }) {
  const pics = images.map((uri) => `images/exercises/${uri}`);

  const leftPoint = rotate < 0 ? "-47%" : "-3%";
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const direction = rotate < 0 ? "30%" : "-30%";

  const pos = useTransform(scrollYProgress, [0, 1], ["0%", direction]);
  return (
    <div
      ref={ref}
      className="playground-film"
      style={{ transform: `rotate(${rotate}deg)`, left: `${leftPoint}` }}
    >
      <motion.div style={{ x: pos }}>
        <PlaygroundHoles />
        <div className="playground-film__images">
          {pics.map((pic, index) => (
            <div key={index} style={{ flex: 1 }}>
              <PictureBox aspectRatio="1/1" img={pic} alt="playground" />
            </div>
          ))}
        </div>
        <PlaygroundHoles />
      </motion.div>
    </div>
  );
}

export default PlaygroundFilm;
