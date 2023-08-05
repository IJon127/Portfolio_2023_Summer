import "./WorkContent.css";
import WorkSection from "./WorkSection.jsx";
import Edge from "../../ui/Edge.jsx";

function WorkContent({ work }) {
  return (
    <div className="work-content">
      <Edge className="work-content__container">
        {work.content.map((section, index) => (
          <WorkSection key={index} section={section} workName={work.name} />
        ))}
      </Edge>
    </div>
  );
}
export default WorkContent;
