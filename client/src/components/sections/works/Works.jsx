import { motion } from "framer-motion";
import "./Works.css";
import Featured from "./featured/Featured.jsx";
import WorksList from "./worksList/WorksList.jsx";

function Works({ data }) {
  const featured = data.filter((work) => work.featured);
  const others = data.filter((work) => work.featured !== true).slice(0, 7);

  const variants = {
    offscreen: {
      y: "-20%",
      scale: 0.5,
    },
    onscreen: {
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      className="works"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.div
        className="works__featureds"
        variants={variants}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {featured.map((work, index) => (
          <Featured key={index} index={index} work={work} />
        ))}
        <div className="works__others">
          <WorksList data={others} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Works;
