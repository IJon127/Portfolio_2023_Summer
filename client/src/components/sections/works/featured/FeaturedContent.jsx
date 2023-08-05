import { motion } from "framer-motion";
import "./FeaturedContent.css";
import Edge from "../../../ui/Edge.jsx";
import PictureBox from "../../../ui/PictureBox.jsx";

function FeaturedContent({ featured }) {
  const textVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
    },
  };
  const imgVariants = {
    offscreen: {
      y: 200,
      rotate: 0,
      opacity: 0,
    },
    onscreen: {
      y: -5,
      rotate: -5,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="featured-content"
      initial="offscreen"
      whileInView="onscreen"
    >
      <motion.div
        className="featured-content__text"
        variants={textVariants}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
      >
        <Edge>
          <h1>{featured.info.title}</h1>
          <h2>{featured.info.type}</h2>
          <a href={`/${featured.name}`}>
            <button className="featured-content__btn">explore</button>
          </a>
        </Edge>
      </motion.div>
      <div className="featured-content__img-box">
        <motion.div
          className="featured-content__img"
          variants={imgVariants}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
          }}
        >
          <PictureBox
            aspectRatio="6/4"
            img={`/images/projects/${featured.name}/${featured.thumbnail}`}
            alt={featured.name}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FeaturedContent;
