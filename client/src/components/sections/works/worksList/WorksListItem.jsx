import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WorksListItem.css";
import PictureBox from "../../../ui/PictureBox.jsx";

function WorksListItem({ work }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.a
      href={`/${work.name}`}
      className="works-list-item"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <motion.div
        className="works-list-item__container"
        whileHover={{ scale: 1.05 }}
      >
        <h1 className="works-list-item__title">{work.info.title}</h1>
        <h3 className="works-list-item__type">{work.info.type}</h3>
      </motion.div>
      <AnimatePresence>
        {isHover ? (
          <motion.div
            className="works-list-item__img"
            initial={{ scale: 0, y: 0, rotate: -5 }}
            animate={{ scale: 1, y: "-55%", rotate: 5 }}
            exit={{ scale: 0, y: 0, rotate: -5 }}
          >
            <PictureBox
              aspectRatio="3/2"
              img={`/images/projects/${work.name}/${work.thumbnail}`}
              alt={work.name}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.a>
  );
}

export default WorksListItem;
