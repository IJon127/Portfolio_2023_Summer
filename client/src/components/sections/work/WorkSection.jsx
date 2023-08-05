import "./WorkSection.css";

function WorkSection({ workName, section }) {
  return (
    <div className="work-section">
      {section.title && (
        <h2 className="work-section__title-subtitle">{section.title}</h2>
      )}
      {section.subtitle && (
        <h3 className="work-section__title-subtitle">{section.subtitle}</h3>
      )}
      {section.paragraphs &&
        section.paragraphs.map((para) => (
          <p className="para" key={para}>
            {para}
          </p>
        ))}
      {section.lists && (
        <ul className="work-section__ul">
          {section.lists.map((list) => (
            <li className="para" key={list}>
              {"• " + list}
            </li>
          ))}
        </ul>
      )}
      {section.video && (
        <iframe
          className="work-section__video"
          title={workName}
          src={section.video}
        ></iframe>
      )}
      {section.diagram && (
        <img
          className="work-section__diagram"
          src={`/images/projects/${workName}/${section.diagram}`}
          alt={workName}
        />
      )}
    </div>
  );
}
export default WorkSection;
