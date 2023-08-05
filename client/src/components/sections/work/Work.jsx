import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

import "./Work.css";
import WorkInfo from "./WorkInfo.jsx";
import WorkContent from "./WorkContent.jsx";
import WorkGallery from "./WorkGallery.jsx";

import PictureBox from "../../ui/PictureBox.jsx";

function Work() {
  const params = useParams();
  const workName = params.workName;
  const [work, setWork] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/works/${workName}`)
      .then((res) => res.json())
      .then((resData) => {
        setWork(resData.data.work);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [workName]);

  const colorHex = {
    purple: "#9e9bd9",
    pink: "#e3add1",
    blue: "#99cffd",
    teal: "#94d9d3",
    green: "#b8e3b7",
    yellow: "#ffedb2",
    brown: "#ead1b2",
  };

  return (
    <div>
      {loading && (
        <div className="loader">
          <PuffLoader
            loading={loading}
            size={220}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {!loading && (
        <div>
          <WorkInfo info={work.info} />
          <div
            className="work__folder"
            style={{ backgroundColor: `${colorHex[work.color]}` }}
          >
            <div className="work__folder-inner">
              <PictureBox
                className="work__heroImg"
                aspectRatio="3/2"
                img={`/images/projects/${work.name}/${work.heroImage}`}
                alt={work.name}
              />

              <div
                className="work__folder-rings"
                style={{ backgroundImage: `url(/ui/ring.svg` }}
              ></div>
              <WorkContent work={work} />
              {work.gallery && (
                <WorkGallery work={work.name} gallery={work.gallery} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Work;
