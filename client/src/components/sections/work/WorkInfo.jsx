import "./WorkInfo.css";
import Top from "../../ui/Top.jsx";

function WorkInfo({ info }) {
  return (
    <Top>
      <h1 className="work-info__title">{info.title}</h1>
      <h2 className="work-info__subtitle">{info.subtitle}</h2>
      <div className="work-info__content">
        {info.team && <p>{`Co-created with ${info.team.join(" & ")}`}</p>}
        {info.company && <p>{`Worked at ${info.company}`}</p>}
        <p>{info.type}</p>
        <p>{info.time}</p>
        {info.location && <p>{info.location}</p>}
        {/* {info.venue && <p>{info.venue}</p>} */}
      </div>
    </Top>
  );
}
export default WorkInfo;
