import "./AboutItem.css";

function AboutItem({ firstLine, secondLine, link }) {
  return (
    <div className="about-item__container">
      {!link && <h3 className="about-item__title">{firstLine}</h3>}
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <h4 className="about-item__title">{firstLine}</h4>
        </a>
      )}
      <p>{secondLine}</p>
    </div>
  );
}

export default AboutItem;
