import "./About.css";
import AboutContent from "./AboutContent.jsx";

function About({ data }) {
  return (
    <div className="about">
      <div className="about-board">
        <AboutContent about={data} />
      </div>
      <img className="about-clip" src="ui/clip.svg" />
    </div>
  );
}
export default About;
