import { motion } from "framer-motion";
import "./Featured.css";

import FeaturedContent from "./FeaturedContent.jsx";

function Featured({ index, work }) {
  const colorHex = {
    purple: "#9e9bd9",
    pink: "#e3add1",
    blue: "#99cffd",
    teal: "#94d9d3",
    green: "#b8e3b7",
    yellow: "#ffedb2",
    brown: "#ead1b2",
  };
  const folderPos = ["r", "m", "l"];
  const folderTop = work.color + "_" + folderPos[index % 3];
  const folderColorHex = colorHex[work.color];
  return (
    <motion.div className="featured">
      <div
        className="featured__folder-top"
        style={{ backgroundImage: `url(/ui/folders/${folderTop}.svg` }}
      ></div>
      <div
        className="featured__folder-bottom"
        style={{
          backgroundColor: `${folderColorHex}`,
        }}
      >
        <FeaturedContent featured={work} />
      </div>
    </motion.div>
  );
}

export default Featured;
