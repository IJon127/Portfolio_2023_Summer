import "./WorksList.css";
import WorksListItem from "./WorksListItem.jsx";
import Edge from "../../../ui/Edge.jsx";

function WorksList({ data }) {
  return (
    <div className="works-list">
      <div
        className="works-list__notebook-top"
        style={{ backgroundImage: `url(/ui/notebook.svg` }}
      ></div>
      <Edge className="works-list__notebook-bottom">
        <div className="works-list__container">
          {data.map((work, index) => (
            <WorksListItem key={index} work={work} />
          ))}
        </div>
      </Edge>
    </div>
  );
}

export default WorksList;
